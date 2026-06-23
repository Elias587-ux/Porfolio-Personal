import { useTranslation } from 'react-i18next';
import { SkillsInfo } from '../../constants';

const Skill = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <p className="section-subtitle" style={{ marginBottom: '0.25rem' }}>
          {t('skills.subtitle')}
        </p>
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="accent-line" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '2.5rem',
          }}
        >
          {SkillsInfo.map((category) => (
            <div key={category.title} className="card" style={{ padding: '1.5rem' }}>
              <h3
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  marginBottom: '1.25rem',
                }}
              >
                {category.title}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '0.5rem',
                      cursor: 'default',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(99,102,241,0.08)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{ width: '2.25rem', height: '2.25rem', objectFit: 'contain' }}
                    />
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: 'var(--color-text-secondary)',
                        textAlign: 'center',
                        lineHeight: 1.2,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
