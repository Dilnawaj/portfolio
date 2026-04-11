import React, { useEffect, useRef } from 'react';

const About = () => {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  const stats = [
    { num: '4+', label: 'Years Experience' },
    { num: '3', label: 'Live Projects' },
    { num: '4', label: 'Companies' },
    { num: '5★', label: 'HackerRank DSA' },
  ];

  const infos = [
    { key: 'Name', val: 'Dilnawaj Khan' },
    { key: 'Role', val: 'Software Engineer' },
    { key: 'Email', val: <a href="mailto:dilnawaj4044@gmail.com">dilnawaj4044@gmail.com</a> },
    { key: 'Phone', val: '+91 8837672536' },
    { key: 'Location', val: 'Ropar, Punjab, India' },
    { key: 'Current', val: 'Wits Innovation Lab' },
    { key: 'GitHub', val: <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer">github.com/Dilnawaj</a> },
    { key: 'LinkedIn', val: <a href="https://linkedin.com/in/dilnawaj-khan-2432ab16b" target="_blank" rel="noreferrer">in/dilnawaj-khan</a> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-2" ref={addRef} style={{ opacity: 0, transform: 'translateY(25px)', transition: 'all 0.7s' }}>
          <div className="section-label">about_me</div>
          <h2 className="section-title-new">Who I <span>Am</span></h2>
        </div>
        <div className="section-line"></div>
        <div className="row g-4 mb-4">
          <div className="col-lg-7 reveal" ref={addRef}>
            <div className="glass-card h-100">
              <h5 style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.82rem', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>
                $ cat about.txt
              </h5>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
                I'm a passionate <strong style={{ color: 'var(--text)' }}>Full Stack Developer</strong> with 4+ years of experience 
                building scalable, secure, high-performance web applications. I specialize in backend development using 
                <strong style={{ color: 'var(--accent)' }}> Java Spring Boot</strong> in both microservices and monolithic architectures, 
                combined with <strong style={{ color: 'var(--accent)' }}>React.js</strong> frontends.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
                I have a proven track record of optimizing system performance and integrating complex systems. 
                Strong problem-solving skills with good understanding of data structures and adherence to 
                <strong style={{ color: 'var(--accent2)' }}> SOLID, KISS, and DRY</strong> principles.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Currently at <strong style={{ color: 'var(--text)' }}>Wits Innovation Lab</strong>, building scalable Banking Applications 
                with Spring Boot, React.js & Redux Toolkit. Previously a Technical Consultant (Full Stack) at 
                <strong style={{ color: 'var(--accent2)' }}> EY (Ernst & Young)</strong>, and also worked at 
                NextGenVision Technology and RChilli.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://drive.google.com/file/d/YOUR_RESUME_ID" target="_blank" rel="noreferrer" className="btn-glow" style={{ fontSize: '0.82rem', padding: '0.65rem 1.5rem' }}>
                  Download Resume ↓
                </a>
                <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: '0.82rem', padding: '0.65rem 1.5rem' }}>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 reveal-right" ref={addRef}>
            <div className="glass-card h-100">
              <h5 style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.82rem', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                $ whoami
              </h5>
              {infos.map(i => (
                <div key={i.key} className="info-row">
                  <div className="info-dot"></div>
                  <span className="info-key">{i.key}</span>
                  <span className="info-val">{i.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-3">
          {stats.map((s, i) => (
            <div key={s.label} className="col-6 col-md-3 reveal" ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
