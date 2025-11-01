import { projects } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { useLanguage } from '../hooks/useLanguage';
// import '../styles/pages/Projects.css';

export const Projects = () => {
	const { t } = useLanguage();

	return (
		<section className="page projects-page">
			Estas en Projects
			<div className="container">
				<h1>{t('projects.title') ?? 'Proyectos'}</h1>

				<div className="projects-grid">
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};
