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
    
    // Home
    'home.greeting': '¡Hola! Soy',
    'home.name': 'Orlando',
    'home.title': 'Desarrollador Full Stack',
    'home.subtitle': 'Creando experiencias web modernas y funcionales',
    // 'home.cta': 'Ver proyectos',
    // 'home.contactBtn': 'Contactar',
    
    // About
    'about.title': 'Sobre mí',
    'about.subtitle': 'Conoce un poco más sobre mi trayectoria',
    'about.description': 'Desarrollador apasionado por crear soluciones tecnológicas innovadoras.',
    'about.more': 'Trabajo con React, TypeScript, Node.js y bases de datos modernas. Si quieres ver algunos de mis proyectos, visita la sección de proyectos.',

    
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
    'footer.rights': 'Todos los derechos reservados',
    'footer.developed': 'Desarrollado con',
    'footer.by': 'por',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home
    'home.greeting': 'Hi! I\'m',
    'home.name': 'Orlando',
    'home.title': 'Full Stack Developer',
    'home.subtitle': 'Creating modern and functional web experiences',
    // 'home.cta': 'View projects',
    // 'home.contactBtn': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Learn a bit more about my journey',
    'about.description': 'Developer passionate about creating innovative technological solutions.',
    'about.more': 'I work with React, TypeScript, Node.js, and modern databases. If you want to see some of my projects, visit the projects section.',
    
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
    'footer.rights': 'All rights reserved',
    'footer.developed': 'Developed with',
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