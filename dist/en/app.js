// Main application script for Guillermo Forero CV
// Note: For browser compatibility, we'll load data directly
// This would typically use a bundler, but for simplicity we'll inline the data

const cvData = {
  personal: {
    name: "Guillermo Forero",
    location: "Colombia",
    email: "guillermoforero.aw@gmail.com",
    linkedin: "https://www.linkedin.com/in/guillermo-forero-aw/"
  },

  title: {
    en: "Technical Project Management | Frontend Leadership | Digital Delivery",
    es: "Gestión de Proyectos Técnicos | Liderazgo Frontend | Entrega Digital"
  },

  summary: {
    en: `Frontend Lead and technology professional with experience leading
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
    es: `Líder Frontend y profesional de tecnología con experiencia liderando
equipos de desarrollo multidisciplinarios, coordinando proyectos de TI y
entregando productos digitales alineados con objetivos de negocio.

Con experiencia en liderazgo técnico, desarrollo frontend, UX/UI,
accesibilidad web, metodologías Agile, gestión de stakeholders,
priorización y entrega.

Puente entre equipos técnicos y de negocio para traducir requerimientos en
soluciones digitales escalables, eliminar bloqueos de entrega y mejorar
la ejecución del equipo.

Actualmente enfocado en crecer hacia roles de Technical Project Manager,
IT Project Manager y Delivery Manager, combinando experiencia técnica
con liderazgo de proyectos y ejecución estratégica.`
  },

  experience: [
    {
      company: "Quick",
      position: {
        en: "Tech Lead FrontEnd",
        es: "Tech Lead FrontEnd"
      },
      start: "2022-10",
      end: "2026-09",
      context: {
        en: "Led a frontend team of 3 people (2 frontend developers) managing 5 simultaneous web application projects in an Agile environment",
        es: "Lideró un equipo frontend de 3 personas (2 desarrolladores frontend) gestionando 5 proyectos de aplicaciones web simultáneos en un entorno Agile"
      },
      responsibilities: {
        en: [
          "Code review and quality assurance",
          "Mentoring and team development",
          "Hiring and developer evaluation",
          "Direct client/stakeholder communication",
          "Requirements definition and planning",
          "Sprint planning and daily standups",
          "Retrospectives and continuous improvement",
          "Dependency management and coordination",
          "Progress reporting and delivery tracking",
          "Prioritization and estimation of tasks"
        ],
        es: [
          "Revisión de código y aseguramiento de calidad",
          "Mentoría y desarrollo del equipo",
          "Contratación y evaluación de desarrolladores",
          "Comunicación directa con clientes/stakeholders",
          "Definición de requerimientos y planificación",
          "Planificación de sprints y daily standups",
          "Retrospectivas y mejora continua",
          "Gestión de dependencias y coordinación",
          "Reporte de progreso y seguimiento de entrega",
          "Priorización y estimación de tareas"
        ]
      },
      achievements: {
        en: [
          "Led a multidisciplinary frontend team of 3 developers across 5 simultaneous web application projects using Agile practices and modern frontend technologies to improve delivery coordination and remove technical blockers",
          "Implemented full Agile methodology with Scrum practices including sprint planning, daily standups, and retrospectives across multiple concurrent projects to enhance team collaboration and delivery predictability",
          "Coordinated priorities and delivery through effective planning, estimation, and prioritization processes using project management tools to reduce delivery bottlenecks and improve sprint predictability",
          "Managed dependencies and tracked deliverables across multiple concurrent web applications using systematic follow-up and reporting mechanisms to ensure timely project completion",
          "Facilitated direct stakeholder communication and requirements definition using structured planning processes to ensure alignment between technical solutions and business objectives"
        ],
        es: [
          "Lideró un equipo frontend multidisciplinario de 3 desarrolladores en 5 proyectos de aplicaciones web simultáneos usando prácticas Agile y tecnologías frontend modernas para mejorar la coordinación de entrega y eliminar bloqueos técnicos",
          "Implementó metodología Agile completa con prácticas Scrum incluyendo planificación de sprints, daily standups y retrospectivas en múltiples proyectos concurrentes para mejorar la colaboración del equipo y la previsibilidad de entrega",
          "Coordinó prioridades y entrega a través de procesos efectivos de planificación, estimación y priorización usando herramientas de gestión de proyectos para reducir cuellos de botella de entrega y mejorar la previsibilidad de sprints",
          "Gestionó dependencias y rastreó entregables en múltiples aplicaciones web concurrentes usando mecanismos sistemáticos de seguimiento y reporte para asegurar la finalización oportuna de proyectos",
          "Facilitó comunicación directa con stakeholders y definición de requerimientos usando procesos de planificación estructurados para asegurar alineación entre soluciones técnicas y objetivos de negocio"
        ]
      },
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
      position: {
        en: "Game Developer",
        es: "Desarrollador de videojuegos"
      },
      start: "2021-09",
      end: "2022-10",
      context: {
        en: "Game development for educational web games targeting diverse audiences",
        es: "Desarrollo de videojuegos para juegos web educativos dirigidos a audiencias diversas"
      },
      responsibilities: {
        en: [
          "Daily development tasks and game mechanics implementation",
          "Team collaboration and coordination",
          "Frontend development for educational content"
        ],
        es: [
          "Tareas diarias de desarrollo e implementación de mecánicas de juego",
          "Colaboración y coordinación del equipo",
          "Desarrollo frontend para contenido educativo"
        ]
      },
      achievements: {
        en: [
          "Led team development of educational web games using HTML, JavaScript, CSS, and modern frontend frameworks to create engaging content accessible to diverse users",
          "Built web-based games for general audiences using multiple frontend technologies including TypeScript, SVG, and Git to ensure broad accessibility and cross-platform compatibility",
          "Implemented comprehensive frontend solutions using JQuery, Sass, and responsive design techniques to deliver optimized gaming experiences across different devices"
        ],
        es: [
          "Lideró el desarrollo del equipo de juegos web educativos usando HTML, JavaScript, CSS y frameworks frontend modernos para crear contenido atractivo accesible a usuarios diversos",
          "Construyó juegos web para audiencias generales usando múltiples tecnologías frontend incluyendo TypeScript, SVG y Git para asegurar amplia accesibilidad y compatibilidad multiplataforma",
          "Implementó soluciones frontend integrales usando JQuery, Sass y técnicas de diseño responsivo para entregar experiencias de juego optimizadas en diferentes dispositivos"
        ]
      },
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
      position: {
        en: "Web Developer",
        es: "Desarrollador web"
      },
      start: "2020-04",
      end: "2022-10",
      context: {
        en: "Web development with focus on accessibility and user-centered design for inclusive digital solutions",
        es: "Desarrollo web con enfoque en accesibilidad y diseño centrado en el usuario para soluciones digitales inclusivas"
      },
      responsibilities: {
        en: [
          "Web development and accessibility implementation",
          "Interdisciplinary collaboration between design and development",
          "User-centered design methodology application"
        ],
        es: [
          "Desarrollo web e implementación de accesibilidad",
          "Colaboración interdisciplinaria entre diseño y desarrollo",
          "Aplicación de metodología de diseño centrado en el usuario"
        ]
      },
      achievements: {
        en: [
          "Transformed abstract ideas into functional web projects through interdisciplinary collaboration using web development technologies to create accessible digital solutions",
          "Applied user-centered design (DCU) methodologies using UX/UI principles and universal design concepts to ensure optimal user experience for diverse audiences",
          "Implemented WCAG 2.1 accessibility standards using semantic HTML, screen reader compatibility, and voice reader technologies to ensure digital inclusion for users with disabilities"
        ],
        es: [
          "Transformó ideas abstractas en proyectos web funcionales a través de colaboración interdisciplinaria usando tecnologías de desarrollo web para crear soluciones digitales accesibles",
          "Aplicó metodologías de diseño centrado en el usuario (DCU) usando principios UX/UI y conceptos de diseño universal para asegurar experiencia de usuario óptima para audiencias diversas",
          "Implementó estándares de accesibilidad WCAG 2.1 usando HTML semántico, compatibilidad con lectores de pantalla y tecnologías de lectura de voz para asegurar inclusión digital para usuarios con discapacidades"
        ]
      },
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
      position: {
        en: "Front-end Developer",
        es: "Desarrollador de front-end"
      },
      start: "2019-08",
      end: "2021-04",
      context: {
        en: "Frontend development with backend integration and technical requirements analysis",
        es: "Desarrollo frontend con integración backend y análisis de requerimientos técnicos"
      },
      responsibilities: {
        en: [
          "Frontend development and backend integration",
          "Technical requirements analysis",
          "Interdisciplinary collaboration between code and design"
        ],
        es: [
          "Desarrollo frontend e integración backend",
          "Análisis de requerimientos técnicos",
          "Colaboración interdisciplinaria entre código y diseño"
        ]
      },
      achievements: {
        en: [
          "Developed frontend solutions through interdisciplinary collaboration between code and design using HTML5, CSS, and JavaScript to create cohesive user interfaces",
          "Integrated frontend and backend technologies using PHP, CodeIgniter, and API development to ensure seamless data flow and application functionality",
          "Analyzed and implemented technical requirements using Sass, JQuery, and modern frontend frameworks to deliver optimized web solutions aligned with business needs"
        ],
        es: [
          "Desarrolló soluciones frontend a través de colaboración interdisciplinaria entre código y diseño usando HTML5, CSS y JavaScript para crear interfaces de usuario cohesivas",
          "Integró tecnologías frontend y backend usando PHP, CodeIgniter y desarrollo de API para asegurar flujo de datos sin interrupciones y funcionalidad de aplicación",
          "Analizó e implementó requerimientos técnicos usando Sass, JQuery y frameworks frontend modernos para entregar soluciones web optimizadas alineadas con necesidades de negocio"
        ]
      },
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
      position: {
        en: "Accessibility Consultant",
        es: "Asesor de accesibilidad"
      },
      start: "2018-08",
      end: "2020-04",
      context: {
        en: "Accessibility consulting and accessible web design for inclusive digital products",
        es: "Consultoría de accesibilidad y diseño web accesible para productos digitales inclusivos"
      },
      responsibilities: {
        en: [
          "Accessibility consulting and strategy",
          "Accessible web design and development",
          "OVA (virtual learning objects) accessible development"
        ],
        es: [
          "Consultoría y estrategia de accesibilidad",
          "Diseño y desarrollo web accesible",
          "Desarrollo de OVA (objetos virtuales de aprendizaje) accesibles"
        ]
      },
      achievements: {
        en: [
          "Implemented accessibility improvements following WCAG principles using semantic HTML and assistive technology compatibility to improve keyboard navigation and overall digital accessibility",
          "Designed and developed accessible websites using web accessibility standards, UX/UI principles, and voice reader technologies to ensure inclusive user experiences",
          "Created accessible virtual learning objects (OVA) using JavaScript, CSS, and mobile-optimized UX/UI design to provide educational content accessible to users with disabilities"
        ],
        es: [
          "Implementó mejoras de accesibilidad siguiendo principios WCAG usando HTML semántico y compatibilidad con tecnologías de asistencia para mejorar navegación por teclado y accesibilidad digital general",
          "Diseñó y desarrolló sitios web accesibles usando estándares de accesibilidad web, principios UX/UI y tecnologías de lectura de voz para asegurar experiencias de usuario inclusivas",
          "Creó objetos virtuales de aprendizaje (OVA) accesibles usando JavaScript, CSS y diseño UX/UI optimizado para móviles para proporcionar contenido educativo accesible a usuarios con discapacidades"
        ]
      },
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
      position: {
        en: "Web Master",
        es: "Web Master"
      },
      start: "2016-08",
      end: "2018-08",
      context: {
        en: "Institutional web development and multimedia design for educational institution",
        es: "Desarrollo web institucional y diseño multimedia para institución educativa"
      },
      responsibilities: {
        en: [
          "Institutional web development",
          "Advertising and multimedia design",
          "User experience creation"
        ],
        es: [
          "Desarrollo web institucional",
          "Diseño publicitario y multimedia",
          "Creación de experiencia de usuario"
        ]
      },
      achievements: {
        en: [
          "Designed and developed institutional web pages using HTML, CSS, and JavaScript to establish professional digital presence for the educational institution",
          "Created advertising pieces and multimedia content using web design and layout techniques to enhance institutional communication and marketing",
          "Developed user experience strategies using web development best practices and MySQL database integration to improve website usability and engagement"
        ],
        es: [
          "Diseñó y desarrolló páginas web institucionales usando HTML, CSS y JavaScript para establecer presencia digital profesional para la institución educativa",
          "Creó piezas publicitarias y contenido multimedia usando técnicas de diseño web y maquetación para mejorar la comunicación institucional y marketing",
          "Desarrolló estrategias de experiencia de usuario usando mejores prácticas de desarrollo web e integración de base de datos MySQL para mejorar usabilidad y compromiso del sitio web"
        ]
      },
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
      position: {
        en: "Webmaster",
        es: "Webmaster"
      },
      start: "2016-01",
      end: "2018-08",
      context: {
        en: "Web maintenance and content management for institutional websites",
        es: "Mantenimiento web y gestión de contenido para sitios web institucionales"
      },
      responsibilities: {
        en: [
          "Web maintenance and updates",
          "Content management",
          "Technical support"
        ],
        es: [
          "Mantenimiento y actualizaciones web",
          "Gestión de contenido",
          "Soporte técnico"
        ]
      },
      achievements: {
        en: [
          "Maintained and updated institutional websites using HTML, CSS, and JavaScript to ensure continuous functionality and content freshness",
          "Provided technical support and troubleshooting using web development technologies to resolve issues and optimize website performance"
        ],
        es: [
          "Mantuvo y actualizó sitios web institucionales usando HTML, CSS y JavaScript para asegurar funcionalidad continua y frescura del contenido",
          "Proporcionó soporte técnico y solución de problemas usando tecnologías de desarrollo web para resolver problemas y optimizar el rendimiento del sitio web"
        ]
      },
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }
  ],

  selectedProjects: [
    {
      project: {
        en: "Educational Web Games Platform",
        es: "Plataforma de Juegos Web Educativos"
      },
      problem: {
        en: "Need for accessible educational games for all audiences",
        es: "Necesidad de juegos educativos accesibles para todas las audiencias"
      },
      solution: {
        en: "Led development of multiple web-based educational games using HTML, JavaScript, CSS, and modern frontend frameworks",
        es: "Lideró el desarrollo de múltiples juegos web educativos usando HTML, JavaScript, CSS y frameworks frontend modernos"
      },
      impact: {
        en: "Created engaging educational content accessible to diverse users",
        es: "Creó contenido educativo atractivo accesible a usuarios diversos"
      }
    },
    {
      project: {
        en: "Accessible Web Applications",
        es: "Aplicaciones Web Accesibles"
      },
      problem: {
        en: "Digital exclusion of users with disabilities",
        es: "Exclusión digital de usuarios con discapacidades"
      },
      solution: {
        en: "Implemented WCAG 2.1 standards and accessibility best practices across multiple web projects",
        es: "Implementó estándares WCAG 2.1 y mejores prácticas de accesibilidad en múltiples proyectos web"
      },
      impact: {
        en: "Improved digital accessibility and compliance with international standards",
        es: "Mejoró la accesibilidad digital y cumplimiento con estándares internacionales"
      }
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
      "Design thinking",
      "Diseño centrado en el usuario",
      "Diseño universal",
      "Maquetación y diseño de prototipos"
    ],
    accessibility: [
      "WCAG",
      "WCAG 2.1",
      "HTML semántico",
      "ARIA",
      "Accessibility Testing",
      "Lector de voz",
      "Accesibilidad web"
    ],
    projectManagement: [
      "Agile",
      "Scrum",
      "Gestión de Stakeholders",
      "Delivery",
      "Gestión de Proyectos Técnicos"
    ]
  },

  education: {
    master: [
      {
        degree: {
          en: "Master in Accessibility Technologies: Web Pages, Apps and Mobile Devices",
          es: "Magíster en Tecnologías de Accesibilidad: Páginas Web, Apps y Dispositivos Móviles"
        },
        institution: "Universidad internacional de la Rioja (UNIR)",
        year: "2019"
      }
    ],
    professional: [
      {
        degree: {
          en: "Digital Media Designer and Producer",
          es: "Diseñador y Productor de Medios Digitales"
        },
        institution: "Fundación Universitaria San Mateo",
        year: "2015"
      }
    ]
  },

  certifications: [
    {
      name: {
        en: "English for IT 2",
        es: "English for IT 2"
      },
      issuer: "Cisco",
      year: "2026"
    },
    {
      name: {
        en: "English for IT 1",
        es: "English for IT 1"
      },
      issuer: "Cisco",
      year: "2026"
    },
    {
      name: {
        en: "Project Management Fundamentals",
        es: "Fundamentos de Gestión de Proyectos"
      },
      issuer: "IBM",
      year: "2026"
    },
    {
      name: {
        en: "How to Bring an Animation Project to the International Market",
        es: "Cómo Llevar un Proyecto de Animación al Mercado Internacional"
      },
      issuer: "Crea digital",
      year: "2026"
    }
  ],

  languages: [
    {
      language: {
        en: "English",
        es: "Inglés"
      },
      level: "B2"
    },
    {
      language: {
        en: "Spanish",
        es: "Español"
      },
      level: "Native"
    }
  ]
};

// Language detection based on URL path
let currentLanguage = 'en'; // Default to English

// Detect language from URL path
const pathSegments = window.location.pathname.split('/').filter(segment => segment.length > 0);
if (pathSegments.length > 0) {
    const potentialLang = pathSegments[0].toLowerCase();
    if (potentialLang === 'es' || potentialLang === 'en') {
        currentLanguage = potentialLang;
    }
}

// Helper function to get language-specific value
function getLocalizedValue(obj, key) {
    if (obj && obj[key]) {
        if (typeof obj[key] === 'object' && obj[key][currentLanguage]) {
            return obj[key][currentLanguage];
        }
        return obj[key];
    }
    return '';
}

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
    loadTitle();
    loadSectionTitles();
    loadSummary();
    loadExperience();
    loadProjects();
    loadSkills();
    loadEducation();
    loadCertifications();
    loadLanguages();
    loadLanguageSelector();
});

function loadSectionTitles() {
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        const text = currentLanguage === 'es' ? element.getAttribute('data-es') : element.getAttribute('data-en');
        element.textContent = text;
    });
}

function loadTitle() {
    const titleElement = document.querySelector('.title');
    if (titleElement && cvData.title) {
        titleElement.textContent = getLocalizedValue(cvData, 'title');
    }
}

function loadSummary() {
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent && cvData.summary) {
        summaryContent.innerHTML = `<p>${getLocalizedValue(cvData, 'summary')}</p>`;
    }
}

function loadExperience() {
    const experienceContent = document.getElementById('experience-content');
    if (experienceContent && cvData.experience) {
        let html = '';
        cvData.experience.forEach(exp => {
            const position = getLocalizedValue(exp, 'position');
            const context = getLocalizedValue(exp, 'context');
            const responsibilities = getLocalizedValue(exp, 'responsibilities');
            const achievements = getLocalizedValue(exp, 'achievements');
            
            html += `
                <div class="experience-item">
                    <h3>${position}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="date">${exp.start} - ${exp.end}</p>
                    ${context ? `
                        <div class="context">
                            <strong>${currentLanguage === 'es' ? 'Contexto:' : 'Context:'}</strong>
                            <p>${context}</p>
                        </div>
                    ` : ''}
                    ${responsibilities && responsibilities.length > 0 ? `
                        <div class="responsibilities">
                            <strong>${currentLanguage === 'es' ? 'Responsabilidades:' : 'Responsibilities:'}</strong>
                            <ul>
                                ${responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${achievements && achievements.length > 0 ? `
                        <div class="achievements">
                            <strong>${currentLanguage === 'es' ? 'Logros:' : 'Achievements:'}</strong>
                            <ul>
                                ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${exp.technologies && exp.technologies.length > 0 ? `
                        <div class="technologies">
                            <strong>${currentLanguage === 'es' ? 'Tecnologías:' : 'Technologies:'}</strong>
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
            const projectName = getLocalizedValue(project, 'project');
            const problem = getLocalizedValue(project, 'problem');
            const solution = getLocalizedValue(project, 'solution');
            const impact = getLocalizedValue(project, 'impact');
            
            html += `
                <div class="project-item">
                    <h3>${projectName}</h3>
                    <p><strong>${currentLanguage === 'es' ? 'Problema:' : 'Problem:'}</strong> ${problem}</p>
                    <p><strong>${currentLanguage === 'es' ? 'Solución:' : 'Solution:'}</strong> ${solution}</p>
                    <p><strong>${currentLanguage === 'es' ? 'Impacto:' : 'Impact:'}</strong> ${impact}</p>
                </div>
            `;
        });
        projectsContent.innerHTML = html;
    }
}

function loadSkills() {
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent && cvData.technicalSkills) {
        let html = '<div class="skills-grid">';
        
        Object.keys(cvData.technicalSkills).forEach(category => {
            html += `
                <div class="skill-category">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        ${cvData.technicalSkills[category].map(skill => `<li>${skill}</li>`).join('')}
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
            html += `<h3>${currentLanguage === 'es' ? 'Maestría' : 'Master\'s Degree'}</h3>`;
            cvData.education.master.forEach(edu => {
                const degree = getLocalizedValue(edu, 'degree');
                html += `
                    <div class="education-item">
                        <h3>${degree}</h3>
                        <p class="institution">${edu.institution}</p>
                        <p class="year">${edu.year}</p>
                    </div>
                `;
            });
        }
        
        if (cvData.education.professional && cvData.education.professional.length > 0) {
            html += `<h3>${currentLanguage === 'es' ? 'Educación Profesional' : 'Professional Education'}</h3>`;
            cvData.education.professional.forEach(edu => {
                const degree = getLocalizedValue(edu, 'degree');
                html += `
                    <div class="education-item">
                        <h3>${degree}</h3>
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
            const name = getLocalizedValue(cert, 'name');
            html += `
                <div class="certification-item">
                    <h3>${name}</h3>
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
            const language = getLocalizedValue(lang, 'language');
            html += `
                <div class="language-item">
                    <strong>${language}:</strong> ${lang.level}
                </div>
            `;
        });
        html += '</div>';
        languagesContent.innerHTML = html;
    }
}

function loadLanguageSelector() {
    const header = document.querySelector('.header');
    if (header) {
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        
        // Determine the correct path based on current location
        let targetPath;
        if (currentLanguage === 'en') {
            // If in root or en/, go to es/
            targetPath = 'es/';
        } else {
            // If in es/, go to en/
            targetPath = '../en/';
        }
        
        langSelector.innerHTML = `
            <a href="${targetPath}" class="lang-link">
                ${currentLanguage === 'en' ? 'Español' : 'English'}
            </a>
        `;
        header.appendChild(langSelector);
    }
}