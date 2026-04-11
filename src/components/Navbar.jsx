import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home','About','Skills','Experience','Projects','Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-custom" style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a className="navbar-brand-custom" href="#home" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">DK</span>
            <span className="brand-bracket"> /&gt;</span>
          </a>
          <div className="d-none d-md-flex align-items-center gap-1">
            {links.map(l => (
              <a key={l} className="nav-link-custom" href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(l); }}>
                {l}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/YOUR_RESUME_ID" target="_blank" rel="noreferrer"
              className="btn-glow ms-2" style={{ fontSize: '0.78rem', padding: '0.45rem 1.1rem' }}>
              Resume
            </a>
          </div>
          <button className="d-md-none"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', padding: '0.4rem 0.7rem', cursor: 'pointer', fontSize: '1.1rem' }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="d-md-none py-3" style={{ borderTop: '1px solid var(--border)', marginTop: '0.8rem' }}>
            {links.map(l => (
              <a key={l} className="nav-link-custom d-block mb-2" href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(l); }}>
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
