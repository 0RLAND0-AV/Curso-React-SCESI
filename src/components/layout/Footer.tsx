import { useLanguage } from '../../hooks/useLanguage';
import githubIcon from '../../assets/images/icons/github.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import twitterIcon from '../../assets/images/icons/twitterx.svg';
// import './Footer.css';

export const Footer = () => {
const { t } = useLanguage();
const currentYear = new Date().getFullYear();

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/0RLAND0-AV', icon: githubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/orlando-a-v-98b3672b7/', icon: linkedinIcon },
    { name: 'Twitter', url: 'https://twitter.com', icon: twitterIcon },
];

return (
    <div>
    <footer className="footer">
        <div className="footer__container">
        <div className="footer__content">
            <div className="footer__social">
            {socialLinks.map((link) => (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={link.name}
                >
                <img src={link.icon} alt={link.name} className="footer__social-icon" />
                </a>
            ))}
            </div>

            <div className="footer__text">
            <p>
                {t('footer.developed')}  {t('footer.by')} {t('home.name')}
            </p>
            <p>
                © {currentYear} {t('footer.rights')}
            </p>
            </div>
        </div>
        </div>
    </footer>
    </div>
);
};