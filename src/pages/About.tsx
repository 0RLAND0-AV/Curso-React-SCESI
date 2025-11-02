import { useLanguage } from '../hooks/useLanguage';
import { certificates } from '../data/certificates';
import { CertificateCard } from '../components/ui/CertificateCard';
import imgCarreraIS from '../assets/images/icons/LogoIS.png';
import imgFacultad from '../assets/images/icons/CajaFacultad.jpg';
import imgLaboratorio from '../assets/images/icons/Laboratorio.jpg';
import imgUMSS from '../assets/images/icons/LogoUMSS.png';
import imgBackendDev from '../assets/images/icons/backend-development.jpg';
import '../styles/pages/About.css';
// import imgTeamwork from '../assets/images/icons/teamwork-coding.jpg'; 
// import imgLearning from '../assets/images/icons/continuous-learning.jpg'; 
// import imgPlanning from '../assets/images/icons/project-planning.jpg'; 

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="page about-page">
            <div className="container">
                <header className="about-header">
                    <h1>{t('about.title')}</h1>
                    <h2>{t('about.subtitle')}</h2>
                </header>
                
                {/* Biografía consolidada con imagen ilustrativa */}
                <div className="profile-bio">
                    <div className="bio-image">
                        <img 
                            src={imgBackendDev} 
                            alt="Desarrollo Backend" 
                            className="feature-image"
                            style={{ width: '300px', maxWidth: '300px', borderRadius: '8px' }}
                        />
                    </div>
                    <div className="bio-text">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                        <p>{t('about.p4')}</p>
                        <p>{t('about.p5')}</p>
                        
                        {/* Quote personal */}
                        <div className="personal-quote">
                            <p><em>{t('about.quote')}</em></p>
                        </div>
                        
                        <p>{t('about.looking')}</p>
                    </div>
                </div>

                {/* Educación y experiencia unificadas */}
                <div className="education-section">
                    <h3>{t('about.education.title')}</h3>
                    
                    <div className="education-item">
                        <img 
                            src={imgUMSS} 
                            alt="Logo Universidad Mayor de San Simón" 
                            className="education-logo" 
                            style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                        />
                        <div className="details">
                            <h4>{t('about.education.umss')}</h4>
                            <p className="location">{t('about.education.location')}</p>
                            <p className="status">{t('about.education.status')}</p>
                            <p className="role">{t('about.education.role')}</p>
                            <p className="description">{t('about.education.description')}</p>
                            
                            {/* Imágenes relacionadas distribuidas mejor */}
                            <div className="education-gallery">
                                <div className="gallery-item">
                                    <span className="caption">Carrera de Ingeniería</span>
                                    <img src={imgCarreraIS} alt="Logo Carrera Ingeniería de Sistemas" style={{ height: '150px' }}/>
                                </div>
                                <div className="gallery-item">
                                    <span className="caption">Facultad</span>
                                    <img src={imgFacultad} alt="Facultad de Ciencias y Tecnología" style={{ height: '150px' }}/>
                                </div>
                                <div className="gallery-item">
                                    <span className="caption">Laboratorios</span>
                                    <img src={imgLaboratorio} alt="Laboratorios de Informática" style={{ height: '150px' }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="education-item-other">
                        <div className="details">
                            <h4>{t('about.education.other.title')}</h4>
                            <p>{t('about.education.other.description')}</p>
                        </div>
                    </div>
                </div>
                
                {/* Certificaciones */}
                <div className="certificates-section">
                    <h2>{t('about.certificates.title')}</h2>
                    <p className="certificates-intro">{t('about.certificates.description')}</p>
                    
                    <div className="certificates-grid">
                        {certificates.map((certificate) => (
                            <CertificateCard 
                                key={certificate.id} 
                                certificate={certificate} 
                            />
                        ))}
                    </div>
                </div>

                {/* Filosofía de trabajo*/}
                {/* <div className="philosophy-section">
                    <h2>{t('about.philosophy.title')}</h2>
                    
                    <div className="philosophy-content">
                        <div className="philosophy-image">
                            <img 
                                src={imgPlanning} 
                                alt="Planificación y arquitectura de sistemas" 
                                style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
                            />
                        </div>
                        <div className="philosophy-text">
                            <p>{t('about.philosophy.planning')}</p>
                            <p>{t('about.philosophy.learning')}</p>
                            <p>{t('about.philosophy.understanding')}</p>
                        </div>
                    </div>
                    
                    <div className="learning-highlight">
                        <img 
                            src={imgLearning} 
                            alt="Aprendizaje continuo y tecnologías" 
                            style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', margin: '30px auto', display: 'block' }}
                        />
                    </div>
                </div> */}
            </div>
        </section>
    );
};