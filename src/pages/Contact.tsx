import { ContactForm } from '../components/ui/ContactForm';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/pages/Contact.css';
// import '../styles/pages/Contact.css';

export const Contact = () => {
	const { t } = useLanguage();

	return (
		<section className="page contact-page">
			{/* Estas en Contact */}
			<div className="container">
				<h1>{t('contact.title') ?? 'Contacto'}</h1>
				<p className="lead">{t('contact.subtitle') ?? 'Texto default si no renoce el contact.subtitle de providers'}</p>

				<ContactForm />
			</div>
		</section>
	);
};
