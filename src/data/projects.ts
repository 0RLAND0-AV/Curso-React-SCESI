import type { Project } from '../types/index.types';

export const projects: Project[] = [
  {
    id: '1',
    title: {
      es: 'E-Commerce Moderno',
      en: 'Modern E-Commerce'
    },
    description: {
      es: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      en: 'E-commerce platform with shopping cart, payment gateway and admin panel.'
    },
    image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=E-Commerce',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    category: 'fullstack',
    date: '2024-10'
  },
  {
    id: '2',
    title: {
      es: 'Dashboard Analítico',
      en: 'Analytics Dashboard'
    },
    description: {
      es: 'Dashboard interactivo para visualización de datos con gráficos y reportes en tiempo real.',
      en: 'Interactive dashboard for data visualization with real-time charts and reports.'
    },
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Dashboard',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    category: 'web',
    date: '2024-09'
  },
  {
    id: '3',
    title: {
      es: 'API REST Escalable',
      en: 'Scalable REST API'
    },
    description: {
      es: 'API RESTful con autenticación JWT, documentación Swagger y arquitectura escalable.',
      en: 'RESTful API with JWT authentication, Swagger documentation and scalable architecture.'
    },
    image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=API',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    category: 'backend',
    date: '2024-08'
  },
  {
    id: '4',
    title: {
      es: 'Aplicación de Tareas',
      en: 'Task Management App'
    },
    description: {
      es: 'Gestor de tareas con drag & drop, filtros avanzados y sincronización en tiempo real.',
      en: 'Task manager with drag & drop, advanced filters and real-time synchronization.'
    },
    image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Tasks',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    category: 'web',
    date: '2024-07'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};