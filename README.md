# cv-guillermo-forero

Professional CV website for Guillermo Forero - Technical Project Management | Frontend Lead | Digital delivery | Web Accessibility

**Note:** For AI/LLM agents working on this project, please refer to [AGENTS.md](AGENTS.md) for detailed project context and guidelines.

## Project Structure

```
cv-guillermo-forero/
├── README.md
├── data/
│   ├── cv-data.js       # Main CV data (personal info, experience, education, etc.)
│   ├── skills.js        # Technical skills organized by category
│   └── keywords.js      # SEO and search optimization keywords
├── src/
│   ├── index.html       # Main HTML structure
│   ├── styles.css       # Main stylesheet
│   ├── print.css        # Print-specific styles
│   └── app.js           # JavaScript for dynamic content loading
├── dist/                # Distribution files (build output)
└── versions/
    ├── technical-project-manager/    # Technical Project Manager version
    ├── frontend-lead/                # Frontend Lead version
    └── delivery-manager/             # Delivery Manager version
```

## Features

- Responsive design for all devices
- Print-optimized layout
- Accessible following WCAG guidelines
- Dynamic content loading from data files
- Multiple CV versions for different roles

## Data Files

### cv-data.js
Contains the main CV information:
- Personal information
- Professional summary
- Work experience (company, position, dates, responsibilities, achievements, technologies)
- Selected projects
- Technical skills
- Education
- Certifications
- Languages

### skills.js
Organized technical skills by category:
- Frontend development
- Web design
- Accessibility
- Project management
- Backend development
- DevOps

### keywords.js
SEO and search optimization keywords:
- Job titles
- Technical keywords
- Accessibility keywords
- Project management keywords
- Soft skills
- Industry keywords

## Build Process

### Building the project
When you make changes to `data/cv-data.js`, you need to run the build script to sync the data and compile the project:

```bash
npm run build
```

The build process:
1. Reads the current data from `data/cv-data.js`
2. Extracts the cvData object
3. Replaces the cvData object in `src/app.js` (development)
4. Compiles all files to the `dist/` directory (production)

### Build Commands
- `npm run build` - Sync data and compile to dist/
- `npm run dev` - Build and open development version from src/
- `npm run preview` - Build and open production version from dist/

### Build Output
The compiled files are placed in the `dist/` directory:
- `dist/index.html` - Compiled HTML
- `dist/styles.css` - Compiled stylesheet
- `dist/print.css` - Compiled print styles
- `dist/app.js` - Compiled JavaScript with synced data

## Usage

To view the CV (development):
1. Run `npm run build` to sync data files
2. Open `src/index.html` in a web browser
3. The content will be dynamically loaded from the data files

To view the CV (production):
1. Run `npm run build` to compile the project
2. Open `dist/index.html` in a web browser
3. Or use `npm run preview` to build and open automatically

To print the CV:
1. Open `src/index.html` or `dist/index.html` in a web browser
2. Use the browser's print function (Ctrl+P or Cmd+P)
3. The print.css file will optimize the layout for printing

## Versions

The project includes different versions of the CV tailored for specific roles:
- **Technical Project Manager**: Focus on project management and technical leadership
- **Frontend Lead**: Emphasis on frontend development and team leadership
- **Delivery Manager**: Highlight delivery management and stakeholder coordination

## Development

The project uses vanilla JavaScript and CSS for simplicity and compatibility. Data is stored in separate JSON-like JavaScript files for easy maintenance and updates.
