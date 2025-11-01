import { useState, useEffect } from 'react';
import type {ReactNode} from 'react'; 
import { LanguageContext } from '../context/LanguageContext';
import type { Language } from '../types/index.types';

interface LanguageProviderProps {
  children: ReactNode;
}

// Traducciones
const translations = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
// ... dentro de 'es': {

// Home
'home.greeting': '¡Hola! Soy',
'home.name': 'Orlando Alt Var',
'home.title': 'Desarrollador Backend & Full Stack en Formación',
'home.subtitle': 'Especializado en el diseño y construcción de sistemas escalables con tecnologías como Node.js y Python. Próximo a egresar de la UMSS.',
'home.p1':'Soy estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón, Cochabamba, Bolivia. Apasionado por la tecnología, el desarrollo web y móvil, así como la robótica, IoT e inteligencia artificial.',
'home.p2':'Me encanta transformar ideas en soluciones funcionales a través del código, con especial interés en el desarrollo backend. Disfruto planificar cada proyecto con cuidado, asegurando que cada etapa tenga un mapa claro antes de comenzar.',
'home.p3':'Aunque actualmente estoy profundizando en Django, FastAPI, Laravel, Express y NestJS, también cuento con experiencia en frontend con React y Angular, y desarrollo móvil con Ionic y Flutter. Constantemente busco aprender y aplicar nuevas tecnologías.',
// 'home.cta': 'Ver proyectos', // Mantenemos el comentario
// 'home.contactBtn': 'Contactar', // Mantenemos el comentario

// About
'about.title': 'Sobre Mí',
'about.subtitle': 'Ingeniería, Tecnología y la Estructura detrás del Código',

// Párrafo 1: Introducción y Enfoque Profesional
'about.p1': 'Soy Orlando Alt Var, estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón (UMSS), Cochabamba, Bolivia, a punto de finalizar mis estudios. Mi enfoque principal es el desarrollo Backend, donde aplico mi pasión por la planificación y el diseño de la arquitectura de sistemas. Considero que una base sólida y bien planificada es el mapa crucial para el éxito de cualquier proyecto.',

// Párrafo 2: Habilidades y Experiencia Práctica
'about.p2': 'A pesar de no contar con experiencia laboral formal, he cultivado un conjunto de habilidades robustas. Como auxiliar practicante de laboratorios en mi facultad, recibo capacitación constante en desarrollo web y móvil. Mis conocimientos se centran en frameworks de Backend como Django, FastApi, Express (TypeScript/TypeOrm) y NestJs. En el Frontend, he trabajado con React y Angular, además de incursiones en desarrollo móvil con Ionic y Flutter.',

// Párrafo 3: Metodología y Ambiciones
'about.p3': 'Mi metodología de trabajo se basa en entender profundamente el funcionamiento de cada herramienta, asegurando soluciones robustas. Siempre estoy en la búsqueda de nuevo conocimiento, explorando áreas de vanguardia como la Inteligencia Artificial, Robótica e Informática Forense. Estoy listo para aplicar mis habilidades en la práctica y contribuir al desarrollo de soluciones tecnológicas innovadoras.',

// Párrafo 4:
'about.p4': 'Soy Orlando Alt Var, estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón. Actualmente me encuentro en los últimos semestres, con formación sólida en desarrollo backend, frontend y móvil, además de un interés creciente en inteligencia artificial y robótica.',
    
// Párrafo 5:
'about.p5': 'Mi trayectoria incluye experiencia en tecnologías como Django, FastAPI, Laravel, Express, NestJS, React, Angular, Ionic y Flutter. También he adquirido conocimientos en informática forense, UI/UX, automatización, pruebas y despliegue de aplicaciones en plataformas como PythonAnywhere, Railway, Vercel y Render.',

// Párrafo 6:
'about.p6': 'Además de estudiar, colaboro como auxiliar en los laboratorios de informática y sistemas, capacitándome y guiando en desarrollo web y móvil. Creo firmemente que el aprendizaje constante y la práctica son la clave para dominar cualquier tecnología.',

// Párrafo 7:
'about.p7': 'Me considero una persona curiosa y proactiva, siempre interesada en entender cómo funcionan las cosas y aplicar ese conocimiento en proyectos reales. Mi lema personal: "Si funciona, no lo toques".....El verdadero progreso nace del compromiso constante con la mejora.....Creo en el desarrollo constante, tanto del software como de uno mismo.', 

// Información sobre la carrera y roles
'about.educationTitle': 'Formación Académica y Práctica',
'about.educationUMSS': 'Ingeniería de Sistemas (Próximo a Egresar)',
'about.educationRole': 'Auxiliar Practicante de Laboratorios de Informática y Sistemas',
'about.educationDescription': 'Universidad Mayor de San Simón (UMSS), Cochabamba, Bolivia. Adquiriendo experiencia práctica y mentoría en el desarrollo web y móvil.',
'about.otherStudies': 'Otros Estudios Técnicos',
'about.otherDescription': 'Instituto Técnico Álvarez Plata (Gestión 2024). Breve paso por Sistemas Informáticos, complementando mis conocimientos universitarios.',


