import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../../components/ui/ThemeToggle';
import '../../styles/components/layout/Navbar.css';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Botón hamburguesa para mobile */}
      <button 
        className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </button>

      {/* Lista de navegación */}
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

      {/* Acciones (Theme toggle, etc) */}
      <div className="navbar__actions">
        <ThemeToggle />
      </div>
    </nav>
  );
};