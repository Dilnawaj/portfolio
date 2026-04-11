import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    emoji: '🗳️', bg: 'linear-gradient(135deg,#0a0a25,#0d1b35)',
    title: 'E-Voting Application', cat: 'Microservices', featured: true,
    tags: ['Spring Boot', 'Kafka', 'React.js', 'Microservices'],
    desc: 'Highly scalable microservices-based e-voting system. Built Voter, Candidate, Election Commission & Party services with Kafka event handling, Resilience4j fault tolerance, and Spring Cloud Eureka service discovery.',
    github: 'https://github.com/Dilnawaj/E-Voting-Application', demo: null,
  },
  {
    emoji: '📝', bg: 'linear-gradient(135deg,#0a1520,#0c1a2e)',
    title: 'Blogger Application', cat: 'Full Stack', featured: true,
    tags: ['Spring Boot', 'React.js', 'Redux Toolkit', 'Redis'],
    desc: 'Feature-rich blogging platform with download, subscribe, comment, share, like/dislike & save. JWT-secured backend with Redis caching, Swagger docs and Toastify notifications for rich UX.',
    github: 'https://github.com/Dilnawaj/blogger', demo: null,
  },
  {
    emoji: '📂', bg: 'linear-gradient(135deg,#120a28,#0d0820)',
    title: 'DataCourier App', cat: 'Full Stack', featured: true,
    tags: ['Spring Boot', 'AWS', 'React.js', 'CI/CD', 'Redis'],
    desc: 'File retrieval and sharing system integrated with BombitUp. Backend on AWS Elastic Beanstalk + RDS, CI/CD via AWS CodePipeline, instant email notifications, frontend deployed on Vercel.',
    github: 'https://github.com/Dilnawaj/Data-Courier', demo: 'https://vercel.com',
  },
  {
    emoji: '🏦', bg: 'linear-gradient(135deg,#081818,#0a1510)',
    title: 'Banking Application', cat: 'Full Stack', featured: false,
    tags: ['Spring Boot', 'MySQL', 'JPA', 'React.js', 'JWT'],
    desc: 'Scalable banking app with secure JWT authentication, real-time transaction management. Built with Spring Boot backend and React.js + Redux Toolkit optimized UI.',
    github: 'https://github.com/Dilnawaj', demo: null,
  },
  {
    emoji: '👗', bg: 'linear-gradient(135deg,#180d25,#120820)',
    title: 'Myntra Clone', cat: 'Frontend', featured: false,
    tags: ['React.js', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: 'Responsive frontend clone of Myntra e-commerce platform with product listing, filtering, cart and checkout UI. Built with React.js and modern CSS techniques.',
    github: 'https://github.com/Dilnawaj/myntra', demo: null,
  },
  {
    emoji: '📱', bg: 'linear-gradient(135deg,#101820,#080e18)',
    title: 'Social Media App', cat: 'Full Stack', featured: false,
    tags: ['React.js', 'JavaScript', 'Spring Boot', 'MySQL'],
    desc: 'Full-stack social media application with posts, likes, comments, follow/unfollow and profile features. Spring Boot REST API backend with React.js frontend.',
    github: 'https://github.com/Dilnawaj/social-media', demo: null,
  },
];

const CATS = ['All', 'Microservices', 'Full Stack', 'Frontend'];

const FlipCard = ({ p, delay }) => {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('on'); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="col-md-6 col-lg-4 rev" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="flip-wrapper">
        <div className="flip-inner">
          {/* FRONT */}
          <div className="flip-front">
            {p.featured && <span className="feat-badge">FEATURED</span>}
            <div className="fp-banner" style={{ background: p.bg }}>
              <span style={{ position: 'relative', zIndex: 1 }}>{p.emoji}</span>
            </div>
            <div className="fp-body">
              <div className="fp-tags">
                {p.tags.map(t => <span key={t} className="fp-tag">{t}</span>)}
              </div>
              <div className="fp-title">{p.title}</div>
              <div className="fp-hint">
                <div className="fp-hint-dot"></div>
                Hover to see details
              </div>
            </div>
          </div>
          {/* BACK */}
          <div className="flip-back">
            <div className="fb-top">
              <div className="fb-badge">{p.cat}</div>
              <div className="fb-title">{p.title}</div>
              <div className="fb-desc">{p.desc}</div>
              <div className="fb-stack">
                {p.tags.map(t => <span key={t} className="fb-chip">{t}</span>)}
              </div>
            </div>
            <div className="fb-actions">
              <a href={p.github} target="_blank" rel="noreferrer" className="fb-btn fb-btn-main">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                Source Code
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="fb-btn fb-btn-sec">
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? projects : projects.filter(p => p.cat === cat);
  const headRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('on'); }, { threshold: 0.2 });
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-2 rev" ref={headRef}>
          <span className="sec-label">projects</span>
          <h2 className="sec-title">My <span>Work</span></h2>
        </div>
        <div className="sec-rule"></div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {CATS.map(c => (
            <button key={c} className={`flt-btn${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((p, i) => <FlipCard key={p.title} p={p} delay={(i % 3) * 0.1} />)}
        </div>

        <div className="text-center mt-5">
          <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="cta-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
