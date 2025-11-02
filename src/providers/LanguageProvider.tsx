import { useState, useEffect } from 'react';
import type { ReactNode } from 'react'; 
import { LanguageContext } from '../context/LanguageContext';
import type { Language } from '../types/index.types';

interface LanguageProviderProps {
  children: ReactNode;
}

// Traducciones optimizadas
const translations = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Home - Versión unificada y expandida
    'home.greeting': '¡Hola! Soy',
    'home.name': 'Orlando AV',
    'home.title': 'Desarrollador Backend & Full Stack en Formación',
    'home.subtitle': 'Dedicado en el diseño y construcción de sistemas escalables con tecnologías como Node.js y Python. ',
    'home.cv_cta': 'Descargar CV',
    
    // Párrafos unificados del home
    'home.p1': 'Estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón, Cochabamba, Bolivia, actualmente en mis últimos semestres. Apasionado por la tecnología, con especial interés en desarrollo backend, aunque también cuento con experiencia en frontend y móvil.',
    'home.p2': 'Mi enfoque detallista en la planificación asegura que cada proyecto cuente con una arquitectura sólida y bien definida antes de su implementación.',
    'home.p3': 'Mi stack tecnológico incluye frameworks backend como Django, FastAPI, Laravel, Express y NestJS, complementado con experiencia en frontend (React, Angular) y desarrollo móvil (Ionic, Flutter). Constantemente busco aprender y aplicar nuevas tecnologías para crear soluciones innovadoras.',

    // About - Versión consolidada
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Ingeniería, Tecnología y la Estructura detrás del Código',
    
    // Párrafos principales reorganizados
    'about.p1': 'Soy Orlando AV, desarrollador backend en formación, de Cochabamba, Bolivia.',
    'about.p2': 'Mi enfoque principal es el desarrollo Backend, donde aplico mi pasión por la planificación y el diseño de arquitecturas de sistemas. Aunque aún no cuento con experiencia laboral formal, he cultivado habilidades robustas a través de proyectos académicos y personales, además de mi rol como auxiliar practicante en los laboratorios de mi facultad.',
    'about.p3': 'Trabajo con frameworks backend como Django, FastAPI, Express (TypeScript/TypeORM) y NestJS, complementando mi experiencia con frontend (React, Angular) y desarrollo móvil (Ionic, Flutter). Además, poseo conocimientos en UI/UX, automatización, pruebas, contenerización con Docker y despliegue de aplicaciones en plataformas como PythonAnywhere, Railway, Vercel y Render.',
    'about.p4': 'Mi metodología se basa en comprender a fondo cada herramienta antes de implementarla, garantizando soluciones técnicas estables y mantenibles. Considero que una buena planificación es el mapa esencial para el éxito de cualquier proyecto: no se puede construir sin una estructura clara. Aunque utilizo herramientas modernas como IA para optimizar el desarrollo, siempre busco mantener un equilibrio entre eficiencia y comprensión técnica.',
    'about.p5': 'Me encuentro en constante búsqueda de aprendizaje, explorando áreas como Inteligencia Artificial, Robótica e Informática Forense, motivado por la curiosidad y la mejora continua.',

    // Quote personal
    'about.quote': 'Creo firmemente en el desarrollo constante, tanto del software como personal. Como diría Tío Ben: "Un gran poder conlleva una gran responsabilidad."',
    'about.looking': 'Busco participar en proyectos desafiantes que me permitan aplicar y expandir mis conocimientos.',

    // Educación y experiencia consolidada
    'about.education.title': 'Formación Académica y Práctica',
    'about.education.umss': 'Ingeniería de Sistemas - Universidad Mayor de San Simón (UMSS)',
    'about.education.location': 'Cochabamba, Bolivia',
    'about.education.status': 'Cursando últimos semestres - Próximo a egresar',
    'about.education.role': 'Auxiliar Practicante de Laboratorios de Informática y Sistemas',
    'about.education.description': 'Capacitación continua y mentoría en desarrollo web y móvil, adquiriendo experiencia práctica en entornos académicos.',
    'about.education.other.title': 'Exploración Académica',
    'about.education.other.description': 'Instituto Técnico Álvarez Plata (Gestión 2024) – Técnico Superior en Sistemas Informáticos. Inicié la carrera por interés en conocer su enfoque práctico, pero decidí no continuarla para priorizar mi formación en Ingeniería de Sistemas y por motivos de tiempo.',

    // Stack tecnológico
    'about.techstack.title': 'Stack Tecnológico',
    'about.techstack.backend': 'Backend (Favorito)',
    'about.techstack.backendList': 'Django, FastAPI, Laravel (Blade, Composer), Express (TypeScript, TypeORM), NestJS',
    'about.techstack.frontend': 'Frontend',
    'about.techstack.frontendList': 'React, Angular (ambos con TypeScript)',
    'about.techstack.mobile': 'Desarrollo Móvil',
    'about.techstack.mobileList': 'Ionic (Angular), Flutter',
    'about.techstack.tools': 'Herramientas y DevOps',
    'about.techstack.toolsList': 'Git, GitHub, Docker, Postman, Bash, PowerShell',
    'about.techstack.deployment': 'Deployment',
    'about.techstack.deploymentList': 'PythonAnywhere, Railway, Vercel, Render (incluyendo contenedores Docker), Servidores UMSS(net2ftp).',

    // Intereses
    'about.interests.title': 'Áreas de Interés',
    'about.interests.description': 'Apasionado por redes, desarrollo móvil, robótica, IoT e Inteligencia Artificial. Busco constantemente aprender y aplicar nuevas tecnologías, explorando áreas de vanguardia para crear soluciones innovadoras.',

    // Filosofía de trabajo
    'about.philosophy.title': 'Filosofía de Trabajo y Aprendizaje',
    'about.philosophy.planning': 'La planificación es fundamental: cada proyecto debe tener un diseño claro antes de comenzar, ya que no se puede navegar sin un mapa claro del destino. El aprendizaje continuo también es esencial; constantemente busco expandir mis conocimientos en nuevas áreas, desde Inteligencia Artificial y Robótica hasta informática forense, UI/UX, automatización y pruebas. Aunque el conocimiento teórico es importante, considero que la práctica es clave para dominarlo.',
    'about.philosophy.learning': 'Me motiva entender cómo funcionan las cosas desde su núcleo, no solo utilizarlas superficialmente. Esta curiosidad me impulsa a explorar constantemente nuevas tecnologías y metodologías, siempre buscando la comprensión profunda sobre el uso superficial.',
    'about.philosophy.understanding': 'Me considero una persona curiosa y proactiva, interesada en aplicar el conocimiento en proyectos reales y en mantener un desarrollo constante, tanto del software como personal.',

    // Certificados
    'about.certificates.title': 'Certificados',
    'about.certificates.description': 'A continuación se presentan algunos de los certificados que he obtenido a lo largo de mi formación profesional.',

    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Algunos de mis proyectos recientes',
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
    
    // Home - Consolidated version
    'home.greeting': 'Hi! I\'m',
    'home.name': 'Orlando AV',
    'home.title': 'Backend & Full Stack Developer in Training',
    'home.subtitle': 'Dedicated to the design and construction of scalable systems with technologies such as Node.js and Python.',
    'home.cv_cta': 'Download CV',
    
    // Unified home paragraphs
    'home.p1': 'Systems Engineering student at Universidad Mayor de San Simón, Cochabamba, Bolivia, currently in my final semesters. Passionate about technology, with a special interest in backend development, although I also have experience in frontend and mobile.',
    'home.p2': 'My meticulous approach to planning ensures that each project has a solid and well-defined architecture before implementation.',
    'home.p3': 'My tech stack includes backend frameworks like Django, FastAPI, Laravel, Express, and NestJS, complemented by frontend experience (React, Angular) and mobile development (Ionic, Flutter). I constantly seek to learn and apply new technologies to create innovative solutions.',

    // About - Consolidated version
    'about.title': 'About Me',
    'about.subtitle': 'Engineering, Technology, and the Structure Behind the Code',
    
    // Reorganized main paragraphs
    'about.p1': 'I am Orlando AV, a backend developer in training from Cochabamba, Bolivia.',
    'about.p2': 'My main focus is Backend development, where I apply my passion for planning and designing system architectures. Although I don\'t have formal work experience yet, I have cultivated robust skills through academic and personal projects, as well as my role as a teaching assistant in my faculty\'s laboratories.',
    'about.p3': 'I work with backend frameworks like Django, FastAPI, Express (TypeScript/TypeORM), and NestJS, complementing my experience with frontend (React, Angular) and mobile development (Ionic, Flutter). Additionally, I have knowledge in UI/UX, automation, testing, containerization with Docker, and application deployment on platforms like PythonAnywhere, Railway, Vercel, and Render.',
    'about.p4': 'My methodology is based on thoroughly understanding each tool before implementing it, ensuring stable and maintainable technical solutions. I believe that good planning is the essential map for the success of any project: you cannot build without a clear structure. Although I use modern tools like AI to optimize development, I always seek to maintain a balance between efficiency and technical understanding.',
    'about.p5': 'I am constantly seeking to learn, exploring areas like Artificial Intelligence, Robotics, and Forensic Computing, driven by curiosity and continuous improvement.',

    // Personal quote
    'about.quote': 'I firmly believe in constant development, both in software and personally. As Uncle Ben would say: \'With great power comes great responsibility.\'',
    'about.looking': 'I seek to participate in challenging projects that allow me to apply and expand my knowledge.',

    // Consolidated education and experience
    'about.education.title': 'Academic Background and Practice',
    'about.education.umss': 'Systems Engineering - Universidad Mayor de San Simón (UMSS)',
    'about.education.location': 'Cochabamba, Bolivia',
    'about.education.status': 'Final semesters - Soon to graduate',
    'about.education.role': 'Information and Systems Laboratory Teaching Assistant',
    'about.education.description': 'Continuous training and mentorship in web and mobile development, gaining practical experience in academic environments.',
    'about.education.other.title': 'Academic Exploration',
    'about.education.other.description': 'Instituto Técnico Álvarez Plata (2024 Academic Year) – Higher Technician in Computer Systems. I started the program out of interest in its practical approach, but decided not to continue to prioritize my Systems Engineering degree and due to time constraints.',

    // Tech stack
    'about.techstack.title': 'Tech Stack',
    'about.techstack.backend': 'Backend (Favorite)',
    'about.techstack.backendList': 'Django, FastAPI, Laravel (Blade, Composer), Express (TypeScript, TypeORM), NestJS',
    'about.techstack.frontend': 'Frontend',
    'about.techstack.frontendList': 'React, Angular (both with TypeScript)',
    'about.techstack.mobile': 'Mobile Development',
    'about.techstack.mobileList': 'Ionic (Angular), Flutter',
    'about.techstack.tools': 'Tools and DevOps',
    'about.techstack.toolsList': 'Git, GitHub, Docker, Postman, Bash, PowerShell',
    'about.techstack.deployment': 'Deployment',
    'about.techstack.deploymentList': 'PythonAnywhere, Railway, Vercel, Render (including Docker containers)',

    // Interests
    'about.interests.title': 'Areas of Interest',
    'about.interests.description': 'Passionate about networking, mobile development, robotics, IoT, and Artificial Intelligence. I am constantly seeking to learn and apply new technologies, exploring cutting-edge areas to create innovative solutions.',
    
    // Work philosophy
    'about.philosophy.title': 'Work and Learning Philosophy',
    'about.philosophy.planning': 'Planning is fundamental: every project must have a clear design before starting, as you cannot navigate without a clear map of the destination. Continuous learning is also essential; I constantly seek to expand my knowledge in new areas, from Artificial Intelligence and Robotics to forensic computing, UI/UX, automation, and testing. Although theoretical knowledge is important, I believe practice is key to mastering it.',
    'about.philosophy.learning': 'I am motivated to understand how things work from their core, not just use them superficially. This curiosity drives me to constantly explore new technologies and methodologies, always seeking deep understanding over superficial use.',
    'about.philosophy.understanding': 'I consider myself a curious and proactive person, interested in applying knowledge in real projects and maintaining constant development, both in software and personally.',

    // Certificates
    'about.certificates.title': 'Certificates',
    'about.certificates.description': 'Below are some of the certificates I have obtained throughout my professional training.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of my recent projects',
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
    'footer.developed': 'Developed',
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
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};