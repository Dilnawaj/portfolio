import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="f-logo">
        Dilnawaj <span>Khan</span>
      </div>
      <div className="f-links">
        {[
          { l:'GitHub', h:'https://github.com/Dilnawaj' },
          { l:'LinkedIn', h:'https://linkedin.com/in/dilnawaj-khan-2432ab16b' },
          { l:'Stack Overflow', h:'https://stackoverflow.com/users/17080073/dilnawaj-khan' },
          { l:'Email', h:'mailto:dilnawaj4044@gmail.com' },
          { l:'Resume', h:'/Dilnawaj_Resume.pdf', d:true },
        ].map(s => (
          <a key={s.l} href={s.h}
            target={s.h.startsWith('http') ? '_blank' : '_self'}
            rel={s.h.startsWith('http') ? 'noreferrer' : undefined}
            download={s.d || undefined}
            className="f-link">{s.l}</a>
        ))}
      </div>
      <p className="f-copy">
        Designed &amp; Built with ❤️ by <span>Mohammad Dilnawaj </span> · {new Date().getFullYear()}
      </p>
      <p className="f-copy" style={{ fontSize:'0.72rem', marginTop:'0.3rem' }}>
        Built with <span>React.js</span> &amp; <span>Bootstrap</span> · Deployed on <span>Vercel</span>
      </p>
      <a href="#home" className="back-top-btn"
        onClick={e => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior:'smooth' }); }}>
        ↑ Back to Top
      </a>
    </div>
  </footer>
);
export default Footer;
