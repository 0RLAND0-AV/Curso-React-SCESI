import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from "../hooks/useTheme";
import profile4 from '../assets/images/profiles/profile4.jpg';
// import profile3 from '../assets/images/profiles/profile3.webp';

// import '../styles/pages/Home.css';

export const Home = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    // const { language } = useLanguage();
    const themeStatsGithub = theme === 'light' ? 'transparent' : 'tokyonight';
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
                    
                    <h1>{t('home.greeting') ?? '¡Hola! Soy'} <span className="highlight-name">{t('home.name') ?? 'Orlando'}</span></h1>
                    <h2>{t('home.title') ?? 'Desarrollador Full Stack'}</h2>
                    <p className="lead">{t('home.subtitle') ?? 'Creando experiencias web modernas y funcionales'}</p>
                    <p>{t('home.p1') ?? 'Párrafo 1 de About'}</p>
                    <p>{t('home.p2') ?? 'Párrafo 2 de About'}</p>
                    <p>{t('home.p3') ?? 'Párrafo 3 de About'}</p>
                </div>


                <div className="interests-section">
                    <h2>{t('about.interests.title') ?? 'Áreas de Interés'}</h2>
                    <p>{t('about.interests.description') ?? 'Tecnologías que me apasionan'}</p>
                </div>

                <div className="tech-stack-section">
                    <h2>{t('about.techstack.title') ?? 'Stack Tecnológico'}</h2>
                    
                    <div className="tech-category">
                        <h3>{t('about.techstack.backend') ?? 'Backend (Especialización)'}</h3>
                        <p>{t('about.techstack.backendList') ?? 'Django, FastAPI, Laravel, Express, NestJS'}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.frontend') ?? 'Frontend'}</h3>
                        <p>{t('about.techstack.frontendList') ?? 'React, Angular con TypeScript'}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.mobile') ?? 'Desarrollo Móvil'}</h3>
                        <p>{t('about.techstack.mobileList') ?? 'Ionic (Angular), Flutter'}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.tools') ?? 'Herramientas y DevOps'}</h3>
                        <p>{t('about.techstack.toolsList') ?? 'Git, Docker, Postman, Bash, PowerShell'}</p>
                    </div>

                    <div className="tech-category">
                        <h3>{t('about.techstack.deployment') ?? 'Deployment'}</h3>
                        <p>{t('about.techstack.deploymentList') ?? 'PythonAnywhere, Railway, Vercel, Render'}</p>
                    </div>
                </div>


                <div className='graph-stats-github'>
                    <img
                        // locale=${languageStatsGithub}
                        src={`https://streak-stats.demolab.com?user=0RLAND0-AV&theme=${themeStatsGithub}&border_radius=10&locale=en`} 
                        alt="GitHub Activity Streak"
                        className="github-stat-card"
                    />
                    <img
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