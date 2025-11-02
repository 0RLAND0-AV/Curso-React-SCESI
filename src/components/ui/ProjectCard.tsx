import { useState } from 'react';
import type { Project } from '../../types/index.types';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        {/* Carrusel de imágenes */}
        <div className="project-carousel">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.title[language]} - imagen ${currentImageIndex + 1}`}
            style={{ width: '300px', borderRadius: '50px' }}
            className="project-card__image"
          />
          
          {/* Controles del carrusel - Solo si hay más de 1 imagen */}
          {project.images.length > 1 && (
            <>
              <button 
                className="carousel-control carousel-control--prev"
                onClick={prevImage}
                aria-label="Imagen anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="carousel-control carousel-control--next"
                onClick={nextImage}
                aria-label="Siguiente imagen"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores de imagen */}
              <div className="carousel-indicators">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de imágenes */}
              <div className="carousel-counter">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        <div className="project-card__overlay">
          <div className="project-card__technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="project-card__tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title[language]}</h3>
        <p className="project-card__description">{project.description[language]}</p>
        
        <div className="project-card__actions">
          {project.github && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(project.github, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {t('projects.viewCode')}
            </Button>
          )}
          
          {project.demo && (
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t('projects.viewDemo')}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};