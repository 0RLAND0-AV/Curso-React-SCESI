// src\pages\Home.tsx

import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from "../hooks/useTheme";
import profile4 from '../assets/images/profiles/profile4.jpg';
// import profile3 from '../assets/images/profiles/profile3.webp';
// import '../styles/pages/Home.css';

export const Home = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const themeStatsGithub = theme === 'light' ? 'transparent' : 'tokyonight';
    // const { language } = useLanguage();
    // const languageStatsGithub = language === 'es' ? 'es' : 'en';
    return (
        <section className="page home-page">
            <div className="container">
                <div className="hero-section">
                    <img 
                        src={profile4} 
                        alt="Orlando Alt Var - Imagen de Perfil" 
                        style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                    
                    <h1>{t('home.greeting')} <span className="highlight-name">{t('home.name')}</span></h1>
                    <h2>{t('home.title')}</h2>
                    <p className="lead">{t('home.subtitle')}</p>
                    <a 
                        href="/assets/documents/Orlando_Alt_Var_CV.pdf"  
                        download="Orlando_Alt_Var_CV.pdf" 
                        className="btn btn-primary download-cv"
                    >
                        {t('home.cv_cta') ?? 'Descargar CV'}
                    </a>
                    {/* Párrafos principales consolidados */}
                    <div className="bio-content">
                        <p>{t('home.p1')}</p>
                        <p>{t('home.p2')}</p>
                        {/* <p>{t('home.p3')}</p> */}
                    </div>
                </div>

                {/* Sección de intereses */}
                <div className="interests-section">
                    <h2>{t('about.interests.title')}</h2>
                    <p>{t('about.interests.description')}</p>
                </div>

                {/* Stack tecnológico unificado */}
                <div className="tech-stack-section">
                    <h2>{t('about.techstack.title')}</h2>
                    
                    <div className="tech-category">
                        <h3>{t('about.techstack.backend')}</h3>
                        <p>{t('about.techstack.backendList')}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.frontend')}</h3>
                        <p>{t('about.techstack.frontendList')}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.mobile')}</h3>
                        <p>{t('about.techstack.mobileList')}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.tools')}</h3>
                        <p>{t('about.techstack.toolsList')}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.deployment')}</h3>
                        <p>{t('about.techstack.deploymentList')}</p>
                    </div>
                </div>

                {/* Estadísticas de GitHub */}
                <div className='graph-stats-github'>
                    <img
                        src={`https://streak-stats.demolab.com?user=0RLAND0-AV&theme=${themeStatsGithub}&border_radius=10&locale=en`} 
                        alt="GitHub Activity Streak"
                        className="github-stat-card"
                    />
                    <img
                        // locale=${languageStatsGithub}
                        src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0RLAND0-AV&theme=${themeStatsGithub}&exclude=CSS`}
                        alt="Top Languages"
                        className="github-stat-card"
                    />
                    <img
                        src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=0RLAND0-AV&locale=en&theme=${themeStatsGithub}&utcOffset=0`}
                        alt="GitHub Activity Graph Day"
                        className="github-stat-card"
                    />
                    <img
                        src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=0RLAND0-AV&theme=${themeStatsGithub}`}
                        alt="GitHub Profile Details"
                        className="github-stat-card"
                    />
                </div>
            </div>
        </section> 
    );
};


