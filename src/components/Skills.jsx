import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', level: 92 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'Next.js', level: 82 },
  ];
  const backendSkills = [
    { name: 'Node.js / Express', level: 85 },
    { name: 'Python / Django', level: 78 },
    { name: 'RESTful APIs', level: 88 },
    { name: 'GraphQL', level: 72 },
  ];
  const tools = ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'AWS', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Redux', 'GraphQL', 'Jest'];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="section-underline"></div>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="about-card h-100">
              <div className="skill-category-title">Frontend</div>
              {frontendSkills.map(s => (
                <div key={s.name} className="skill-item">
                  <div className="skill-name">
                    <span>{s.name}</span>
                    <span className="skill-percent">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-card h-100">
              <div className="skill-category-title">Backend</div>
              {backendSkills.map(s => (
                <div key={s.name} className="skill-item">
                  <div className="skill-name">
                    <span>{s.name}</span>
                    <span className="skill-percent">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="skill-category-title mb-3">Tech Stack</div>
          <div>
            {tools.map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;