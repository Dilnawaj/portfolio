import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-text">
        Designed &amp; Built with ❤️ by <span>Abhisheka Raman</span> · {new Date().getFullYear()}
      </p>
      <p className="footer-text mt-1" style={{ fontSize: '0.78rem' }}>
        Built with <span>React.js</span> &amp; <span>Bootstrap</span> · Deployed on <span>Vercel</span>
      </p>
    </div>
  </footer>
);

export default Footer;
