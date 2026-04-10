import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-underline"></div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto', fontSize: '0.95rem' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h5 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Information</h5>
              {[
                { icon: '📧', label: 'Email', value: 'abhisheka@example.com' },
                { icon: '📱', label: 'Phone', value: '+91 98765 43210' },
                { icon: '📍', label: 'Location', value: 'India' },
                { icon: '🌐', label: 'Website', value: 'abhishekaraman.dev' },
              ].map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-icon-box">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>Connect with me:</p>
                <div className="social-links">
                  {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                    <a key={s} href="#" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginRight: '1rem', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-card">
              <h5 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h5>
              {sent && (
                <div style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid var(--accent)', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '0.9rem', textAlign: 'center' }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label-custom">Your Name</label>
                    <input className="form-control-custom" placeholder="Abhisheka Raman" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label-custom">Email Address</label>
                    <input type="email" className="form-control-custom" placeholder="you@example.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Subject</label>
                    <input className="form-control-custom" placeholder="Project Collaboration" value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Message</label>
                    <textarea className="form-control-custom" rows={5} placeholder="Tell me about your project..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })} required style={{ resize: 'none' }} />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-primary-custom" style={{ width: '100%', border: 'none' }}>
                      Send Message ✉️
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
