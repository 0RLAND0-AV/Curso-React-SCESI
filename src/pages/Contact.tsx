import { ContactForm } from '../components/ui/ContactForm';
import { useLanguage } from '../hooks/useLanguage';
// import '../styles/pages/Contact.css';

export const Contact = () => {
	const { t } = useLanguage();

	return (
		<section className="page contact-page">
			<div className="container">
				<h1>{t('contact.title') ?? 'Contacto'}</h1>
				<p className="lead">{t('contact.subtitle') ?? '¿Tienes un proyecto en mente? Escríbeme y hablemos.'}</p>

				<ContactForm />
			</div>
		</section>
	);
};
