// src\pages\Home.tsx

import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from "../hooks/useTheme";
import profile4 from '../assets/images/profiles/profile4.jpg';
import '../styles/pages/Home.css';

export const Home = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const themeStatsGithub = theme === 'light' ? 'transparent' : 'tokyonight';
    
    return (
        <section className="page home-page">
            <div className="container">
                {/* Hero Section con layout horizontal */}
                <div className="hero-section">
                    <div className="hero-content">
                        <div className="profile-column">
                            <img 
                                src={profile4} 
                                alt="Orlando AV - Imagen de Perfil" 
                                className="profile-image"
                            />
                        </div>
                        
                        <div className="info-column">
                            <h1>{t('home.greeting')} <span className="highlight-name">{t('home.name')}</span></h1>
                            <h2>{t('home.title')}</h2>
                            <p className="lead">{t('home.subtitle')}</p>
                            <p>{t('about.interests.description')}</p>

                            {/* Intereses integrados en el hero */}
                            {/* <div className="interests-inline">
                                <h6>{t('about.interests.title')}</h6>
                                <p>{t('about.interests.description')}</p>
                            </div> */}
                            <a 
                                href="/assets/documents/Orlando_Alt_Var_CV.pdf"  
                                download="Orlando_Alt_Var_CV.pdf" 
                                className="btn btn-primary download-cv"
                            >
                                {t('home.cv_cta') ?? 'Descargar CV'}
                            </a>
                            
                            
                        </div>
                    </div>
                    
                    {/* Biografía */}
                    <div className="bio-content">
                        <p>{t('home.p1')} {t('home.p2')}</p>
                    </div>
                </div>

                {/* Stack tecnológico - Compacto */}
                <div className="tech-stack-section">
                    <h2>{t('about.techstack.title')}</h2>
                    
                    <div className="tech-stack-grid">
                        <div className="tech-item">
                            <strong>🚀 {t('about.techstack.backend')}:</strong>
                            <span>{t('about.techstack.backendList')}</span>
                        </div>
                        
                        <div className="tech-item">
                            <strong>💻 {t('about.techstack.frontend')}:</strong>
                            <span>{t('about.techstack.frontendList')}</span>
                        </div>
                        
                        <div className="tech-item">
                            <strong>📱 {t('about.techstack.mobile')}:</strong>
                            <span>{t('about.techstack.mobileList')}</span>
                        </div>
                        
                        <div className="tech-item">
                            <strong>🛠️ {t('about.techstack.tools')}:</strong>
                            <span>{t('about.techstack.toolsList')}</span>
                        </div>
                        
                        <div className="tech-item">
                            <strong>☁️ {t('about.techstack.deployment')}:</strong>
                            <span>{t('about.techstack.deploymentList')}</span>
                        </div>
                    </div>
                </div>

                {/* Estadísticas de GitHub */}
                <div className='stats-section'>
                    <h2>GitHub Stats</h2>
                    
                    {/* Primera fila */}
                    <div className='graph-stats-row'>
                        <img
                            src={`https://streak-stats.demolab.com?user=0RLAND0-AV&theme=${themeStatsGithub}&border_radius=10&locale=en`} 
                            alt="GitHub Activity Streak"
                            className="github-stat-card"
                        />
                        <img
                            src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=0RLAND0-AV&locale=en&theme=${themeStatsGithub}&utcOffset=0`}
                            alt="GitHub Activity Graph Day"
                            className="github-stat-card"
                        />
                    </div>
                    
                    {/* Segunda fila */}
                    <div className='graph-stats-row'>
                        <img
                            src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0RLAND0-AV&theme=${themeStatsGithub}&exclude=CSS`}
                            alt="Top Languages"
                            className="github-stat-card"
                        />
                        <img
                            src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=0RLAND0-AV&theme=${themeStatsGithub}`}
                            alt="GitHub Profile Details"
                            className="github-stat-card"
                        />
                    </div>
                </div>
            </div>
        </section> 
    );
};