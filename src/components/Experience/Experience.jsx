import { useTranslation } from 'react-i18next';
import { experiences } from '../../constants';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <p className="section-subtitle" style={{ marginBottom: '0.25rem' }}>
          {t('experience.subtitle')}
        </p>
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="accent-line" />

        <div style={{ maxWidth: '700px', margin: '2.5rem auto 0' }}>
          {experiences.map((exp) => (
            <div key={exp.id} className="card" style={{ padding: '1.75rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                {/* Company logo */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '0.625rem',
                    overflow: 'hidden',
                    border: '1px solid var(--color-card-border)',
                    background: 'var(--color-bg)',
                  }}
                >
                  <img
                    src={exp.img}
                    alt={exp.company}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'var(--color-text-primary)',
                          marginBottom: '0.1rem',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'var(--color-accent)',
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-secondary)',
                        whiteSpace: 'nowrap',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.2)',
                      }}
                    >
                      {isEn ? exp.dateEn : exp.date}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                    }}
                  >
                    {isEn ? exp.descEn : exp.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tech-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
