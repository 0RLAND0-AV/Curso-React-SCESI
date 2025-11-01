import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../../components/ui/ThemeToggle';
// import './Navbar.css';

export const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <nav className="navbar">
       

        <ul className={`navbar__list ${isMenuOpen ? 'navbar__list--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__item">
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
            Botones de cambio de idioma y cambio de tema
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};