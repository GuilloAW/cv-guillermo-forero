# AGENTS.md - Project Context for AI/LLM

This file provides context and information for AI agents and LLMs working on the cv-guillermo-forero project.

## Project Overview

**Project Name:** cv-guillermo-forero

**Description:** Professional CV website for Guillermo Forero - Technical Project Management | Frontend Lead | Digital delivery | Web Accessibility

**Purpose:** Create a responsive, accessible, and professional CV website that showcases Guillermo Forero's experience in technical project management, frontend development, and web accessibility.

## Project Structure

```
cv-guillermo-forero/
├── README.md                  # Main project documentation
├── AGENTS.md                  # This file - AI/LLM context
├── data/
│   ├── cv-data.js            # Main CV data (personal info, experience, education, etc.)
│   ├── skills.js             # Technical skills organized by category
│   └── keywords.js           # SEO and search optimization keywords
├── src/
│   ├── index.html            # Main HTML structure
│   ├── styles.css            # Main stylesheet
│   ├── print.css             # Print-specific styles
│   └── app.js                # JavaScript for dynamic content loading
├── dist/                     # Distribution files (build output)
└── versions/
    ├── technical-project-manager/    # Technical Project Manager version
    ├── frontend-lead/                # Frontend Lead version
    └── delivery-manager/             # Delivery Manager version
```

## Key Features

- Responsive design for all devices
- Print-optimized layout
- Accessible following WCAG guidelines
- Dynamic content loading from data files
- Multiple CV versions for different roles

## Data Files Structure

### cv-data.js
Contains the main CV information organized in sections:
- Personal information (name, title, location, contact)
- Professional summary
- Work experience (company, position, dates, achievements, technologies)
- Selected projects (project, problem, solution, impact)
- Technical skills (categorized by frontend, web design, accessibility, project management)
- Education (master's and professional degrees)
- Certifications
- Languages

### skills.js
Organized technical skills by category:
- Frontend development (JavaScript, React, TypeScript, HTML, CSS, etc.)
- Web design (UX, UI, DCU, universal design)
- Accessibility (WCAG, ARIA, semantic HTML, accessibility testing)
- Project management (Agile, Scrum, stakeholder management, delivery)
- Backend development (PHP, CodeIgniter, MySQL, API)
- DevOps (Docker, Nginx, Git, gitea, gitlab)

### keywords.js
SEO and search optimization keywords organized by:
- Job titles
- Technical keywords
- Accessibility keywords
- Project management keywords
- Soft skills
- Industry keywords

## Development Guidelines

### Technology Stack
- Vanilla JavaScript for simplicity and compatibility
- CSS for styling with responsive design
- HTML5 with semantic structure
- No build tools or frameworks required

### Code Style
- Follow existing code conventions in the project
- Maintain consistent formatting
- Keep JavaScript modular and maintainable
- Use clear, descriptive variable and function names

### Accessibility Standards
- Follow WCAG 2.1 guidelines
- Use semantic HTML elements
- Ensure proper color contrast
- Provide alternative text for images
- Support keyboard navigation
- Test with screen readers

## MCP Integration

**Important:** When working with this project, agents should utilize the `sequential-thinking` MCP server to think in a more structured manner. This helps with complex problem-solving and systematic analysis of requirements.

## Skills Registration

This project currently uses no custom skills. Any future skills should be registered in the `.devin/skills/` directory following the project structure.

## Update Protocol

**CRITICAL:** Whenever any update is made to the project, the following files must be synchronized:

1. **README.md** - Main project documentation
2. **AGENTS.md** - This file (AI/LLM context)

Both files must reflect the same project state and structure. Changes to project structure, features, or guidelines should be updated in both files simultaneously.

## CV Versions

The project supports multiple CV versions tailored for specific roles:

### Technical Project Manager Version
- Focus on project management and technical leadership
- Emphasize stakeholder management and delivery
- Highlight strategic planning and team coordination

### Frontend Lead Version
- Emphasis on frontend development and team leadership
- Focus on technical skills and architecture
- Highlight development methodologies and best practices

### Delivery Manager Version
- Highlight delivery management and stakeholder coordination
- Focus on project execution and timeline management
- Emphasize Agile methodologies and continuous improvement

## Testing and Verification

### Browser Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on different screen sizes (mobile, tablet, desktop)
- Test print functionality

### Accessibility Testing
- Use accessibility testing tools
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios

### Data Validation
- Verify all data files load correctly
- Check for missing or invalid data
- Ensure dynamic content displays properly

## Common Tasks

### Adding New Experience
1. Update `data/cv-data.js` with new experience entry
2. Update `data/skills.js` if new technologies are used
3. Test the display in the CV
4. Update both README.md and AGENTS.md if structure changes

### Adding New Skills
1. Update `data/skills.js` with new skills
2. Update `data/cv-data.js` if skills should appear in main CV
3. Test the display in the CV
4. Update both README.md and AGENTS.md if structure changes

### Creating New CV Version
1. Create new folder in `versions/` directory
2. Copy relevant files and customize for the specific role
3. Update documentation in both README.md and AGENTS.md
4. Test the new version

## Project Management

This project is managed using Jira. Key tasks and requirements are tracked in Jira issues. When working on Jira-assigned tasks:

1. Read the issue description carefully
2. Follow the specified requirements
3. Update the relevant files as requested
4. Add comments to the Jira issue when completed
5. Update both README.md and AGENTS.md for any structural changes

## Contact Information

**Developer:** Guillermo Forero
**Email:** guillermoforero.aw@gmail.com
**LinkedIn:** https://www.linkedin.com/in/guillermo-forero-aw/
**Jira:** https://guillermo-forero.atlassian.net/

## Notes for AI Agents

- Always consider the accessibility-first approach when making changes
- Maintain consistency with existing code style and structure
- Test changes thoroughly before considering them complete
- Keep the separation between data and presentation layers
- When in doubt, refer to the README.md for additional context
- Use the sequential-thinking MCP for complex analysis and planning