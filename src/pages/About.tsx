import { useLanguage } from '../hooks/useLanguage';
import imgCarreraIS from '../assets/images/icons/LogoIS.png';
import imgFacultad from '../assets/images/icons/CajaFacultad.jpg';
import imgLaboratorio from '../assets/images/icons/Laboratorio.jpg';
// Sugerencia: Añadir el logo de la universidad para mostrar el contexto
import imgUMSS from '../assets/images/icons/LogoUMSS.png'; 


// import '../styles/pages/About.css';

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="page about-page">
            <div className="container">
                <header className="about-header">
                    <h1>{t('about.title') ?? 'Sobre Mí'}</h1>
                    <h2>{t('about.subtitle') ?? 'Conoce un poco más sobre mi trayectoria'}</h2>
                </header>
                
                <div className="profile-bio">
                    
                    <div className="bio-text">
                        <p>{t('about.p1') ?? 'Párrafo 1 de About'}</p>
                        <p>{t('about.p2') ?? 'Párrafo 2 de About'}</p>
                        <p>{t('about.p3') ?? 'Párrafo 3 de About'}</p>
                        <p>{t('about.p4') ?? 'Párrafo 4 de About'}</p>
                        <p>{t('about.p5') ?? 'Párrafo 5 de About'}</p>
                        <p>{t('about.p6') ?? 'Párrafo 6 de About'}</p>
                    </div>
                </div>

                <div className="education-section">
                    <h3>{t('about.educationTitle') ?? 'Formación Académica y Práctica'}</h3>
                    
                    <div className="education-item">
                        <img 
                            src={imgUMSS} 
                            alt="Logo Universidad Mayor de San Simón" 
                            className="education-logo" 
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="details">
                            <h4>{t('about.educationUMSS') ?? 'Ingeniería de Sistemas'}</h4>
                            <p className="role">{t('about.educationRole') ?? 'Auxiliar Practicante'}</p>
                            <p className="description">{t('about.educationDescription') ?? 'Detalles de la formación y rol.'}</p>
                            
                            <div className="supporting-images">
                                <img src={imgCarreraIS} alt="Logo Carrera IS" style={{ height: '150px' }}/>
                                <img src={imgFacultad} alt="Logo Facultad" style={{ height: '150px' }}/>
                                <img src={imgLaboratorio} alt="Logo Laboratorio" style={{ height: '150px' }}/>
                            </div>
                        </div>
                    </div>

                    <div className="education-item">
                        <div className="details">
                            <h4>{t('about.otherStudies') ?? 'Otros Estudios Técnicos'}</h4>
                            <p className="description">{t('about.otherDescription') ?? 'Detalles de otros estudios.'}</p>
                        </div>
                    </div>

                    <div className="skills-summary">
                        </div>
                </div>
                <p>{t('about.p7') ?? 'Párrafo 7 de About'}</p>
                <div className="philosophy-section">
                    <h2>{t('about.philosophy.title') ?? 'Filosofía de Trabajo'}</h2>
                    <p>{t('about.philosophy.planning') ?? 'Enfoque en la planificación y el diseño'}</p>
                    <p>{t('about.philosophy.learning') ?? 'Aprendizaje continuo'}</p>
                    <p>{t('about.philosophy.understanding') ?? 'Comprensión profunda de las tecnologías'}</p>
                </div>
            </div>
        </section>
    );
};