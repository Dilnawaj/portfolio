import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className="navbar-custom" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a className="navbar-brand-custom" href="#home" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
            &lt;<span>AR</span>/&gt;
          </a>
          {/* Desktop */}
          <div className="d-none d-md-flex gap-1">
            {links.map(l => (
              <a key={l} className="nav-link-custom" href={`#${l.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(l); }}>
                {l}
              </a>
            ))}
          </div>
          {/* Mobile toggle */}
          <button
            className="d-md-none"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', padding: '0.4rem 0.7rem', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >☰</button>
        </div>
        {menuOpen && (
          <div className="d-md-none py-3" style={{ borderTop: '1px solid var(--border)', marginTop: '0.5rem' }}>
            {links.map(l => (
              <a key={l} className="nav-link-custom d-block mb-1" href={`#${l.toLowerCase()}`}
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
