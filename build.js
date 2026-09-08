// Build script to sync cv-data.js with app.js and compile to dist/
const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

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

// Copy files to dist/ directory (production build)
const filesToCopy = [
    'src/index.html',
    'src/styles.css',
    'src/print.css',
    'src/app.js'
];

filesToCopy.forEach(file => {
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(__dirname, 'dist', path.basename(file));
    fs.copyFileSync(sourcePath, destPath);
    console.log(`📄 Copied ${file} to dist/`);
});

console.log('✅ Build completed: cv-data.js synced with app.js and compiled to dist/');