// src\data\projects.ts
import type { Project } from '../types/index.types';

// 🖼️ Importar imágenes del proyecto 1
import project1_1 from '../assets/images/projects/project1-1.jpg';
import project1_2 from '../assets/images/projects/project1-2.jpg';
import project1_3 from '../assets/images/projects/project1-3.jpg';

// 🖼️ Proyecto 2
import project2_1 from '../assets/images/projects/project2-1.jpg';
import project2_2 from '../assets/images/projects/project2-2.jpg';
import project2_3 from '../assets/images/projects/project2-3.jpg';
import project2_4 from '../assets/images/projects/project2-4.jpg';
import project2_5 from '../assets/images/projects/project2-5.jpg';

// 🖼️ Proyecto 3
import project3_1 from '../assets/images/projects/project3-1.jpg';
import project3_2 from '../assets/images/projects/project3-2.jpg';

// 🖼️ Proyecto 4
import project4_1 from '../assets/images/projects/project4-1.jpg';

// 🖼️ Proyecto 5
import project5_1 from '../assets/images/projects/project5-1.jpg';
import project5_2 from '../assets/images/projects/project5-2.jpg';
import project5_3 from '../assets/images/projects/project5-3.jpg';
import project5_4 from '../assets/images/projects/project5-4.jpg';

// 🖼️ Proyecto 6
import project6_1 from '../assets/images/projects/project6-1.jpg';
import project6_2 from '../assets/images/projects/project6-2.jpg';
import project6_3 from '../assets/images/projects/project6-3.jpg';

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
      project1_1,
      project1_2,
      project1_3
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
      project2_1,
      project2_2,
      project2_3,
      project2_4,
      project2_5
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
      project3_1,
      project3_2
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
      project4_1
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
      project5_1,
      project5_2,
      project5_3,
      project5_4
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
      project6_1,
      project6_2,
      project6_3
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