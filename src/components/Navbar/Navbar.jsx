import { useState, useContext, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';

const NAV_KEYS = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const navBg = scrolled
    ? 'shadow-lg backdrop-blur-md'
    : '';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--color-nav)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-card-border)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className={navBg}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>

          {/* Logo */}
          <button
            onClick={scrollToTop}
            style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'var(--color-accent)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.5px',
            }}
          >
            Elias<span style={{ color: 'var(--color-text-primary)' }}>.</span>dev
          </button>

          {/* Desktop nav links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
              aria-label="Toggle language"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '0.5rem',
                color: 'var(--color-text-secondary)',
                background: 'var(--color-card)',
                border: '1px solid var(--color-card-border)',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>

            {/* Social links — desktop only */}
            <a
              href="https://github.com/eliasarroyo17"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', display: 'flex' }}
              aria-label="GitHub"
              className="social-link-desktop"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/eliasarroyo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', display: 'flex' }}
              aria-label="LinkedIn"
              className="social-link-desktop"
            >
              <FaLinkedin />
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '0.5rem',
                color: 'var(--color-text-primary)',
                background: 'var(--color-card)',
                border: '1px solid var(--color-card-border)',
                cursor: 'pointer',
                fontSize: '1.1rem',
              }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            style={{
              borderTop: '1px solid var(--color-card-border)',
              paddingBottom: '1rem',
              backgroundColor: 'var(--color-nav)',
            }}
          >
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--color-card-border)',
                }}
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .social-link-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
