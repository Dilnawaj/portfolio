import React, { useState } from 'react';

const allProjects = [
  { emoji: '🛒', title: 'E-Commerce Platform', tags: ['React', 'Node.js', 'MongoDB'], cat: 'Full Stack', desc: 'A full-featured e-commerce platform with real-time inventory, payment gateway, and admin dashboard.', github: '#', demo: '#' },
  { emoji: '💬', title: 'Real-Time Chat App', tags: ['React', 'Socket.io', 'Express'], cat: 'Full Stack', desc: 'A real-time chat application with rooms, private messaging, file sharing, and emoji reactions.', github: '#', demo: '#' },
  { emoji: '📊', title: 'Analytics Dashboard', tags: ['React', 'D3.js', 'REST API'], cat: 'Frontend', desc: 'Interactive analytics dashboard with customizable charts, KPI tracking, and data export features.', github: '#', demo: '#' },
  { emoji: '🏥', title: 'Healthcare Management', tags: ['Next.js', 'PostgreSQL', 'Docker'], cat: 'Full Stack', desc: 'Appointment booking system for clinics with patient records, billing, and doctor schedule management.', github: '#', demo: '#' },
  { emoji: '📱', title: 'Social Media App', tags: ['React Native', 'Firebase'], cat: 'Mobile', desc: 'Cross-platform social media mobile app with feeds, stories, DMs, and push notifications.', github: '#', demo: '#' },
  { emoji: '🤖', title: 'AI Content Generator', tags: ['Python', 'OpenAI', 'React'], cat: 'AI/ML', desc: 'AI-powered content generation tool for blog posts, social media captions, and marketing copy.', github: '#', demo: '#' },
];

const cats = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI/ML'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.cat === active);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="section-underline"></div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              style={{
                background: active === c ? 'linear-gradient(135deg, var(--accent), #8b85ff)' : 'var(--bg-card)',
                border: `1.5px solid ${active === c ? 'var(--accent)' : 'var(--border)'}`,
                color: active === c ? '#fff' : 'var(--text-secondary)',
                borderRadius: '8px', padding: '0.5rem 1.2rem', fontSize: '0.85rem',
                fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Poppins, sans-serif',
              }}>
              {c}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((p, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-img-placeholder">{p.emoji}</div>
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-links">
                    <a href={p.github} title="GitHub" target="_blank" rel="noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href={p.demo} title="Live Demo" target="_blank" rel="noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
