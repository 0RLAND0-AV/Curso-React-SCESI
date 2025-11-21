// src\data\certificates.ts
import type { Certificate } from '../types/index.types';
import IntroduccionJS from '../assets/images/certificates/JS.jpeg';
import IntroduccionSQL from '../assets/images/certificates/SQL2.webp';
// import pythonCert from '../assets/images/certificates/python-data-science.jpg';
// import nodeCert from '../assets/images/certificates/nodejs-complete.jpg';
import dockerCert from '../assets/images/certificates/docker-kubernetes.jpg';
import reactCert from '../assets/images/certificates/react-complete.jpg';
import djangoCert from '../assets/images/certificates/django-web.jpg';
import cyberCert from '../assets/images/certificates/cybersecurity-cisco.jpg';


export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Introduccion a JavaScript',
    issuer: 'SoloLearn',
    date: 'Agosto 2025',
    credentialId: 'CC-ZM4KEVAQ',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-ZM4KEVAQ/image/png?t=638976377194930805',
    imageUrl: IntroduccionJS,
    skills: ['JavaScript', 'ES6 básico', 'DOM', 'Control de flujo', 'Funciones']
  },
  {
    id: 2,
    title: 'Introduccion SQL',
    issuer: 'SoloLearn',
    date: 'Febrero 2024',
    credentialId: 'CC-EORYTF2R',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-EORYTF2R/image/png?t=638992792876366582',
    imageUrl: IntroduccionSQL,
    skills: ['SQL', 'Consultas', 'Filtros', 'Joins']
  },
  {
    id: 3,
    title: 'Docker & Kubernetes: The Complete Guide',
    issuer: 'Udemy',
    date: 'Diciembre 2023',
    credentialId: 'UC-DOCKER2023',
    credentialUrl: 'https://udemy.com/certificate/UC-DOCKER2023',
    imageUrl: dockerCert,
    skills: ['Docker', 'Kubernetes', 'DevOps', 'Containerization']
  },
  {
    id: 4,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Noviembre 2023',
    credentialId: 'UC-REACT2023',
    credentialUrl: 'https://udemy.com/certificate/UC-REACT2023',
    imageUrl: reactCert,
    skills: ['React', 'Hooks', 'Redux', 'TypeScript']
  },
  {
    id: 5,
    title: 'Django Web Framework',
    issuer: 'edX - Microsoft',
    date: 'Octubre 2023',
    credentialId: 'DJANGO-MS-2023',
    credentialUrl: 'https://edx.org/certificate/DJANGO-MS-2023',
    imageUrl: djangoCert,
    skills: ['Django', 'Python', 'REST Framework', 'PostgreSQL']
  },
  {
    id: 6,
    title: 'Cybersecurity Fundamentals',
    issuer: 'CISCO Networking Academy',
    date: 'Septiembre 2023',
    credentialUrl: 'https://cisco.com/verify/cyber2023',
    imageUrl: cyberCert,
    skills: ['Network Security', 'Ethical Hacking', 'Cybersecurity', 'CISCO']
  }
];