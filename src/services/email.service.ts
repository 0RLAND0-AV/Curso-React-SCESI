import type { ContactFormData } from '../types/index.types';

const API_URL = import.meta.env.VITE_GSCRIPT_WEBAPP;

export const sendEmail = async (data: ContactFormData): Promise<void> => {
  try {
    // Crear FormData en lugar de JSON
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject || '');
    formData.append('message', data.message);

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData, // Enviar como FormData, no JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.result !== 'success') {
      throw new Error(result.error || 'Error desconocido');
    }

    return result;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    throw error;
  }
};