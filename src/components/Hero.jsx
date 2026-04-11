import React, { useEffect, useState } from 'react';

const TITLES = [
  'Full Stack Developer',
  'Spring Boot Expert',
  'React.js Developer',
  'Microservices Architect',
  'Backend Engineer',
];

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  dur: Math.random() * 10 + 14,
  color: ['var(--accent)', 'var(--accent2)', 'var(--accent3)'][i % 3],
}));

const Hero = () => {
  const [ti, setTi] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  // typewriter
  useEffect(() => {
    const full = TITLES[ti];
    const t = !del && text.length < full.length
      ? setTimeout(() => setText(full.slice(0, text.length + 1)), 80)
      : !del && text.length === full.length
      ? setTimeout(() => setDel(true), 1800)
      : del && text.length > 0
      ? setTimeout(() => setText(text.slice(0, -1)), 45)
      : (() => { setDel(false); setTi(i => (i + 1) % TITLES.length); return null; })();
    return () => clearTimeout(t);
  }, [text, del, ti]);

  // cursor glow
  useEffect(() => {
    const el = document.getElementById('cursor-glow');
    const fn = e => { if (el) { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; } };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div id="cursor-glow"></div>
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-particles">
        {PARTICLES.map(p => (
          <div key={p.id} className="pt" style={{
            width: p.size, height: p.size, left: `${p.left}%`,
            background: p.color, borderRadius: '50%',
            animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
          }} />
        ))}
      </div>

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="hero-eyebrow">
              <div className="eyebrow-dot"></div>
              Available for opportunities
            </div>

            <h1 className="hero-name-block">
              <span className="hn-first">Dilnawaj</span>
              <span className="hn-last">Khan</span>
            </h1>

            <div className="hero-typewriter">
              <span className="tw-prefix">$</span>
              <span className="tw-text">{text}</span>
              <span className="tw-cursor">|</span>
            </div>

            <p className="hero-bio">
              <strong>Software Engineer</strong> with <span className="hl">4+ years</span> of experience
              building scalable, secure, high-performance web applications. Expert in{' '}
              <span className="hl">Java Spring Boot</span> microservices &amp;{' '}
              <span className="hl">React.js</span> frontends. Currently at{' '}
              <strong>Wits Innovation Lab</strong>.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="cta-primary"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/Dilnawaj_Resume.pdf" download className="cta-secondary">
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="sp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/dilnawaj-khan-2432ab16b" target="_blank" rel="noreferrer" className="sp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://stackoverflow.com/users/17080073/dilnawaj-khan" target="_blank" rel="noreferrer" className="sp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.388 2.371.451-2.091-11.388-2.371-.451 2.091zm1.359-5.056l10.56 4.939.894-1.902-10.56-4.939-.894 1.902zm2.751-4.785l8.65 7.314 1.387-1.644-8.65-7.314-1.387 1.644zM15.495 0l-1.839 1.389 6.674 8.845 1.839-1.389L15.495 0z"/></svg>
                Stack Overflow
              </a>
              <a href="mailto:dilnawaj4044@gmail.com" className="sp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email
              </a>
            </div>
          </div>

          {/* RIGHT — Avatar */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-visual">
              <div className="av-wrap">
                <div className="av-ring-1"><div className="av-ring-1-inner"></div></div>
                <div className="av-ring-2"></div>
                <div className="av-ring-3"></div>
                <div className="av-core">👨‍💻</div>
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
              </div>
              <div className="fc fc1">
                <div className="fc-v">4+</div>
                <div className="fc-l">YEARS EXP</div>
              </div>
              <div className="fc fc2">
                <div className="fc-v">3</div>
                <div className="fc-l">LIVE PROJECTS</div>
              </div>
              <div className="fc fc3">
                <div className="fc-v">5★</div>
                <div className="fc-l">HACKERRANK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
