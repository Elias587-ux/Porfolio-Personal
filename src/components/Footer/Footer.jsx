import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const NAV_KEYS = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--color-card-border)',
        background: 'var(--color-card)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--color-accent)',
              marginBottom: '0.25rem',
            }}
          >
            Elias<span style={{ color: 'var(--color-text-primary)' }}>.dev</span>
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            Full Stack Developer
          </p>
        </div>

        {/* Quick links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem' }}>
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.8rem',
                color: 'var(--color-text-secondary)',
                padding: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </nav>

        {/* Social */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="https://github.com/Elias587-ux"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.25rem',
              transition: 'color 0.2s',
            }}
            aria-label="GitHub"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/elias-eduardo-arroyo-090717392/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.25rem',
              transition: 'color 0.2s',
            }}
            aria-label="LinkedIn"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid var(--color-card-border)',
          padding: '1rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: 'var(--color-text-secondary)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.35rem',
          flexWrap: 'wrap',
        }}
      >
        <span>© {year} Elias Arroyo.</span>
        <span>{t('footer.rights')}.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          {t('footer.made_with')}
          <FaHeart style={{ color: '#EF4444', fontSize: '0.7rem' }} />
          React
        </span>
      </div>
    </footer>
  );
};

export default Footer;
