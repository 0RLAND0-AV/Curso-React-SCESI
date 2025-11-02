// ========================================
// TIPOS DE CERTIFICADOS
// ========================================

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
  skills: string[];
}

// ========================================
// TIPOS DE PROYECTOS
// ========================================

export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: ProjectCategory;
  date: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'fullstack' | 'backend' | 'other';

// ========================================
// TIPOS DE TEMA
// ========================================

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ========================================
// TIPOS DE IDIOMA
// ========================================

export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// ========================================
// TIPOS DE FORMULARIO DE CONTACTO
// ========================================

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ========================================
// TIPOS DE NAVEGACIÓN
// ========================================

export interface NavLink {
  label: {
    es: string;
    en: string;
  };
  path: string;
}

// ========================================
// TIPOS DE REDES SOCIALES
// ========================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}