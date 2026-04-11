import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const refs = useRef([]);
  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contacts = [
    { icon: '📧', label: 'EMAIL', val: 'dilnawaj4044@gmail.com', href: 'mailto:dilnawaj4044@gmail.com' },
    { icon: '📱', label: 'PHONE', val: '+91 8837672536', href: 'tel:+918837672536' },
    { icon: '📍', label: 'LOCATION', val: 'Ropar, Punjab, India', href: null },
    { icon: '💼', label: 'LINKEDIN', val: 'in/dilnawaj-khan-2432ab16b', href: 'https://linkedin.com/in/dilnawaj-khan-2432ab16b' },
    { icon: '🐱', label: 'GITHUB', val: 'github.com/Dilnawaj', href: 'https://github.com/Dilnawaj' },
    { icon: '📚', label: 'STACK OVERFLOW', val: 'dilnawaj-khan', href: 'https://stackoverflow.com/users/17080073/dilnawaj-khan' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-2 reveal" ref={addRef}>
          <div className="section-label">contact</div>
          <h2 className="section-title-new">Get In <span>Touch</span></h2>
        </div>
        <div className="section-line"></div>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-7 text-center reveal" ref={addRef}>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Open to new opportunities, freelance projects, and collaborations. 
              Whether it's a quick question or a long-term project — my inbox is always open!
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-5 reveal-left" ref={addRef}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="section-head-chip">Contact Info</div>
            </div>
            {contacts.map(c => (
              <div key={c.label} className="contact-orb">
                <div className="contact-orb-icon">{c.icon}</div>
                <div>
                  <div className="contact-orb-label">{c.label}</div>
                  <div className="contact-orb-val">
                    {c.href ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">{c.val}</a> : c.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-7 reveal-right" ref={addRef}>
            <div className="glass-card">
              <div style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.78rem', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                sendMessage()
              </div>
              {sent && (
                <div style={{ background: 'rgba(0,245,212,0.08)', border: '1px solid var(--accent)', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '0.88rem', textAlign: 'center' }}>
                  ✅ Message sent! I will get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label">YOUR_NAME</label>
                    <input className="form-field" placeholder="John Doe" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label">EMAIL_ADDRESS</label>
                    <input type="email" className="form-field" placeholder="you@example.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">SUBJECT</label>
                    <input className="form-field" placeholder="Project Collaboration" value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">MESSAGE</label>
                    <textarea className="form-field" rows={5} placeholder="Tell me about your project or opportunity..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ resize: 'none' }} />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-glow" style={{ width: '100%', border: 'none', fontFamily: 'Syne,sans-serif' }}>
                      Send Message →
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
