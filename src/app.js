// Main application script for Guillermo Forero CV
// Note: For browser compatibility, we'll load data directly
// This would typically use a bundler, but for simplicity we'll inline the data

const cvData = {
  personal: {
    name: "Guillermo Forero",
    title: "Technical Project Management | Frontend Lead | Digital delivery | Web Accessibility",
    location: "Colombia",
    email: "guillermoforero.aw@gmail.com",
    linkedin: "https://www.linkedin.com/in/guillermo-forero-aw/"
  },

  summary: `Frontend Lead and technology professional with experience leading
multidisciplinary development teams, coordinating IT projects and
delivering digital products aligned with business objectives.

Experienced in technical leadership, frontend development, UX/UI,
web accessibility, Agile methodologies, stakeholder management,
prioritization and delivery.

Bridge technical and business teams to translate requirements into
scalable digital solutions, remove delivery blockers and improve
team execution.

Currently focused on growing into Technical Project Manager,
IT Project Manager and Delivery Manager roles, combining
technical expertise with project leadership and strategic execution.`,

  experience: [
    {
      company: "Quick",
      position: "Tech Lead FrontEnd",
      start: "2022-10",
      end: "2026-09",
      achievements: [
        "Led a multidisciplinary team of X developers across X projects, coordinating priorities and delivery using Agile practices, reducing delivery bottlenecks by X% and improving sprint predictability by X%."
      ],
      technologies: [
        "React",
        "JavaScript",
        "Docker",
        "Nginx",
        "gitea - gitlab"
      ]
    },
    {
      company: "Colombia Games",
      position: "Desarrollador de videojuegos",
      start: "2021-09",
      end: "2022-10",
      achievements: [
        "Liderazgo de equipo en desarrollo de juegos web educativos",
        "Construcción de juegos para todo público",
        "Implementación de soluciones con múltiples tecnologías frontend"
      ],
      technologies: [
        "HTML",
        "JavaScript",
        "CSS",
        "JQuery",
        "Sass",
        "TypeScript",
        "SVG",
        "Git"
      ]
    },
    {
      company: "Handicap International - Humanité & Inclusion",
      position: "Desarrollador web",
      start: "2020-04",
      end: "2022-10",
      achievements: [
        "Aterrizar ideas y crear proyectos web de forma interdisciplinar",
        "Aplicación de metodologías de diseño centrado en el usuario (DCU)",
        "Implementación de estándares de accesibilidad WCAG 2.1"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WCAG 2.1",
        "UX",
        "UI",
        "Diseño universal",
        "Lector de voz"
      ]
    },
    {
      company: "ipvox",
      position: "Desarrollador de front-end",
      start: "2019-08",
      end: "2021-04",
      achievements: [
        "Desarrollo interdisciplinar entre código y diseño",
        "Integración de tecnologías frontend y backend",
        "Análisis de requisitos técnicos"
      ],
      technologies: [
        "HTML5",
        "CSS",
        "Sass",
        "JQuery",
        "PHP",
        "CodeIgniter",
        "JavaScript",
        "API"
      ]
    },
    {
      company: "Atajoaw S.A.S",
      position: "Asesor de accesibilidad",
      start: "2018-08",
      end: "2020-04",
      achievements: [
        "Creación, diseño y desarrollo de sitios web accesibles",
        "Diseño de aplicaciones y OVA (objetos virtuales de aprendizaje) accesibles",
        "Experiencia de usuario e interfaz de usuario optimizada para móviles"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Accesibilidad web",
        "UX",
        "UI",
        "Lector de voz"
      ]
    },
    {
      company: "Fundación Universitaria San Mateo",
      position: "Web Master",
      start: "2016-08",
      end: "2018-08",
      achievements: [
        "Diseño y desarrollo de páginas web institucionales",
        "Diseño de piezas publicitarias y multimedia",
        "Creación de experiencia de usuario"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Maquetación",
        "MySQL"
      ]
    },
    {
      company: "Fundación Universitaria San Mateo",
      position: "Webmaster",
      start: "2016-01",
      end: "2018-08",
      achievements: [],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }
  ],

  selectedProjects: [
    {
      project: "Educational Web Games Platform",
      problem: "Need for accessible educational games for all audiences",
      solution: "Led development of multiple web-based educational games using HTML, JavaScript, CSS, and modern frontend frameworks",
      impact: "Created engaging educational content accessible to diverse users"
    },
    {
      project: "Accessible Web Applications",
      problem: "Digital exclusion of users with disabilities",
      solution: "Implemented WCAG 2.1 standards and accessibility best practices across multiple web projects",
      impact: "Improved digital accessibility and compliance with international standards"
    }
  ],

  technicalSkills: {
    frontend: [
      "JavaScript",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "React",
      "TypeScript",
      "Sass",
      "JQuery",
      "SVG",
      "Git"
    ],
    webDesign: [
      "UX",
      "UI",
      "Diseño centrado en el usuario (DCU)",
      "Diseño universal",
      "Maquetación"
    ],
    accessibility: [
      "WCAG",
      "WCAG 2.1",
      "Semantic HTML",
      "ARIA",
      "Accessibility Testing",
      "Lector de voz",
      "Accesibilidad web"
    ],
    projectManagement: [
      "Agile",
      "Scrum",
      "Stakeholder Management",
      "Delivery",
      "Technical Project Management"
    ]
  },

  education: {
    master: [
      {
        degree: "Master en Tecnologías Accesibles: Página Web, Aplicaciones y Dispositivos Móviles",
        institution: "[Institution Name]",
        year: "[Year]"
      }
    ],
    professional: [
      {
        degree: "Diseñador y Realizador de Medios Digitales",
        institution: "[Institution Name]",
        year: "[Year]"
      }
    ]
  },

  certifications: [
    {
      name: "English for IT 2",
      issuer: "[Issuer]",
      year: "[Year]"
    },
    {
      name: "English for IT 1",
      issuer: "[Issuer]",
      year: "[Year]"
    },
    {
      name: "Project Management Fundamentals",
      issuer: "[Issuer]",
      year: "[Year]"
    },
    {
      name: "Cómo llevar un proyecto de animación al mercado internacional",
      issuer: "[Issuer]",
      year: "[Year]"
    }
  ],

  languages: [
    {
      language: "English",
      level: "B1"
    },
    {
      language: "Spanish",
      level: "Native"
    }
  ]
};

