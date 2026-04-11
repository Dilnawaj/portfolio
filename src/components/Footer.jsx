import React from 'react';

const Footer = () => (
  <footer className="footer-new">
    <div className="container">
      <div className="footer-logo">
        <span className="fl-bracket">&lt;</span>
        <span className="fl-name">Dilnawaj Khan</span>
        <span className="fl-bracket"> /&gt;</span>
      </div>
      <div className="d-flex justify-content-center gap-3 mb-3">
        {[
          { label: 'GitHub', href: 'https://github.com/Dilnawaj' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/dilnawaj-khan-2432ab16b' },
          { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/17080073/dilnawaj-khan' },
          { label: 'Email', href: 'mailto:dilnawaj4044@gmail.com' },
        ].map(s => (
          <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
            style={{ color: 'var(--muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
            {s.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">
        Designed & Built with ❤️ by <span>Dilnawaj Khan</span> · {new Date().getFullYear()}
      </p>
      <p className="footer-copy mt-1" style={{ fontSize: '0.72rem' }}>
        Built with <span>React.js</span> & <span>Bootstrap</span> · Deployed on <span>Vercel</span>
      </p>
      <a href="#home" className="back-top"
        onClick={e => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>
        ↑ Back to Top
      </a>
    </div>
  </footer>
);

export default Footer;
