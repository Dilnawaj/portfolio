import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_uagteks';
const TEMPLATE_ID = 'template_ls5ma4k';
const PUBLIC_KEY  = 'E8yM1QlTjXA4Y2ySc';

const Contact = () => {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const refs = useRef([]);
  const add  = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const ch = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          name:       form.name,
          email:      form.email,
          subject:    form.subject,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contacts = [
    { i:'📧', l:'EMAIL',         v:'dilnawaj4044@gmail.com',          href:'mailto:dilnawaj4044@gmail.com' },
    { i:'📱', l:'PHONE',         v:'+91 8837672536',                   href:'tel:+918837672536' },
    { i:'📍', l:'LOCATION',      v:'Ropar, Punjab, India',             href:null },
    { i:'💼', l:'LINKEDIN',      v:'in/dilnawaj-khan-2432ab16b',       href:'https://linkedin.com/in/dilnawaj-khan-2432ab16b' },
    { i:'🐙', l:'GITHUB',        v:'github.com/Dilnawaj',              href:'https://github.com/Dilnawaj' },
    { i:'📚', l:'STACK OVERFLOW',v:'dilnawaj-khan',                    href:'https://stackoverflow.com/users/17080073/dilnawaj-khan' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-2 rev" ref={add}>
          <span className="sec-label">contact</span>
          <h2 className="sec-title">Get In <span>Touch</span></h2>
        </div>
        <div className="sec-rule"></div>
        <div className="text-center mb-5 rev" ref={add}>
          <p style={{ color:'var(--muted)', fontSize:'0.95rem', maxWidth:480, margin:'0 auto', lineHeight:1.8 }}>
            Open to new opportunities, freelance projects &amp; collaborations. My inbox is always open!
          </p>
        </div>

        <div className="row g-4">
          {/* ── LEFT: contact info ── */}
          <div className="col-lg-5 rev-l" ref={add}>
            <div className="head-chip" style={{ marginBottom:'1.2rem' }}>Contact Info</div>
            {contacts.map(c =>
              c.href ? (
                <a key={c.l} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer" className="co-item">
                  <div className="co-icon">{c.i}</div>
                  <div>
                    <div className="co-lbl">{c.l}</div>
                    <div className="co-val">{c.v}</div>
                  </div>
                </a>
              ) : (
                <div key={c.l} className="co-item">
                  <div className="co-icon">{c.i}</div>
                  <div>
                    <div className="co-lbl">{c.l}</div>
                    <div className="co-val">{c.v}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* ── RIGHT: form ── */}
          <div className="col-lg-7 rev-r" ref={add}>
            <div className="gc">
              <p style={{ fontFamily:'Fira Code,monospace', fontSize:'0.72rem', color:'var(--accent)', letterSpacing:'0.18em', marginBottom:'1.5rem' }}>
                sendMessage()
              </p>

              {/* SUCCESS */}
              {status === 'success' && (
                <div className="success-toast">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* ERROR */}
              {status === 'error' && (
                <div style={{ background:'rgba(247,37,133,0.08)', border:'1px solid rgba(247,37,133,0.3)', borderRadius:'12px', padding:'1rem', marginBottom:'1.5rem', color:'var(--accent3)', fontSize:'0.86rem', textAlign:'center' }}>
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <form onSubmit={submit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="fl">YOUR_NAME</label>
                    <input className="ff" placeholder="John Doe"
                      value={form.name} onChange={ch('name')} required />
                  </div>
                  <div className="col-sm-6">
                    <label className="fl">EMAIL_ADDRESS</label>
                    <input type="email" className="ff" placeholder="you@example.com"
                      value={form.email} onChange={ch('email')} required />
                  </div>
                  <div className="col-12">
                    <label className="fl">SUBJECT</label>
                    <input className="ff" placeholder="Project / Opportunity / Collaboration"
                      value={form.subject} onChange={ch('subject')} required />
                  </div>
                  <div className="col-12">
                    <label className="fl">MESSAGE</label>
                    <textarea className="ff" rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message} onChange={ch('message')}
                      required style={{ resize:'none' }} />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="cta-primary"
                      style={{ width:'100%', border:'none', justifyContent:'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                      {status === 'sending' ? (
                        <>
                          <span style={{ display:'inline-block', width:14, height:14, border:'2px solid #05050f', borderTopColor:'transparent', borderRadius:'50%', animation:'spin 0.7s linear infinite' }}></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
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
