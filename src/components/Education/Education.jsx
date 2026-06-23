import { useTranslation } from 'react-i18next';
import { education } from '../../constants';

const Education = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section id="education" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <p className="section-subtitle" style={{ marginBottom: '0.25rem' }}>
          {t('education.subtitle')}
        </p>
        <h2 className="section-title">{t('education.title')}</h2>
        <div className="accent-line" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginTop: '2.5rem',
          }}
        >
          {education.map((edu) => (
            <div key={edu.id} className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    border: '1px solid var(--color-card-border)',
                  }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.2rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.school}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      fontWeight: 500,
                    }}
                  >
                    {isEn ? edu.dateEn : edu.date}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                {isEn ? edu.descEn : edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
