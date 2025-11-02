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
    images: [
      '/src/assets/images/projects/project1-1.jpg',
      '/src/assets/images/projects/project1-2.jpg',
      '/src/assets/images/projects/project1-3.jpg'
    ],
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
    images: [
      '/src/assets/images/projects/project2-1.jpg',
      '/src/assets/images/projects/project2-2.jpg',
      '/src/assets/images/projects/project2-3.jpg',
      '/src/assets/images/projects/project2-4.jpg',
      '/src/assets/images/projects/project2-5.jpg'
    ],
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
    images: [
      '/src/assets/images/projects/project3-1.jpg',
      '/src/assets/images/projects/project3-2.jpg'
    ],
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
    images: [
      '/src/assets/images/projects/project4-1.jpg'
    ],
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    category: 'web',
    date: '2024-07'
  },
  {
    id: '5',
    title: {
      es: 'Sistema de Gestión Escolar',
      en: 'School Management System'
    },
    description: {
      es: 'Sistema completo para gestión de estudiantes, profesores, calificaciones y asistencias.',
      en: 'Complete system for managing students, teachers, grades and attendance.'
    },
    images: [
      '/src/assets/images/projects/project5-1.jpg',
      '/src/assets/images/projects/project5-2.jpg',
      '/src/assets/images/projects/project5-3.jpg',
      '/src/assets/images/projects/project5-4.jpg'
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'REST Framework'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    category: 'fullstack',
    date: '2024-06'
  },
  {
    id: '6',
    title: {
      es: 'App Móvil de Delivery',
      en: 'Delivery Mobile App'
    },
    description: {
      es: 'Aplicación móvil para pedidos de comida con tracking en tiempo real y múltiples métodos de pago.',
      en: 'Mobile app for food orders with real-time tracking and multiple payment methods.'
    },
    images: [
      '/src/assets/images/projects/project6-1.jpg',
      '/src/assets/images/projects/project6-2.jpg',
      '/src/assets/images/projects/project6-3.jpg'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    github: 'https://github.com',
    featured: false,
    category: 'mobile',
    date: '2024-05'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};