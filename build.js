// Build script to generate multiple CV versions based on profiles
const fs = require('fs');
const path = require('path');

// Load configurations
const versionsConfig = require('./data/versions.js');
const cvData = require('./data/cv-data.js');
const skillsData = require('./data/skills.js');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Clean up old dist structure if it exists
const oldDirs = ['en', 'es'];
oldDirs.forEach(dir => {
    const dirPath = path.join(distDir, dir);
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`🗑️  Removed old directory: ${dir}`);
    }
});

// Clean up old files in dist root (if they exist)
const oldFiles = ['app.js', 'index.html', 'styles.css', 'print.css'];
oldFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Removed old file: ${file}`);
    }
});

// Function to get profile-specific data
function getProfileData(profileId) {
    // Get profile-specific title and summary, fallback to default
    const title = cvData.title[profileId] || cvData.title.default;
    const summary = cvData.summary[profileId] || cvData.summary.default;
    
    // Get profile-specific skills, fallback to default
    const skills = skillsData[profileId] || skillsData.default;
    
    // Adapt skills to the format expected by app.js
    // The profile skills may have different categories, so we need to map them
    const technicalSkills = {};
    const projectManagementSkills = {};
    
    // Map skills to technicalSkills and projectManagementSkills based on profile and content
    Object.keys(skills).forEach(category => {
        const categorySkills = skills[category];
        if (Array.isArray(categorySkills)) {
            // Profile-specific mapping
            if (profileId === 'delivery-manager') {
                // Delivery Manager: emphasize project management skills
                if (['methodologies', 'leadership', 'delivery', 'communication'].includes(category)) {
                    projectManagementSkills[category] = categorySkills;
                } else {
                    // Put technical skills in a minimal technical section
                    technicalSkills[category] = categorySkills;
                }
            } else if (profileId === 'frontend-lead') {
                // Frontend Lead: emphasize technical skills
                if (['frontend', 'architecture', 'webDesign', 'accessibility', 'tools'].includes(category)) {
                    technicalSkills[category] = categorySkills;
                } else if (['leadership', 'methodologies'].includes(category)) {
                    projectManagementSkills[category] = categorySkills;
                } else {
                    technicalSkills[category] = categorySkills;
                }
            } else if (profileId === 'technical-project-manager') {
                // Technical Project Manager: balanced approach
                if (['projectManagement', 'methodologies', 'leadership', 'delivery', 'communication'].includes(category)) {
                    projectManagementSkills[category] = categorySkills;
                } else if (['technical', 'tools'].includes(category)) {
                    technicalSkills[category] = categorySkills;
                } else {
                    // Default to project management for TPM
                    projectManagementSkills[category] = categorySkills;
                }
            } else {
                // Default profile: general mapping
                if (['frontend', 'architecture', 'webDesign', 'accessibility', 'tools', 'technical'].includes(category)) {
                    technicalSkills[category] = categorySkills;
                } else if (['methodologies', 'leadership', 'delivery', 'communication', 'projectManagement'].includes(category)) {
                    projectManagementSkills[category] = categorySkills;
                } else {
                    technicalSkills[category] = categorySkills;
                }
            }
        }
    });
    
    // Return combined data object with the correct format expected by app.js
    return {
        personal: cvData.personal,
        title: title, // This is already in the format { en: "...", es: "..." }
        summary: summary, // This is already in the format { en: "...", es: "..." }
        experience: cvData.experience,
        selectedProjects: cvData.selectedProjects,
        technicalSkills: Object.keys(technicalSkills).length > 0 ? technicalSkills : skills,
        projectManagementSkills: Object.keys(projectManagementSkills).length > 0 ? projectManagementSkills : skills,
        education: cvData.education,
        certifications: cvData.certifications,
        languages: cvData.languages
    };
}

// Function to generate cvData object string for injection
function generateCvDataString(profileData) {
    return `const cvData = ${JSON.stringify(profileData, null, 2)};`;
}

// Read app.js template
const appJsPath = path.join(__dirname, 'src', 'app.js');
const appJsTemplate = fs.readFileSync(appJsPath, 'utf8');

// Extract the app.js content without the cvData object
const appJsWithoutData = appJsTemplate.replace(/const cvData = \{[\s\S]*?\};/, '');

// Generate each version
versionsConfig.forEach(version => {
    console.log(`\n📦 Building ${version.name} version...`);
    
    // Get profile-specific data
    const profileData = getProfileData(version.id);
    
    // Generate cvData string for this profile
    const cvDataString = generateCvDataString(profileData);
    
    // Create profile-specific app.js
    const profileAppJs = cvDataString + '\n\n' + appJsWithoutData;
    
    // Create version directory structure
    const versionDir = path.join(distDir, 'versions', version.outputDir);
    
    // Create language subdirectories for this version
    ['en', 'es'].forEach(lang => {
        const langDir = path.join(versionDir, lang);
        if (!fs.existsSync(langDir)) {
            fs.mkdirSync(langDir, { recursive: true });
        }
        
        // Copy files to language directory
        const filesToCopy = [
            { source: 'src/index.html', dest: 'index.html' },
            { source: 'src/styles.css', dest: 'styles.css' },
            { source: 'src/print.css', dest: 'print.css' },
            { source: profileAppJs, dest: 'app.js', isContent: true }
        ];
        
        filesToCopy.forEach(file => {
            const destPath = path.join(langDir, file.dest);
            if (file.isContent) {
                fs.writeFileSync(destPath, file.source, 'utf8');
            } else {
                const sourcePath = path.join(__dirname, file.source);
                fs.copyFileSync(sourcePath, destPath);
            }
            console.log(`📄 Generated ${file.dest} for ${version.name} (${lang.toUpperCase()})`);
        });
    });
    
    console.log(`✅ ${version.name} version built successfully`);
});

// Also update the development version in src/ with default profile
console.log(`\n📦 Updating development version...`);
const defaultProfileData = getProfileData('default');
const defaultCvDataString = generateCvDataString(defaultProfileData);
const defaultAppJs = defaultCvDataString + '\n\n' + appJsWithoutData;
fs.writeFileSync(appJsPath, defaultAppJs, 'utf8');
console.log(`✅ Development version updated in src/app.js`);

console.log('\n🎉 Build completed successfully!');
console.log(`Generated ${versionsConfig.length} CV versions:`);
versionsConfig.forEach(version => {
    console.log(`  - ${version.name}: dist/versions/${version.outputDir}/`);
});
console.log(`Development version: src/`);