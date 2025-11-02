import  { useState } from 'react';
import type  { FormEvent } from 'react';
import type { ContactFormData, ContactFormErrors, FormStatus } from '../../types/index.types';
import { useLanguage } from '../../hooks/useLanguage';
import { sendEmail } from '../../services/email.service';
import { Button } from './Button';
import '../../styles/components/ui/ContactForm.css';

export const ContactForm = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');
    
    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">
            {t('contact.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">
            {t('contact.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="subject">
            {t('contact.subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="contact-form__input"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Propuesta de proyecto"
          />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="message">
            {t('contact.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            className={`contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame sobre tu proyecto..."
            rows={5}
          />
          {errors.message && <span className="contact-form__error">{errors.message}</span>}
        </div>

        {status === 'success' && (
          <div className="contact-form__message contact-form__message--success">
            {t('contact.success')}
          </div>
        )}

        {status === 'error' && (
          <div className="contact-form__message contact-form__message--error">
            {t('contact.error')}
          </div>
        )}

        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
          disabled={status === 'loading'}
          className="contact-form__submit"
        >
          {status === 'loading' ? t('contact.sending') : t('contact.send')}
        </Button>
      </form>
    </div>
  );
};