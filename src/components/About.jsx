import React from 'react';

const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Done' },
    { number: '15+', label: 'Happy Clients' },
    { number: '5+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-underline"></div>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="about-card h-100">
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.2rem', fontWeight: 700 }}>
                Who I Am
              </h4>
              <p className="about-text mb-3">
                I'm <strong style={{ color: 'var(--accent)' }}>Abhisheka Raman</strong>, a passionate Full Stack Developer 
                with 4+ years of professional experience building modern web applications. I specialize in 
                creating seamless user experiences with cutting-edge technologies.
              </p>
              <p className="about-text mb-3">
                I thrive on solving complex problems and turning ideas into elegant, performant digital solutions. 
                My expertise spans the entire web development stack — from crafting intuitive UIs to designing 
                robust backend architectures.
              </p>
              <p className="about-text">
                When I'm not coding, I explore new technologies, contribute to open-source projects, and 
                mentor aspiring developers.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card h-100">
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 700 }}>
                Personal Info
              </h4>
              {[
                { icon: '👤', label: 'Name', value: 'Abhisheka Raman' },
                { icon: '💼', label: 'Role', value: 'Full Stack Developer' },
                { icon: '📧', label: 'Email', value: 'abhisheka@example.com' },
                { icon: '📍', label: 'Location', value: 'India' },
                { icon: '🎓', label: 'Degree', value: 'B.Tech Computer Science' },
                { icon: '✅', label: 'Available', value: 'Open to Opportunities' },
              ].map(item => (
                <div key={item.label} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-label">{item.label}:</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
              <div className="mt-3">
                <a href="#" className="btn-primary-custom" style={{ fontSize: '0.82rem', padding: '0.6rem 1.4rem' }}>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {stats.map(s => (
            <div key={s.label} className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
