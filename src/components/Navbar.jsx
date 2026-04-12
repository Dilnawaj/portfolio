import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects'];

  return (
    <nav className={`navbar-custom${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a className="navbar-brand-custom" href="#home"
            onClick={e => { e.preventDefault(); go('home'); }}>
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">Dilnawaj Khan</span>
            <span className="brand-bracket">&nbsp;/&gt;</span>
          </a>
          <div className="d-none d-md-flex align-items-center gap-1">
            {links.map(l => (
              <a key={l} className="nav-link-custom" href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); go(l); }}>
                {l}
              </a>
            ))}
            <a href="/Dilnawaj_Resume.pdf" download className="btn-resume ms-2">
              Resume ↓
            </a>
          </div>
          <button className="d-md-none"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', padding: '0.4rem 0.75rem', cursor: 'pointer', fontSize: '1rem' }}
            onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <div className="d-md-none py-3" style={{ borderTop: '1px solid var(--border)', marginTop: '0.8rem' }}>
            {links.map(l => (
              <a key={l} className="nav-link-custom d-block mb-2" href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); go(l); }}>{l}</a>
            ))}
            <a href="/Dilnawaj_Resume.pdf" download className="btn-resume d-inline-block mt-2">
              Resume ↓
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
