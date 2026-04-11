import React, { useEffect, useRef, useState } from 'react';

const groups = {
  Backend: [
    { n: 'Java / Spring Boot', p: 92 }, { n: 'Spring Cloud / Microservices', p: 88 },
    { n: 'Hibernate / JPA', p: 85 }, { n: 'JWT / Spring Security', p: 87 },
    { n: 'Kafka / RabbitMQ', p: 80 }, { n: 'REST APIs / GraphQL', p: 88 },
  ],
  Frontend: [
    { n: 'React.js', p: 88 }, { n: 'Redux Toolkit (RTK)', p: 85 },
    { n: 'JavaScript / TypeScript', p: 82 }, { n: 'HTML5 / CSS3 / Bootstrap', p: 90 },
    { n: 'JSP / Spring MVC', p: 78 },
  ],
  DevOps: [
    { n: 'Docker / Kubernetes', p: 78 }, { n: 'AWS (Beanstalk, RDS, Pipeline)', p: 75 },
    { n: 'CI/CD / Jenkins', p: 76 }, { n: 'Git / GitHub / BitBucket', p: 90 },
    { n: 'SonarQube', p: 72 },
  ],
  Database: [
    { n: 'MySQL / PostgreSQL', p: 88 }, { n: 'MongoDB', p: 75 },
    { n: 'Redis (Caching)', p: 80 }, { n: 'AWS RDS', p: 72 },
  ],
};

const ALL_CHIPS = ['Java','Spring Boot','Spring Cloud','Kafka','Eureka','Hibernate','JPA','JWT','React.js','Redux Toolkit','JavaScript','TypeScript','Bootstrap','JSP','MySQL','PostgreSQL','MongoDB','Redis','Docker','Kubernetes','AWS','CI/CD','Jenkins','SonarQube','Git','GraphQL','Vercel','Figma','Postman','Linux'];

const Skills = () => {
  const [tab, setTab] = useState('Backend');
  const [anim, setAnim] = useState(false);
  const secRef = useRef(null);
  const refs = useRef([]);
  const add = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); setAnim(true); }
    }), { threshold: 0.1 });
    if (secRef.current) obs.observe(secRef.current);
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={secRef}>
      <div className="container">
        <div className="text-center mb-2 rev" ref={add}>
          <span className="sec-label">skills &amp; tools</span>
          <h2 className="sec-title">Tech <span>Stack</span></h2>
        </div>
        <div className="sec-rule"></div>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 rev" ref={add}>
          {Object.keys(groups).map(k => (
            <button key={k} className={`tab-btn${tab === k ? ' on' : ''}`} onClick={() => setTab(k)}>{k}</button>
          ))}
        </div>
        <div className="row g-4 mb-5">
          <div className="col-lg-7 rev-l" ref={add}>
            <div className="gc h-100">
              <p style={{ fontFamily: 'Fira Code,monospace', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: '1.8rem' }}>
                {tab.toLowerCase()}.skills
              </p>
              {groups[tab].map((s, i) => (
                <div key={s.n} className="skill-bar" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="sk-top"><span className="sk-name">{s.n}</span><span className="sk-pct">{s.p}%</span></div>
                  <div className="sk-track">
                    <div className="sk-fill" style={{ width: anim ? `${s.p}%` : '0%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 rev-r" ref={add}>
            <div className="gc h-100">
              <p style={{ fontFamily: 'Fira Code,monospace', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: '1.5rem' }}>
                achievements.json
              </p>
              {[
                { i: '⭐', t: '5 Stars in DSA', s: 'HackerRank' },
                { i: '☕', t: '3 Stars in Java', s: 'HackerRank' },
                { i: '🏆', t: 'Blind Coding Winner', s: 'College Level' },
                { i: '🎓', t: 'B.Tech — Information Technology', s: 'C.G.C University, 2021' },
                { i: '🌐', t: 'Stack Overflow Contributor', s: 'Community' },
                { i: '🔧', t: 'SOLID / KISS / DRY Principles', s: 'Best Practices' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', padding: '0.7rem 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontSize: '1.3rem', lineHeight: 1, flexShrink: 0 }}>{a.i}</span>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: '0.86rem', fontWeight: 600 }}>{a.t}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.72rem', fontFamily: 'Fira Code,monospace', letterSpacing: '0.06em' }}>{a.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center rev" ref={add}>
          <p style={{ fontFamily: 'Fira Code,monospace', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.2em', marginBottom: '1.2rem' }}>ALL_TECHNOLOGIES</p>
          <div>{ALL_CHIPS.map(c => <span key={c} className="chip">{c}</span>)}</div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
