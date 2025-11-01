// src\pages\About.tsx

import { useLanguage } from '../hooks/useLanguage';
import imgCarreraIS from '../assets/images/icons/LogoIS.png';
import imgFacultad from '../assets/images/icons/CajaFacultad.jpg';
import imgLaboratorio from '../assets/images/icons/Laboratorio.jpg';
import imgUMSS from '../assets/images/icons/LogoUMSS.png'; 

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="page about-page">
            <div className="container">
                <header className="about-header">
                    <h1>{t('about.title')}</h1>
                    <h2>{t('about.subtitle')}</h2>
                </header>
                
                {/* Biografía consolidada */}
                <div className="profile-bio">
                    <div className="bio-text">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                        <p>{t('about.p4')}</p>
                        
                        {/* Filosofía personal unificada */}
                        <div className="personal-philosophy">
                            <p><strong>{t('about.philosophy')}</strong></p>
                        </div>
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
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="details">
                            <h4>{t('about.education.umss')}</h4>
                            <p className="status">{t('about.education.status')}</p>
                            <p className="role">{t('about.education.role')}</p>
                            <p className="description">{t('about.education.description')}</p>
                            
                            <div className="supporting-images">
                                <img src={imgCarreraIS} alt="Logo Carrera IS" style={{ height: '150px' }}/>
                                <img src={imgFacultad} alt="Logo Facultad" style={{ height: '150px' }}/>
                                <img src={imgLaboratorio} alt="Logo Laboratorio" style={{ height: '150px' }}/>
                            </div>
                        </div>
                    </div>

                    <div className="education-item">
                        <div className="details">
                            <h4>{t('about.education.other')}</h4>
                        </div>
                    </div>
                </div>

                {/* Filosofía de trabajo */}
                <div className="philosophy-section">
                    <h2>{t('about.philosophy.title')}</h2>
                    <p>{t('about.philosophy.planning')}</p>
                    <p>{t('about.philosophy.learning')}</p>
                    <p>{t('about.philosophy.understanding')}</p>
                </div>
            </div>
        </section>
    );
};