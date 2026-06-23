import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import profileImg from '../../assets/imagen-elias.jpg';

const About = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ width: '100%', paddingTop: '6rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Text content */}
          <div style={{ order: 1 }}>
            <p
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              {t('hero.greeting')}
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Elias Arroyo
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                fontWeight: 600,
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              {t('hero.role')}
            </h2>

            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '1rem',
                maxWidth: '520px',
              }}
            >
              {t('about.p1')}
            </p>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              {t('about.p2')}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <button className="btn-primary" onClick={scrollToContact}>
                <FiMail />
                {t('hero.cta_contact')}
              </button>
              <a
                href="https://drive.google.com/file/d/1yOZpvBBT-wjxs4CZUnUizNXR1t29hvqy/view"
                download
                className="btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <FaDownload style={{ fontSize: '0.85rem' }} />
                {t('hero.cta_cv')}
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://github.com/Elias587-ux"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.5rem',
                  color: 'var(--color-text-secondary)',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-card-border)',
                  fontSize: '1.25rem',
                  transition: 'color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
                aria-label="GitHub"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--color-card-border)';
                }}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/elias-eduardo-arroyo-090717392/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.5rem',
                  color: 'var(--color-text-secondary)',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-card-border)',
                  fontSize: '1.25rem',
                  transition: 'color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
                aria-label="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--color-card-border)';
                }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              order: 2,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(220px, 35vw, 320px)',
                height: 'clamp(220px, 35vw, 320px)',
              }}
            >
              {/* Glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, var(--color-accent), transparent, var(--color-accent-light), transparent, var(--color-accent))',
                  animation: 'spin 8s linear infinite',
                }}
              />
              <img
                src={profileImg}
                alt="Elias Arroyo — Full Stack Developer"
                style={{
                  position: 'absolute',
                  inset: '4px',
                  width: 'calc(100% - 8px)',
                  height: 'calc(100% - 8px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--color-bg)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '3rem',
            gap: '0.4rem',
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: '1px',
              height: '3rem',
              background: 'linear-gradient(to bottom, transparent, var(--color-accent))',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;
