// Build script to sync cv-data.js with app.js and compile to dist/
const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Clean up old files in dist root (if they exist)
const oldFiles = ['app.js', 'index.html', 'styles.css', 'print.css'];
oldFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Removed old file: ${file}`);
    }
});

// Create language subdirectories
const enDir = path.join(distDir, 'en');
const esDir = path.join(distDir, 'es');

[enDir, esDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Read cv-data.js
const cvDataPath = path.join(__dirname, 'data', 'cv-data.js');
const cvDataContent = fs.readFileSync(cvDataPath, 'utf8');

// Extract the cvData object from cv-data.js
const cvDataMatch = cvDataContent.match(/const cvData = \{[\s\S]*?\};/);
if (!cvDataMatch) {
    console.error('Could not find cvData object in cv-data.js');
    process.exit(1);
}

const cvDataObject = cvDataMatch[0];

// Read app.js
const appJsPath = path.join(__dirname, 'src', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Replace the cvData object in app.js
const updatedAppJsContent = appJsContent.replace(
    /const cvData = \{[\s\S]*?\};/,
    cvDataObject
);

// Write updated app.js to src/ (development)
fs.writeFileSync(appJsPath, updatedAppJsContent, 'utf8');

// Copy files to both language directories in dist/
const filesToCopy = [
    'src/index.html',
    'src/styles.css',
    'src/print.css',
    'src/app.js'
];

['en', 'es'].forEach(lang => {
    const langDir = path.join(distDir, lang);
    console.log(`\n📦 Building ${lang.toUpperCase()} version...`);
    
    filesToCopy.forEach(file => {
        const sourcePath = path.join(__dirname, file);
        const destPath = path.join(langDir, path.basename(file));
        fs.copyFileSync(sourcePath, destPath);
        console.log(`📄 Copied ${file} to dist/${lang}/`);
    });
});

console.log('\n✅ Build completed: cv-data.js synced with app.js and compiled to dist/en/ and dist/es/');