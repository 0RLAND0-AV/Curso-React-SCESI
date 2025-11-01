// src\providers\LanguageProvider.tsx

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
    'home.name': 'Orlando Alt Var',
    'home.title': 'Desarrollador Backend & Full Stack en Formación',
    'home.subtitle': 'Dedicado en el diseño y construcción de sistemas escalables con tecnologías como Node.js y Python. ',
    // Párrafos unificados del home
    'home.p1': 'Estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón, Cochabamba, Bolivia, actualmente en mis últimos semestres. Apasionado por la tecnología, con especial interés en desarrollo backend, aunque también cuento con experiencia en frontend y móvil.',
    'home.p2': 'Mi enfoque detallista en la planificación asegura que cada proyecto cuente con una arquitectura sólida y bien definida antes de su implementación.',
    'home.p3': 'Mi stack tecnológico incluye frameworks backend como Django, FastAPI, Laravel, Express y NestJS, complementado con experiencia en frontend (React, Angular) y desarrollo móvil (Ionic, Flutter). Constantemente busco aprender y aplicar nuevas tecnologías para crear soluciones innovadoras.',

    // About - Versión consolidada
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Ingeniería, Tecnología y la Estructura detrás del Código',
    
    // Párrafos principales reorganizados
    'about.p1': 'Soy Orlando Alt Var, estudiante de Ingeniería de Sistemas en la Universidad Mayor de San Simón (UMSS), Cochabamba, Bolivia, próximo a finalizar mis estudios. Mi enfoque principal es el desarrollo Backend, donde aplico mi pasión por la planificación y el diseño de arquitecturas de sistemas robustas y escalables.',
    'about.p2': 'Como auxiliar practicante en los laboratorios de mi facultad, recibo capacitación continua en desarrollo web y móvil. He desarrollado competencias sólidas en frameworks backend como Django, FastAPI, Express con TypeScript/TypeORM y NestJS, complementadas con experiencia en frontend (React, Angular) y desarrollo móvil (Ionic, Flutter).',
    'about.p3': 'Mi metodología se basa en comprender profundamente cada herramienta y tecnología que implemento, asegurando soluciones técnicas robustas. Estoy en constante búsqueda de conocimiento, explorando áreas de vanguardia como Inteligencia Artificial, Robótica e Informática Forense, siempre listo para aplicar mis habilidades en proyectos desafiantes.',
    'about.p4': 'Además de mi formación universitaria, he adquirido experiencia práctica en despliegue de aplicaciones utilizando plataformas como PythonAnywhere, Railway, Vercel y Render, junto con conocimientos en UI/UX, automatización, pruebas y contenerización con Docker.',

    // Filosofía personal unificada
    'about.philosophy': 'Creo firmemente en el desarrollo constante, tanto del software como personal. Mi lema es: "Si funciona, no lo toques... pero el verdadero progreso nace del compromiso constante con la mejora". Valoro la planificación cuidadosa como el mapa esencial para el éxito de cualquier proyecto tecnológico.',

    // Educación y experiencia consolidada
    'about.education.title': 'Formación Académica y Experiencia',
    'about.education.umss': 'Ingeniería de Sistemas - Universidad Mayor de San Simón (UMSS)',
    'about.education.status': 'Últimos semestres - Próximo a egresar',
    'about.education.role': 'Auxiliar Practicante de Laboratorios de Informática y Sistemas',
    'about.education.description': 'Capacitación continua y mentoría en desarrollo web y móvil, adquiriendo experiencia práctica en entornos académicos.',
    'about.education.other': 'Instituto Técnico Álvarez Plata (2024) - Formación complementaria en Sistemas Informáticos',

    // Stack tecnológico
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
    'about.techstack.deploymentList': 'PythonAnywhere, Railway, Vercel, Render (incluyendo contenedores Docker), Servidores UMSS(net2ftp).',

    // Intereses
    'about.interests.title': 'Áreas de Interés',
    'about.interests.description': 'Apasionado por redes, desarrollo móvil, robótica, IoT e Inteligencia Artificial. Busco constantemente aprender y aplicar nuevas tecnologías, explorando áreas de vanguardia para crear soluciones innovadoras.',

    // Filosofía de trabajo
    'about.philosophy.title': 'Filosofía de Trabajo',
    'about.philosophy.planning': 'Considero que la planificación y el diseño son las fases más cruciales de cualquier proyecto. No se puede construir sin un plano sólido que guíe cada etapa del desarrollo.',
    'about.philosophy.learning': 'El aprendizaje continuo es fundamental. Utilizo herramientas modernas como IA para optimizar el desarrollo, pero siempre busco comprender a fondo el funcionamiento interno de cada tecnología que implemento.',
    'about.philosophy.understanding': 'Me motiva entender cómo funcionan las cosas desde sus cimientos, no solo utilizarlas superficialmente. Esta curiosidad me impulsa a explorar constantemente nuevas tecnologías y metodologías.',

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
    
    // Home - Consolidated version
    'home.greeting': 'Hi! I\'m',
    'home.name': 'Orlando Alt Var',
    'home.title': 'Backend & Full Stack Developer in Training',
    'home.subtitle': 'Dedicated to the design and construction of scalable systems with technologies such as Node.js and Python.',
    // Unified home paragraphs
    'home.p1': 'Systems Engineering student at Universidad Mayor de San Simón, Cochabamba, Bolivia, currently in my final semesters. Passionate about technology, with a special interest in backend development, although I also have experience in frontend and mobile.',
    'home.p2': 'My meticulous approach to planning ensures that each project has a solid and well-defined architecture before implementation.',
    'home.p3': 'My tech stack includes backend frameworks like Django, FastAPI, Laravel, Express, and NestJS, complemented by frontend experience (React, Angular) and mobile development (Ionic, Flutter). I constantly seek to learn and apply new technologies to create innovative solutions.',

    // About - Consolidated version
    'about.title': 'About Me',
    'about.subtitle': 'Engineering, Technology, and the Structure Behind the Code',
    
    // Reorganized main paragraphs
    'about.p1': 'I am Orlando Alt Var, a Systems Engineering student at Universidad Mayor de San Simón (UMSS) in Cochabamba, Bolivia, currently completing my final semesters. My main focus is Backend development, where I apply my passion for planning and designing robust, scalable system architectures.',
    'about.p2': 'As a teaching assistant in my faculty\'s laboratories, I receive continuous training in web and mobile development. I have developed solid competencies in backend frameworks like Django, FastAPI, Express with TypeScript/TypeORM, and NestJS, complemented by frontend experience (React, Angular) and mobile development (Ionic, Flutter).',
    'about.p3': 'My methodology is based on deeply understanding every tool and technology I implement, ensuring robust technical solutions. I am constantly seeking knowledge, exploring cutting-edge areas like Artificial Intelligence, Robotics, and Forensic Computing, always ready to apply my skills to challenging projects.',
    'about.p4': 'Beyond my university education, I have gained practical experience in application deployment using platforms like PythonAnywhere, Railway, Vercel, and Render, along with knowledge in UI/UX, automation, testing, and containerization with Docker.',

    // Unified personal philosophy
    'about.philosophy': 'I firmly believe in constant development, both in software and personally. My motto is: "If it ain\'t broke, don\'t fix it... but true progress comes from a constant commitment to improvement." I value careful planning as the essential map for the success of any technological project.',

    // Consolidated education and experience
    'about.education.title': 'Academic Background and Experience',
    'about.education.umss': 'Systems Engineering - Universidad Mayor de San Simón (UMSS)',
    'about.education.status': 'Final semesters - Soon to graduate',
    'about.education.role': 'Information and Systems Laboratory Assistant Practitioner',
    'about.education.description': 'Continuous training and mentorship in web and mobile development, gaining practical experience in academic environments.',
    'about.education.other': 'Instituto Técnico Álvarez Plata (2024) - Complementary training in Computer Systems',

    // Tech stack
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

    // Interests
    'about.interests.title': 'Areas of Interest',
    'about.interests.description': 'Passionate about networking, mobile development, robotics, IoT, and Artificial Intelligence. I am constantly seeking to learn and apply new technologies, exploring cutting-edge areas to create innovative solutions.',
    // Work philosophy
    'about.philosophy.title': 'Work Philosophy',
    'about.philosophy.planning': 'I believe that planning and design are the most crucial phases of any project. You cannot build without a solid blueprint to guide each stage of development.',
    'about.philosophy.learning': 'Continuous learning is essential. I use modern tools like AI to optimize development, but I always seek to deeply understand the inner workings of every technology I implement.',
    'about.philosophy.understanding': 'I am motivated to understand how things work from their foundations, not just use them superficially. This curiosity drives me to constantly explore new technologies and methodologies.',

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
    <div>
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};