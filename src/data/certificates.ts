// src\data\certificates.ts
import type { Certificate } from '../types/index.types';
import pythonCert from '../assets/images/certificates/python-data-science.jpg';
import nodeCert from '../assets/images/certificates/nodejs-complete.jpg';
import dockerCert from '../assets/images/certificates/docker-kubernetes.jpg';
import reactCert from '../assets/images/certificates/react-complete.jpg';
import djangoCert from '../assets/images/certificates/django-web.jpg';
import cyberCert from '../assets/images/certificates/cybersecurity-cisco.jpg';

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Python para Data Science',
    issuer: 'Coursera - IBM',
    date: 'Marzo 2024',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://coursera.org/verify/ABC123XYZ',
    imageUrl: pythonCert,
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
  },
  {
    id: 2,
    title: 'Node.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'Enero 2024',
    credentialId: 'UC-NODE2024',
    credentialUrl: 'https://udemy.com/certificate/UC-NODE2024',
    imageUrl: nodeCert,
    skills: ['Node.js', 'Express', 'REST API', 'MongoDB']
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