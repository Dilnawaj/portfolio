import React, { useEffect, useRef, useState } from 'react';

const skillGroups = {
  Backend: [
    { name: 'Java / Spring Boot', level: 92 },
    { name: 'Spring Cloud / Microservices', level: 88 },
    { name: 'Hibernate / JPA', level: 85 },
    { name: 'JWT / Spring Security', level: 87 },
    { name: 'Kafka / RabbitMQ', level: 80 },
    { name: 'REST APIs / GraphQL', level: 88 },
  ],
  Frontend: [
    { name: 'React.js', level: 88 },
    { name: 'Redux Toolkit (RTK)', level: 85 },
    { name: 'JavaScript / TypeScript', level: 82 },
    { name: 'HTML5 / CSS3 / Bootstrap', level: 90 },
    { name: 'JSP / Spring MVC', level: 78 },
  ],
  DevOps: [
    { name: 'Docker / Kubernetes', level: 78 },
    { name: 'AWS (Beanstalk, RDS, CodePipeline)', level: 75 },
    { name: 'CI/CD / Jenkins', level: 76 },
    { name: 'Git / GitHub / BitBucket', level: 90 },
  ],
  Database: [
    { name: 'MySQL / PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 75 },
    { name: 'Redis', level: 80 },
    { name: 'AWS RDS', level: 72 },
  ],
};

const allTech = [
  'Java','Spring Boot','Spring Cloud','Kafka','Eureka','Hibernate','JPA','JWT',
  'React.js','Redux Toolkit','JavaScript','TypeScript','Bootstrap','JSP',
  'MySQL','PostgreSQL','MongoDB','Redis','Docker','Kubernetes','AWS',
  'CI/CD','Jenkins','SonarQube','Git','GraphQL','Vercel','Figma',
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Backend');
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const refs = useRef([]);
  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); setAnimated(true); }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-2 reveal" ref={addRef}>
          <div className="section-label">skills_and_tools</div>
          <h2 className="section-title-new">Tech <span>Stack</span></h2>
        </div>
        <div className="section-line"></div>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 reveal" ref={addRef}>
          {Object.keys(skillGroups).map(tab => (
            <button key={tab} className={`category-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="row g-4 mb-5">
          <div className="col-lg-7 reveal-left" ref={addRef}>
            <div className="glass-card">
              <div style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.78rem', letterSpacing: '0.15em', marginBottom: '1.8rem' }}>
                
              </div>
              {skillGroups[activeTab].map((s, i) => (
                <div key={s.name} className="skill-bar-wrap" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="skill-top">
                    <span className="sk-name">{s.name}</span>
                    <span className="sk-pct">{s.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill-bar" style={{ width: animated ? `${s.level}%` : '0%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 reveal-right" ref={addRef}>
            <div className="glass-card h-100">
              <div style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.78rem', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                achievements.json
              </div>
              {[
                { icon: '⭐', title: '5★ in DSA on HackerRank', sub: 'Data Structures & Algorithms' },
                { icon: '☕', title: '3★ in Java on HackerRank', sub: 'Core Java Programming' },
                { icon: '🏆', title: 'Blind Coding Winner', sub: 'College Level Competition' },
                { icon: '🎓', title: 'B.Tech in Information Technology', sub: 'C.G.C University 2017–2021' },
                { icon: '🌐', title: 'Active on Stack Overflow', sub: 'Community Contributor' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div style={{ fontSize: '1.4rem', lineHeight: 1 }}>{a.icon}</div>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 700 }}>{a.title}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center reveal" ref={addRef}>
          <div style={{ color: 'var(--accent)', fontFamily: 'Fira Code,monospace', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1.2rem' }}>
            ALL_TECHNOLOGIES
          </div>
          <div>
            {allTech.map(t => <span key={t} className="tech-chip">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
