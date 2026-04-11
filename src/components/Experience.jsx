import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    date: 'Sep 2025 — Present',
    role: 'Software Developer',
    company: 'Wits Innovation Lab',
    location: 'Kharar, Punjab',
    desc: 'Building scalable Banking Application using Spring Boot, MySQL, and JPA with secure JWT authentication. Built React.js & Redux Toolkit for real-time transactions and optimized UI for smooth User Experience.',
    tags: ['Spring Boot','React.js','Redux Toolkit','MySQL','JWT','JPA'],
  },
  {
    date: 'Mar 2025 — Sep 2025',
    role: 'Technical Consultant (Full Stack Developer)',
    company: 'EY (Ernst & Young)',
    location: 'Chandigarh',
    desc: 'Deployed as full-stack developer for Govt Excise Dept. Built internal dashboard using Spring MVC & JSP. Developed and deployed a secure role-based access system using Spring MVC & JSP for GST workflow.',
    tags: ['Spring MVC','JSP','Role-Based Access','GST Workflow','Java'],
  },
  {
    date: 'Mar 2024 — Mar 2025',
    role: 'Software Developer (Full Stack)',
    company: 'NextGenVision Technology',
    location: 'Noida, Uttar Pradesh',
    desc: 'Optimized React.js codebase by switching from Redux Thunk to Redux Toolkit, reducing boilerplate code. Integrated Eureka & Kafka for robust microservices application architecture.',
    tags: ['React.js','Redux Toolkit','Kafka','Eureka','Microservices','Spring Boot'],
  },
  {
    date: 'Sep 2021 — Mar 2024',
    role: 'Software Developer (Full Stack)',
    company: 'RChilli Company',
    location: 'Mohali, Punjab',
    desc: 'Integrated multiple job portals (Job Target, Google Jobs) into ATS, increasing system functionality by 15%. Developed ERP API for Salesforce integration.',
    tags: ['Java','Spring Boot','Salesforce API','ATS','ERP','Job Portals'],
  },
];

const educations = [
  {
    date: 'Aug 2017 — Aug 2021',
    role: 'B.Tech in Information Technology',
    company: 'C.G.C University',
    location: 'Punjab',
    desc: 'Graduated with a strong foundation in Software Engineering, Data Structures, and Algorithms. Winner of Blind Coding competition at college level.',
    tags: ['Java','DSA','DBMS','Software Engineering'],
  },
];

const TimelineItem = ({ item, delay }) => {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="tl-item reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="tl-dot"></div>
      <div className="tl-card">
        <div className="tl-date">{item.date}</div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-company">{item.company} · {item.location}</div>
        <div className="tl-desc">{item.desc}</div>
        <div style={{ marginTop: '0.8rem' }}>
          {item.tags.map(t => <span key={t} className="tl-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const headRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); }, { threshold: 0.2 });
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="text-center mb-2 reveal" ref={headRef}>
          <div className="section-label">experience_and_education</div>
          <h2 className="section-title-new">My <span>Journey</span></h2>
        </div>
        <div className="section-line"></div>
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-head-chip">Work Experience</div>
            <div className="timeline-line">
              {experiences.map((e, i) => <TimelineItem key={i} item={e} delay={i * 0.12} />)}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-head-chip">Education</div>
            <div className="timeline-line">
              {educations.map((e, i) => <TimelineItem key={i} item={e} delay={i * 0.12} />)}
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <div className="section-head-chip">Achievements</div>
              <div className="glass-card" style={{ marginTop: '1rem' }}>
                {[
                  { icon: '⭐', text: '5★ in DSA on HackerRank' },
                  { icon: '☕', text: '3★ in Java on HackerRank' },
                  { icon: '🏆', text: 'Blind Coding Winner — College Level' },
                  { icon: '🧠', text: 'Expert in SOLID, KISS & DRY principles' },
                  { icon: '🌐', text: 'Active Stack Overflow Contributor' },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', padding: '0.7rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                    <span style={{ fontSize: '1.2rem' }}>{a.icon}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.87rem' }}>{a.text}</span>
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
