import React, { useEffect, useRef, useState } from 'react';

const TITLES = [
  'Full Stack Developer',
  'Spring Boot Expert',
  'React JS Developer',
  'Microservices Architect',
  'Backend Engineer',
];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const cursorRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const full = TITLES[titleIdx];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  // Cursor glow follow mouse
  useEffect(() => {
    const el = cursorRef.current;
    const move = (e) => {
      if (el) { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 12,
    color: ['var(--accent)', 'var(--accent2)', 'var(--accent3)'][i % 3],
  }));

  return (
    <>
      <div className="cursor-glow" ref={cursorRef}></div>
      <section id="home" className="hero-section">
        <div className="hero-grid"></div>
        <div className="hero-glow-orb orb1"></div>
        <div className="hero-glow-orb orb2"></div>
        <div className="hero-glow-orb orb3"></div>
        <div className="hero-particles">
          {particles.map(p => (
            <div key={p.id} className="particle" style={{
              width: p.size, height: p.size,
              left: `${p.left}%`, background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }} />
          ))}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-greeting">👋 &nbsp;Hello, World! I am</div>
              <h1 className="hero-name">
                <span className="name-line1">Dilnawaj</span>
                <span className="name-line2">Khan</span>
              </h1>
              <div className="hero-title">
                <span style={{ color: 'var(--accent2)' }}>$ </span>
                {displayed}
                <span className="typed-cursor">|</span>
              </div>
              <p className="hero-desc">
                <strong>Software Engineer</strong> with <strong>4+ years</strong> of experience building scalable, 
                secure, high-performance web applications. Specializing in <strong>Java Spring Boot</strong> microservices 
                and <strong>React.js</strong> frontends. Currently at <strong>Wits Innovation Lab</strong>.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn-glow"
                  onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
                  View My Work →
                </a>
                <a href="#contact" className="btn-ghost"
                  onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
                  Hire Me
                </a>
              </div>
              <div className="hero-socials">
                <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="social-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/dilnawaj-khan-2432ab16b" target="_blank" rel="noreferrer" className="social-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://stackoverflow.com/users/17080073/dilnawaj-khan" target="_blank" rel="noreferrer" className="social-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.388 2.371.451-2.091-11.388-2.371-.451 2.091zm1.359-5.056l10.56 4.939.894-1.902-10.56-4.939-.894 1.902zm2.751-4.785l8.65 7.314 1.387-1.644-8.65-7.314-1.387 1.644zM15.495 0l-1.839 1.389 6.674 8.845 1.839-1.389L15.495 0z"/></svg>
                  Stack Overflow
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero-visual">
                <div className="avatar-container">
                  <div className="avatar-ring-outer"></div>
                  <div className="avatar-ring-inner"></div>
                  <div className="avatar-core">👨‍💻</div>
                </div>
                <div className="float-card fc1">
                  <div className="fc-val">4+</div>
                  <div className="fc-label">Years Exp.</div>
                </div>
                <div className="float-card fc2">
                  <div className="fc-val">3</div>
                  <div className="fc-label">Live Projects</div>
                </div>
                <div className="float-card fc3">
                  <div className="fc-val">5★</div>
                  <div className="fc-label">HackerRank DSA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