// ... otros textos
// }
// About
    'about.title1': 'Sobre mí',
    'about.intro': 'Estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón, próximo a egresar. Mi enfoque principal es el desarrollo backend, aunque manejo el stack completo. Creo firmemente que una buena planificación y diseño son fundamentales para el éxito de cualquier proyecto.',
        
    // Education
    'about.education.title': 'Formación Académica',
    'about.education.university': 'Universidad Mayor de San Simón (UMSS)',
    'about.education.degree': 'Ingeniería de Sistemas',
    'about.education.location': 'Cochabamba, Bolivia',
    'about.education.status': 'Cursando últimos semestres - Próximo a egresar',
    
    // Work
    'about.work.title': 'Experiencia Actual',
    'about.work.position': 'Auxiliar Practicante',
    'about.work.description': 'Laboratorios de Informática y Sistemas - UMSS',
    'about.work.training': 'Capacitación continua en Desarrollo Web y Desarrollo Móvil',
    
    // Interests
    'about.interests.title': 'Áreas de Interés',
    'about.interests.description': 'Apasionado por redes, desarrollo móvil, robótica, IoT e Inteligencia Artificial. Mi curiosidad tecnológica comenzó con los videojuegos, y desde entonces busco entender cómo funcionan las cosas a nivel fundamental.',
    
    // Tech Stack
    'about.techstack.title': 'Stack Tecnológico',
    'about.techstack.backend': 'Backend (Especialización)',
    'about.techstack.backendList': 'Django, FastAPI, Laravel (Blade, Composer), Express (TypeScript, TypeORM), NestJS',
    'about.techstack.frontend': 'Frontend',
    'about.techstack.frontendList': 'React, Angular (ambos con TypeScript)',
    'about.techstack.mobile': 'Desarrollo Móvil',
    'about.techstack.mobileList': 'Ionic (Angular), Flutter',
    'about.techstack.tools': 'Herramientas y DevOps',
    'about.techstack.toolsList': 'Git, GitHub, Docker, Postman, Bash, PowerShell',
    'about.techstack.deployment': 'Deployment',
    'about.techstack.deploymentList': 'PythonAnywhere, Railway, Vercel, Render (incluyendo contenedores Docker)',
    
    // Philosophy
    'about.philosophy.title': 'Filosofía de Trabajo',
    'about.philosophy.planning': 'Considero que la planificación y el diseño son las fases más importantes de cualquier proyecto. No se puede navegar sin un mapa claro del destino.',
    'about.philosophy.learning': 'El aprendizaje continuo es esencial. Aunque utilizo herramientas modernas como IA para optimizar el desarrollo, siempre busco comprender a fondo el funcionamiento de cada tecnología que implemento.',
    'about.philosophy.understanding': 'Me motiva entender cómo funcionan las cosas desde su núcleo, no solo utilizarlas superficialmente. Esta curiosidad me impulsa a explorar constantemente nuevas tecnologías y metodologías.',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos recientes',
    'projects.featured': 'Proyectos Destacados',
    'projects.all': 'Todos los Proyectos',
    'projects.viewCode': 'Ver código',
    'projects.viewDemo': 'Ver demo',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.error': 'Error al enviar el mensaje. Intenta nuevamente.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados :v',
    'footer.developed': 'Desarrollado',
    'footer.by': 'por',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
// ... dentro de 'en': {

// Home
'home.greeting': 'Hi! I\'m',
'home.name': 'Orlando Alt Var',
'home.title': 'Backend & Full Stack Developer in Training',
'home.subtitle': 'Specializing in the design and construction of scalable systems using technologies like Node.js and Python. Nearing graduation from UMSS.',
'home.p1': 'I\'m a Systems Engineering student at Universidad Mayor de San Simón in Cochabamba, Bolivia. I\'m passionate about technology, web and mobile development, as well as robotics, IoT, and artificial intelligence.',
'home.p2': 'I love transforming ideas into functional solutions through code, with a particular interest in backend development. I enjoy planning each project carefully, ensuring that each stage has a clear roadmap before starting.',
'home.p3': 'While I\'m currently delving deeper into Django, FastAPI, Laravel, Express, and NestJS, I also have experience in frontend development with React and Angular, and mobile development with Ionic and Flutter. I\'m constantly looking to learn and apply new technologies.',
// About
'about.title': 'About Me',
'about.subtitle': 'Engineering, Technology, and the Structure Behind the Code',

// Párrafo 1: Introducción y Enfoque Profesional
'about.p1': 'I am Orlando Alt Var, a Systems Engineering student at the Universidad Mayor de San Simón (UMSS) in Cochabamba, Bolivia, currently completing my final semesters. My main focus is Backend development, where I apply my passion for planning and designing system architecture. I believe a solid, well-planned foundation is the crucial map for any project\'s success.',

