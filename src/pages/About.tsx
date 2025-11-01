import { useLanguage } from '../hooks/useLanguage';
// import '../styles/pages/About.css';

export const About = () => {
	const { t } = useLanguage();

	return (
		<section className="page about-page">
			<div className="container">
				<h1>{t('about.title') ?? 'Sobre mí'}</h1>

				<p>
					{t('about.description') ?? 'Soy Orlando, desarrollador especializado en crear aplicaciones web y APIs robustas. Me apasiona aprender nuevas tecnologías y construir soluciones que aporten valor.'}
				</p>

				<p>
					{t('about.more') ?? 'Trabajo con React, TypeScript, Node.js y bases de datos modernas. Si quieres ver algunos de mis proyectos, visita la sección de proyectos.'}
				</p>
			</div>
		</section>
	);
};
