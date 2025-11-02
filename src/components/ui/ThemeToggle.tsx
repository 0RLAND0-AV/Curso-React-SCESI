import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import '../../styles/components/ui/ThemeToggle.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
      >
        🌙 / ☀️
        {theme === 'light' ? (
          <svg className="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </button>

      <button 
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
      </button>
    </div>
  );
};