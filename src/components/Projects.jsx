import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    emoji: '🗳️',
    bg: 'linear-gradient(135deg,#1a1a35,#0d1b2a)',
    title: 'E-Voting Application',
    tags: ['Spring Boot','React.js','Kafka','Microservices'],
    cat: 'Microservices',
    desc: 'Highly scalable microservices-based e-voting system with secure JWT auth, real-time vote tracking. Built Voter, Candidate, Election Commission & Party services with Kafka event handling and Resilience4j fault tolerance.',
    github: 'https://github.com/Dilnawaj/E-Voting-Application',
    demo: null,
    featured: true,
  },
  {
    emoji: '📝',
    bg: 'linear-gradient(135deg,#1a2535,#0a1628)',
    title: 'Blogger Application',
    tags: ['Spring Boot','React.js','Redux Toolkit','MySQL','Redis'],
    cat: 'Full Stack',
    desc: 'Feature-rich blogging platform with download, subscribe, comment, share, like/dislike & save. JWT-secured backend with Redis caching, Swagger docs and Toastify notifications.',
    github: 'https://github.com/Dilnawaj/blogger',
    demo: null,
    featured: true,
  },
  {
    emoji: '📂',
    bg: 'linear-gradient(135deg,#1a1528,#0d0a1e)',
    title: 'DataCourier App',
    tags: ['Spring Boot','React.js','AWS','Redis','CI/CD'],
    cat: 'Full Stack',
    desc: 'File retrieval system integrated with BombitUp for enhanced functionality. Backend on AWS Elastic Beanstalk + RDS, CI/CD via AWS CodePipeline, frontend on Vercel with instant email notifications.',
    github: 'https://github.com/Dilnawaj/Data-Courier',
    demo: 'https://vercel.com',
    featured: true,
  },
  {
    emoji: '🏦',
    bg: 'linear-gradient(135deg,#0d1a1a,#0a1510)',
    title: 'Banking Application',
    tags: ['Spring Boot','MySQL','JPA','React.js','JWT'],
    cat: 'Full Stack',
    desc: 'Scalable banking application with secure JWT authentication, real-time transaction management and optimized UI built using React.js and Redux Toolkit.',
    github: 'https://github.com/Dilnawaj',
    demo: null,
    featured: false,
  },
  {
    emoji: '👗',
    bg: 'linear-gradient(135deg,#1a0d28,#120a1e)',
    title: 'Myntra Clone',
    tags: ['React.js','JavaScript','CSS','Bootstrap'],
    cat: 'Frontend',
    desc: 'Responsive frontend clone of Myntra e-commerce platform. Built with React.js, featuring product listing, filtering, cart and checkout UI.',
    github: 'https://github.com/Dilnawaj/myntra',
    demo: null,
    featured: false,
  },
  {
    emoji: '📱',
    bg: 'linear-gradient(135deg,#1a1a0d,#141005)',
    title: 'Social Media App',
    tags: ['React.js','JavaScript','Spring Boot','MySQL'],
    cat: 'Full Stack',
    desc: 'Social media application with post creation, likes, comments, follow/unfollow and user profile features. Full stack with Spring Boot backend.',
    github: 'https://github.com/Dilnawaj/social-media',
    demo: null,
    featured: false,
  },
];

const cats = ['All', 'Microservices', 'Full Stack', 'Frontend'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);
  const refs = useRef([]);
  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-2 reveal" ref={addRef}>
          <div className="section-label">projects</div>
          <h2 className="section-title-new">My <span>Work</span></h2>
        </div>
        <div className="section-line"></div>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 reveal" ref={addRef}>
          {cats.map(c => (
            <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((p, i) => (
            <div key={i} className={`col-md-6 col-lg-4 reveal`} ref={addRef} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="project-card-new">
                {p.featured && (
                  <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 2, background: 'linear-gradient(135deg,var(--accent),var(--accent2))', color: '#080812', borderRadius: '50px', padding: '0.2rem 0.7rem', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                    FEATURED
                  </div>
                )}
                <div className="proj-banner" style={{ background: p.bg }}>
                  <span style={{ fontSize: '4rem', position: 'relative', zIndex: 1 }}>{p.emoji}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-tags-row">
                    {p.tags.map(t => <span key={t} className="proj-chip">{t}</span>)}
                  </div>
                  <div className="proj-title-new">{p.title}</div>
                  <div className="proj-desc-new">{p.desc}</div>
                  <div className="proj-actions">
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      Source Code
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 reveal" ref={addRef}>
          <a href="https://github.com/Dilnawaj" target="_blank" rel="noreferrer" className="btn-ghost">
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
