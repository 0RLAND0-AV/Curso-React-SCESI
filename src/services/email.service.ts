import type { ContactFormData } from '../types/index.types';

// URL de tu backend (cambiar cuando tengas tu API)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Envía un email usando backend
 * @param data - Datos del formulario de contacto
 * @returns Promise<void>
 */
export const sendEmail = async (data: ContactFormData): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Versión alternativa con simulación (para desarrollo)
export const sendEmailMock = async (data: ContactFormData): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Email mock sent:', data);
      // Simula éxito 90% del tiempo
      if (Math.random() > 0.1) {
        resolve();
      } else {
        reject(new Error('Simulated error'));
      }
    }, 2000);
  });
};