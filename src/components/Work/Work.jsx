import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { workImageMap } from '../../constants';
import projectsData from '../../data/projects.json';

const Work = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <p className="section-subtitle" style={{ marginBottom: '0.25rem' }}>
          {t('projects.subtitle')}
        </p>
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="accent-line" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem',
          }}
        >
          {projectsData.map((project) => {
            const img = workImageMap[project.imageKey];
            return (
              <div
                key={project.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
              >
                {/* Image / placeholder */}
                <div
                  style={{
                    height: '180px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={isEn ? project.titleEn : project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  ) : (
                    <div
                      style={{
                        fontSize: '3rem',
                        opacity: 0.3,
                        color: 'var(--color-accent)',
                      }}
                    >
                      {'</>'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {isEn ? project.titleEn : project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                      flex: 1,
                    }}
                  >
                    {isEn ? project.descriptionEn : project.description}
                  </p>

                  {/* Tech badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          background: 'rgba(99,102,241,0.08)',
                          border: '1px solid var(--color-card-border)',
                          textDecoration: 'none',
                          transition: 'background 0.2s, border-color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(99,102,241,0.15)';
                          e.currentTarget.style.borderColor = 'var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                          e.currentTarget.style.borderColor = 'var(--color-card-border)';
                        }}
                      >
                        <FaGithub />
                        {t('projects.view_code')}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ flex: 1, justifyContent: 'center', textDecoration: 'none', fontSize: '0.8rem' }}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                        {t('projects.view_demo')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
