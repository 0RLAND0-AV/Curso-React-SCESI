import type { Certificate } from '../types/index.types';

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Python para Data Science',
    issuer: 'Coursera - IBM',
    date: 'Marzo 2024',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://coursera.org/verify/ABC123XYZ',
    imageUrl: '/src/assets/images/certificates/python-data-science.jpg',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
  },
  {
    id: 2,
    title: 'Node.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'Enero 2024',
    credentialId: 'UC-NODE2024',
    credentialUrl: 'https://udemy.com/certificate/UC-NODE2024',
    imageUrl: '/src/assets/images/certificates/nodejs-complete.jpg',
    skills: ['Node.js', 'Express', 'REST API', 'MongoDB']
  },
  {
    id: 3,
    title: 'Docker & Kubernetes: The Complete Guide',
    issuer: 'Udemy',
    date: 'Diciembre 2023',
    credentialId: 'UC-DOCKER2023',
    credentialUrl: 'https://udemy.com/certificate/UC-DOCKER2023',
    imageUrl: '/src/assets/images/certificates/docker-kubernetes.jpg',
    skills: ['Docker', 'Kubernetes', 'DevOps', 'Containerization']
  },
  {
    id: 4,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Noviembre 2023',
    credentialId: 'UC-REACT2023',
    credentialUrl: 'https://udemy.com/certificate/UC-REACT2023',
    imageUrl: '/src/assets/images/certificates/react-complete.jpg',
    skills: ['React', 'Hooks', 'Redux', 'TypeScript']
  },
  {
    id: 5,
    title: 'Django Web Framework',
    issuer: 'edX - Microsoft',
    date: 'Octubre 2023',
    credentialId: 'DJANGO-MS-2023',
    credentialUrl: 'https://edx.org/certificate/DJANGO-MS-2023',
    imageUrl: '/src/assets/images/certificates/django-web.jpg',
    skills: ['Django', 'Python', 'REST Framework', 'PostgreSQL']
  },
  {
    id: 6,
    title: 'Cybersecurity Fundamentals',
    issuer: 'CISCO Networking Academy',
    date: 'Septiembre 2023',
    credentialUrl: 'https://cisco.com/verify/cyber2023',
    imageUrl: '/src/assets/images/certificates/cybersecurity-cisco.jpg',
    skills: ['Network Security', 'Ethical Hacking', 'Cybersecurity', 'CISCO']
  }
];