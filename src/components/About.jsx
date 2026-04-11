import React, { useEffect, useRef } from 'react';

const useReveal = () => {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }), { threshold: 0.12 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);
  return el => { if (el && !refs.current.includes(el)) refs.current.push(el); };
};

const About = () => {
  const add = useReveal();
  const stats = [
    { n: '4+', l: 'Years Experience' }, { n: '3', l: 'Live Projects' },
    { n: '4', l: 'Companies' }, { n: '5★', l: 'HackerRank DSA' },
  ];
  const info = [
    { k: 'Name', v: 'Mohammad Dilnawaj' },
    { k: 'Role', v: 'Software Engineer' },
    { k: 'Email', v: <a href="mailto:dilnawaj4044@gmail.com">dilnawaj4044@gmail.com</a> },
    { k: 'Phone', v: '+91 8837672536' },
    { k: 'Location', v: 'Ropar, Punjab, India' },
    { k: 'Current', v: 'Wits Innovation Lab' },
    { k: 'GitHub', v: <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer">github.com/Dilnawaj</a> },
    { k: 'LinkedIn', v: <a href="https://linkedin.com/in/dilnawaj-khan-2432ab16b" target="_blank" rel="noreferrer">in/dilnawaj-khan</a> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-2 rev" ref={add}>
          <span className="sec-label">about me</span>
          <h2 className="sec-title">Who I <span>Am</span></h2>
        </div>
        <div className="sec-rule"></div>
        <div className="row g-4 mb-4">
          <div className="col-lg-7 rev-l" ref={add}>
            <div className="gc h-100">
              <p style={{ fontFamily: 'Fira Code,monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>$ cat dilnawaj.txt</p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.95, fontSize: '0.94rem', marginBottom: '1rem' }}>
                I'm a passionate <strong style={{ color: 'var(--text)' }}>Full Stack Developer</strong> with 4+ years of hands-on experience
                building <strong style={{ color: 'var(--text)' }}>scalable, secure, high-performance</strong> web applications.
                I specialize in <strong style={{ color: 'var(--accent)' }}>Java Spring Boot</strong> microservices architecture
                combined with <strong style={{ color: 'var(--accent)' }}>React.js</strong> frontends.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.95, fontSize: '0.94rem', marginBottom: '1rem' }}>
                Strong problem-solving skills with good understanding of data structures and a strict adherence to
                <strong style={{ color: 'var(--accent2)' }}> SOLID, KISS, and DRY</strong> principles.
                Experience with complex system integrations, Kafka-based event-driven architectures, and AWS cloud deployments.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.95, fontSize: '0.94rem', marginBottom: '2rem' }}>
                Currently at <strong style={{ color: 'var(--text)' }}>Wits Innovation Lab</strong>, previously a Technical Consultant
                at <strong style={{ color: 'var(--accent2)' }}>EY (Ernst &amp; Young)</strong>. Also worked at NextGenVision Technology
                and RChilli.
              </p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <a href="/Dilnawaj_Resume.pdf" download className="cta-primary" style={{ fontSize: '0.82rem', padding: '0.65rem 1.4rem' }}>
                  Download Resume ↓
                </a>
                <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="cta-secondary" style={{ fontSize: '0.82rem', padding: '0.65rem 1.4rem' }}>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 rev-r" ref={add}>
            <div className="gc h-100">
              <p style={{ fontFamily: 'Fira Code,monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.4rem' }}>$ whoami --verbose</p>
              {info.map(i => (
                <div key={i.k} className="info-item">
                  <div className="info-bullet"></div>
                  <span className="info-k">{i.k}</span>
                  <span className="info-v">{i.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-3">
          {stats.map((s, i) => (
            <div key={s.l} className="col-6 col-md-3 rev" ref={add} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-card">
                <div className="sn">{s.n}</div>
                <div className="sl">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
