import React, { useEffect, useRef } from 'react';

const exp = [
  { date: 'Sep 2025 — Present', role: 'Software Developer', company: 'Wits Innovation Lab', loc: 'Kharar, Punjab', desc: 'Building scalable Banking Application using Spring Boot, MySQL, and JPA with secure JWT authentication. Built React.js & Redux Toolkit for real-time transactions and optimized UI for smooth user experience.', tags: ['Spring Boot','React.js','Redux Toolkit','MySQL','JWT','JPA'] },
  { date: 'Mar 2025 — Sep 2025', role: 'Technical Consultant (Full Stack)', company: 'EY (Ernst & Young)', loc: 'Chandigarh', desc: 'Deployed as full-stack developer for Govt Excise Dept. Built internal dashboard using Spring MVC & JSP. Developed secure role-based access system for GST workflow management.', tags: ['Spring MVC','JSP','Java','RBAC','GST Workflow'] },
  { date: 'Mar 2024 — Mar 2025', role: 'Software Developer (Full Stack)', company: 'NextGenVision Technology', loc: 'Noida, Uttar Pradesh', desc: 'Optimized React.js codebase by migrating from Redux Thunk to Redux Toolkit, reducing boilerplate by 40%. Integrated Eureka & Kafka for robust microservices application architecture.', tags: ['React.js','Redux Toolkit','Kafka','Eureka','Microservices'] },
  { date: 'Sep 2021 — Mar 2024', role: 'Software Developer (Full Stack)', company: 'RChilli Company', loc: 'Mohali, Punjab', desc: 'Integrated multiple job portals (Job Target, Google Jobs) into ATS, increasing system functionality by 15%. Developed ERP API for Salesforce integration and maintained high-performance parsing systems.', tags: ['Java','Spring Boot','Salesforce','ATS','ERP','Job Portals'] },
];

const edu = [
  { date: 'Aug 2017 — Aug 2021', role: 'B.Tech in Information Technology', company: 'C.G.C University', loc: 'Punjab', desc: 'Graduated with strong foundation in Software Engineering, DSA, and Databases. Winner of Blind Coding competition at college level. Active developer in campus coding community.', tags: ['Java','DSA','DBMS','Software Engineering','OOP'] },
];

const TLItem = ({ item, delay }) => {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('on'); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="tl-it rev" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="tl-dot"></div>
      <div className="tl-card">
        <div className="tl-date">{item.date}</div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-co">{item.company} · {item.loc}</div>
        <div className="tl-desc">{item.desc}</div>
        <div style={{ marginTop: '0.8rem' }}>{item.tags.map(t => <span key={t} className="tl-tag">{t}</span>)}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  const headRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('on'); }, { threshold: 0.2 });
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="text-center mb-2 rev" ref={headRef}>
          <span className="sec-label">experience &amp; education</span>
          <h2 className="sec-title">My <span>Journey</span></h2>
        </div>
        <div className="sec-rule"></div>
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="head-chip">💼 Work Experience</div>
            <div className="tl">{exp.map((e, i) => <TLItem key={i} item={e} delay={i * 0.1} />)}</div>
          </div>
          <div className="col-lg-5">
            <div className="head-chip">🎓 Education</div>
            <div className="tl">{edu.map((e, i) => <TLItem key={i} item={e} delay={i * 0.1} />)}</div>
            <div style={{ marginTop: '2rem' }}>
              <div className="head-chip">🏆 Achievements</div>
              <div className="gc" style={{ marginTop: '1rem' }}>
                {[
                  { i: '⭐', t: '5 Stars in DSA on HackerRank' },
                  { i: '☕', t: '3 Stars in Java on HackerRank' },
                  { i: '🏆', t: 'Blind Coding Winner — College Level' },
                  { i: '🧠', t: 'SOLID, KISS & DRY Principles Expert' },
                  { i: '🌐', t: 'Active Stack Overflow Contributor' },
                ].map((a, i, arr) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.65rem 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <span style={{ fontSize: '1.1rem' }}>{a.i}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.84rem' }}>{a.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
