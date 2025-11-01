import { useLanguage } from '../hooks/useLanguage';
import perfil from '../assets/images/profiles/profile3.webp';
import imgCarreraIS from '../assets/images/icons/LogoIS.png';
import imgFacultad from '../assets/images/icons/CajaFacultad.jpg';
import imgLaboratorio from '../assets/images/icons/Laboratorio.jpg';



// import '../styles/pages/About.css';

export const About = () => {
	const { t } = useLanguage();

	return (
		<section className="pageabout-page">
			Estas en About
			<div className="container">
				<h1>{t('about.title') ?? 'Titulo default si no renoce el about.title de providers'}</h1>
				<h2>{t('about.subtitle') ?? 'Subtitulo default si no renoce el about.subtitle de providers'}</h2>
				<p>
					{t('about.description') ?? 'Descripcion default si no renoce el about.description de providers'}
				</p>

				<p>
					{t('about.more') ?? 'Texto default si no renoce el about.more de providers'}
				</p>
			</div>
		</section>
	);
};
