import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from "../hooks/useTheme";
import profile4 from '../assets/images/profiles/profile4.jpg';
// import profile3 from '../assets/images/profiles/profile3.webp';

// import '../styles/pages/Home.css';

export const Home = () => {
    const { t } = useLanguage();
	const { theme } = useTheme();
	const { language } = useLanguage();
	const themeStatsGithub = theme === 'light' ? 'transparent' : 'tokyonight';
	const languageStatsGithub = language === 'es' ? 'es' : 'en';
	return (
		<section className="page home-page">
			Estas en Home
			
			<div className="flex flex-col items-center gap-6 p-8">
			<img
				// locale=${languageStatsGithub}, &hide=stars,issues
				src={`https://github-readme-stats.vercel.app/api?username=0RLAND0-AV&show_icons=true&rank_icon=github&show=prs_merged,contribs&commits_year=2025&include_all_commits=true&theme=${themeStatsGithub}&locale=en`}
				alt="GitHub Stats"
				className="w-full max-w-md rounded-xl shadow-lg"
			/>
			
			<img
				src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=0RLAND0-AV&locale=en&theme=${themeStatsGithub}&utcOffset=0`}
				alt="GitHub Activity Graph Day"
				className="w-full max-w-md rounded-xl shadow-lg"
			/>
			<img
				src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0RLAND0-AV&theme=${themeStatsGithub}&exclude=CSS`}
				alt="Top Languages"
				className="w-full max-w-3xl rounded-xl shadow-lg"
			/>
			<img
				// locale=${languageStatsGithub}
				src={`https://streak-stats.demolab.com?user=0RLAND0-AV&theme=${themeStatsGithub}&border_radius=10&locale=en`} 
				alt="GitHub Activity Streak"
				className="w-full max-w-3xl rounded-xl shadow-lg"
			/>
			<img
				src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=0RLAND0-AV&theme=${themeStatsGithub}`}
				alt="GitHub Profile Details"
				className="w-full max-w-3xl rounded-xl shadow-lg"
			/>
			</div>
	
            <img 
            src={profile4} 
            alt="ImagenProfile" 
            style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} 
            />
			<div className="container">
                <h1>{t('home.greeting') ?? '¡Hola! Soy'} {t('home.name') ?? 'Orlando'}</h1>
				<h1>{t('home.title') ?? 'Hola, soy Orlando'}</h1>
				<p className="lead">{t('home.subtitle') ?? 'Desarrollador Fullstack que crea experiencias web modernas.'}</p>
				
			</div>
		</section>    
	);
};
