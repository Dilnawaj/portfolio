import React from 'react';

const experiences = [
  {
    date: '2022 — Present',
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovators Pvt. Ltd.',
    desc: 'Lead development of scalable web applications using React and Node.js. Architected microservices, mentored junior devs, and reduced system latency by 40%.',
  },
  {
    date: '2021 — 2022',
    role: 'Full Stack Developer',
    company: 'Digital Solutions Inc.',
    desc: 'Built RESTful APIs and dynamic frontends for 10+ client projects. Implemented CI/CD pipelines and maintained 99.9% uptime across production systems.',
  },
  {
    date: '2020 — 2021',
    role: 'Frontend Developer',
    company: 'WebCraft Agency',
    desc: 'Created responsive, accessible UI components for e-commerce platforms. Collaborated with designers to deliver pixel-perfect implementations.',
  },
  {
    date: '2019 — 2020',
    role: 'Junior Web Developer',
    company: 'StartupHub',
    desc: 'Developed and maintained client websites using React.js. Optimized front-end performance and improved page load speeds by 35%.',
  },
];

const educations = [
  {
    date: '2016 — 2020',
    role: 'B.Tech in Computer Science',
    company: 'State Technical University',
    desc: 'Graduated with distinction. Specialized in Software Engineering and Database Systems. Active member of the coding club.',
  },
  {
    date: '2014 — 2016',
    role: 'Higher Secondary (Science)',
    company: 'Central Public School',
    desc: 'Completed with 92% marks. Focused on Mathematics, Physics, and Computer Science.',
  },
];

const TimelineItem = ({ item }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-card">
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      <div className="timeline-desc">{item.desc}</div>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-title">My <span>Journey</span></h2>
        <div className="section-underline"></div>
      </div>
      <div className="row g-5">
        <div className="col-md-6">
          <h5 style={{ color: 'var(--accent)', fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            // Work Experience
          </h5>
          {experiences.map((e, i) => <TimelineItem key={i} item={e} />)}
        </div>
        <div className="col-md-6">
          <h5 style={{ color: 'var(--accent)', fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            // Education
          </h5>
          {educations.map((e, i) => <TimelineItem key={i} item={e} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
