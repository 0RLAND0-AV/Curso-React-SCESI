import { useLanguage } from '../hooks/useLanguage';
import profile4 from '../assets/images/profiles/profile4.jpg';
// import profile3 from '../assets/images/profiles/profile3.webp';

// import '../styles/pages/Home.css';

export const Home = () => {
    const { t } = useLanguage();

	return (
		<section className="page home-page">
            <img 
            src={profile4} 
            alt="ImagenProfile" 
            style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} 
            />
			<div className="container">
                <h1>{t('home.greeting') ?? '¡Hola! Soy'} {t('home.name') ?? 'Orlando'}</h1>
				<h1>{t('home.title') ?? 'Hola, soy Orlando'}</h1>
				<p className="lead">{t('home.subtitle') ?? 'Desarrollador Fullstack que crea experiencias web modernas.'}</p>
				
			</div>
		</section>

        
	);
};