// Párrafo 2: Habilidades y Experiencia Práctica
'about.p2': 'Despite lacking formal professional experience, I have cultivated a robust skill set. As a laboratory assistant practitioner at my faculty, I receive constant training in web and mobile development. My knowledge is centered on Backend frameworks like Django, FastApi, Express (TypeScript/TypeOrm), and NestJs. On the Frontend, I have worked with React and Angular, in addition to mobile development forays with Ionic and Flutter.',

// Párrafo 3: Metodología y Ambitions
'about.p3': 'My work methodology is based on deeply understanding the functionality of every tool to ensure robust solutions. I am constantly seeking new knowledge, exploring cutting-edge areas such as Artificial Intelligence, Robotics, and Forensic Computing. I am ready to apply my skills in practice and contribute to the development of innovative technological solutions.',

// Paragraph 4:
'about.p4': 'I am Orlando Alt Var, a Systems Engineering student at Universidad Mayor de San Simón. I am currently in my final semesters, with a solid background in backend, frontend, and mobile development, as well as a growing interest in artificial intelligence and robotics.',

// Paragraph 5:
'about.p5': 'My background includes experience with technologies such as Django, FastAPI, Laravel, Express, NestJS, React, Angular, Ionic, and Flutter. I have also acquired knowledge in computer forensics, UI/UX, automation, testing, and application deployment on platforms such as PythonAnywhere, Railway, Vercel, and Render.',

// Paragraph 6:
'about.p6': 'In addition to studying, I work as an assistant in the computer and systems labs, training and guiding others in web and mobile development. I firmly believe that continuous learning and practice are the key to mastering any technology.',

// Paragraph 7:
'about.p7': 'I consider myself a curious and proactive person, always interested in understanding how things work and applying that knowledge to real-world projects. My personal motto: "If it aint broke, dont fix it." .....True progress comes from a constant commitment to improvement... I believe in constant development, both of the software and of oneself. ',

// Información sobre la carrera y roles
'about.educationTitle': 'Academic Background and Practice',
'about.educationUMSS': 'Systems Engineering (Nearing Graduation)',
'about.educationRole': 'Information and Systems Laboratory Assistant Practitioner',
'about.educationDescription': 'Universidad Mayor de San Simón (UMSS), Cochabamba, Bolivia. Gaining practical experience and mentorship in web and mobile development.',
'about.otherStudies': 'Other Technical Studies',
'about.otherDescription': 'Instituto Técnico Álvarez Plata (2024). Brief time in Computer Systems, complementing my university knowledge.',

// ... otros textos
// }
    // About
    'about.title1': 'About Me',
    'about.intro': 'Systems Engineering student at Universidad Mayor de San Simón, close to graduation. My main focus is backend development, though I handle the full stack. I firmly believe that good planning and design are fundamental to the success of any project.',

    // Education
    'about.education.title': 'Academic Background',
    'about.education.university': 'Universidad Mayor de San Simón (UMSS)',
    'about.education.degree': 'Systems Engineering',
    'about.education.location': 'Cochabamba, Bolivia',
    'about.education.status': 'Final semesters - Soon to graduate',
    
    // Work
    'about.work.title': 'Current Experience',
    'about.work.position': 'Teaching Assistant',
    'about.work.description': 'Computer Science and Systems Laboratories - UMSS',
    'about.work.training': 'Continuous training in Web Development and Mobile Development',
    
    // Interests
    'about.interests.title': 'Areas of Interest',
    'about.interests.description': 'Passionate about networks, mobile development, robotics, IoT, and Artificial Intelligence. My technological curiosity started with video games, and since then I seek to understand how things work at a fundamental level.',
    
    // Tech Stack
    'about.techstack.title': 'Tech Stack',
    'about.techstack.backend': 'Backend (Specialization)',
    'about.techstack.backendList': 'Django, FastAPI, Laravel (Blade, Composer), Express (TypeScript, TypeORM), NestJS',
    'about.techstack.frontend': 'Frontend',
    'about.techstack.frontendList': 'React, Angular (both with TypeScript)',
    'about.techstack.mobile': 'Mobile Development',
    'about.techstack.mobileList': 'Ionic (Angular), Flutter',
    'about.techstack.tools': 'Tools and DevOps',
    'about.techstack.toolsList': 'Git, GitHub, Docker, Postman, Bash, PowerShell',
    'about.techstack.deployment': 'Deployment',
    'about.techstack.deploymentList': 'PythonAnywhere, Railway, Vercel, Render (including Docker containers)',
    
    // Philosophy
    'about.philosophy.title': 'Work Philosophy',
    'about.philosophy.planning': 'I believe that planning and design are the most important phases of any project. You cannot navigate without a clear map of your destination.',
    'about.philosophy.learning': 'Continuous learning is essential. While I use modern tools like AI to optimize development, I always seek to deeply understand the operation of each technology I implement.',
    'about.philosophy.understanding': 'I am motivated to understand how things work from their core, not just use them superficially. This curiosity drives me to constantly explore new technologies and methodologies.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.featured': 'Featured Projects',
    'projects.all': 'All Projects',
    'projects.viewCode': 'View code',
    'projects.viewDemo': 'View demo',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved :v',
    'footer.developed': 'Developed ',
    'footer.by': 'by',
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <div>
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};