const skillsData = {
  frontend: [
    "JavaScript",
    "Python",
    "PHP",
    "HTML",
    "CSS",
    "React",
    "TypeScript",
    "Sass",
    "JQuery",
    "SVG",
    "Git"
  ],
  
  webDesign: [
    "UX",
    "UI",
    "Diseño centrado en el usuario (DCU)",
    "Diseño universal",
    "Maquetación"
  ],
  
  accessibility: [
    "WCAG",
    "WCAG 2.1",
    "Semantic HTML",
    "ARIA",
    "Accessibility Testing",
    "Lector de voz",
    "Accesibilidad web"
  ],
  
  projectManagement: [
    "Agile",
    "Scrum",
    "Stakeholder Management",
    "Delivery",
    "Technical Project Management"
  ],
  
  backend: [
    "PHP",
    "CodeIgniter",
    "MySQL",
    "API"
  ],
  
  devOps: [
    "Docker",
    "Nginx",
    "Git",
    "gitea",
    "gitlab"
  ]
};

// Load and display CV data
document.addEventListener('DOMContentLoaded', function() {
    loadSummary();
    loadExperience();
    loadProjects();
    loadSkills();
    loadEducation();
    loadCertifications();
    loadLanguages();
});

function loadSummary() {
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent && cvData.summary) {
        summaryContent.innerHTML = `<p>${cvData.summary}</p>`;
    }
}

function loadExperience() {
    const experienceContent = document.getElementById('experience-content');
    if (experienceContent && cvData.experience) {
        let html = '';
        cvData.experience.forEach(exp => {
            html += `
                <div class="experience-item">
                    <h3>${exp.position}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="date">${exp.start} - ${exp.end}</p>
                    ${exp.achievements && exp.achievements.length > 0 ? `
                        <div class="achievements">
                            <strong>Achievements:</strong>
                            <ul>
                                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${exp.technologies && exp.technologies.length > 0 ? `
                        <div class="technologies">
                            <strong>Technologies:</strong>
                            <ul>
                                ${exp.technologies.map(tech => `<li>${tech}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        experienceContent.innerHTML = html;
    }
}

function loadProjects() {
    const projectsContent = document.getElementById('projects-content');
    if (projectsContent && cvData.selectedProjects) {
        let html = '';
        cvData.selectedProjects.forEach(project => {
            html += `
                <div class="project-item">
                    <h3>${project.project}</h3>
                    <p><strong>Problem:</strong> ${project.problem}</p>
                    <p><strong>Solution:</strong> ${project.solution}</p>
                    <p><strong>Impact:</strong> ${project.impact}</p>
                </div>
            `;
        });
        projectsContent.innerHTML = html;
    }
}

function loadSkills() {
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent && skillsData) {
        let html = '<div class="skills-grid">';
        
        Object.keys(skillsData).forEach(category => {
            html += `
                <div class="skill-category">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        ${skillsData[category].map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        html += '</div>';
        skillsContent.innerHTML = html;
    }
}

function loadEducation() {
    const educationContent = document.getElementById('education-content');
    if (educationContent && cvData.education) {
        let html = '';
        
        if (cvData.education.master && cvData.education.master.length > 0) {
            html += '<h3>Master\'s Degree</h3>';
            cvData.education.master.forEach(edu => {
                html += `
                    <div class="education-item">
                        <h3>${edu.degree}</h3>
                        <p class="institution">${edu.institution}</p>
                        <p class="year">${edu.year}</p>
                    </div>
                `;
            });
        }
        
        if (cvData.education.professional && cvData.education.professional.length > 0) {
            html += '<h3>Professional Education</h3>';
            cvData.education.professional.forEach(edu => {
                html += `
                    <div class="education-item">
                        <h3>${edu.degree}</h3>
                        <p class="institution">${edu.institution}</p>
                        <p class="year">${edu.year}</p>
                    </div>
                `;
            });
        }
        
        educationContent.innerHTML = html;
    }
}

function loadCertifications() {
    const certificationsContent = document.getElementById('certifications-content');
    if (certificationsContent && cvData.certifications) {
        let html = '';
        cvData.certifications.forEach(cert => {
            html += `
                <div class="certification-item">
                    <h3>${cert.name}</h3>
                    <p class="issuer">${cert.issuer}</p>
                    <p class="year">${cert.year}</p>
                </div>
            `;
        });
        certificationsContent.innerHTML = html;
    }
}

function loadLanguages() {
    const languagesContent = document.getElementById('languages-content');
    if (languagesContent && cvData.languages) {
        let html = '<div class="languages-list">';
        cvData.languages.forEach(lang => {
            html += `
                <div class="language-item">
                    <strong>${lang.language}:</strong> ${lang.level}
                </div>
            `;
        });
        html += '</div>';
        languagesContent.innerHTML = html;
    }
}