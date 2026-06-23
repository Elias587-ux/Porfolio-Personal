import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const INITIAL = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.required');
    if (!form.email.trim()) {
      errs.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t('contact.invalid_email');
    }
    if (!form.subject.trim()) errs.subject = t('contact.required');
    if (!form.message.trim()) errs.message = t('contact.required');
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${errors[field] ? '#EF4444' : 'var(--color-card-border)'}`,
    background: 'var(--color-card)',
    color: 'var(--color-text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--color-text-secondary)',
    marginBottom: '0.4rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <p className="section-subtitle" style={{ marginBottom: '0.25rem' }}>
          {t('contact.subtitle')}
        </p>
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="accent-line" />

        <div style={{ maxWidth: '600px', margin: '2.5rem auto 0' }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card"
            style={{ padding: '2rem' }}
          >
            {/* Name + Email row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div>
                <label htmlFor="name" style={labelStyle}>{t('contact.name_label')}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.name_placeholder')}
                  style={inputStyle('name')}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? '#EF4444'
                      : 'var(--color-card-border)')
                  }
                />
                {errors.name && (
                  <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>{t('contact.email_label')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.email_placeholder')}
                  style={inputStyle('email')}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.email
                      ? '#EF4444'
                      : 'var(--color-card-border)')
                  }
                />
                {errors.email && (
                  <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="subject" style={labelStyle}>{t('contact.subject_label')}</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder={t('contact.subject_placeholder')}
                style={inputStyle('subject')}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.subject
                    ? '#EF4444'
                    : 'var(--color-card-border)')
                }
              />
              {errors.subject && (
                <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={labelStyle}>{t('contact.message_label')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.message_placeholder')}
                style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.message
                    ? '#EF4444'
                    : 'var(--color-card-border)')
                }
              />
              {errors.message && (
                <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  color: '#16a34a',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                }}
              >
                <FiCheckCircle />
                {t('contact.success')}
              </div>
            )}
            {status === 'error' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                }}
              >
                <FiAlertCircle />
                {t('contact.error')}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                opacity: status === 'loading' ? 0.7 : 1,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              <FiSend />
              {status === 'loading' ? t('contact.sending') : t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
