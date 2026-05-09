import React from 'react';

const Footer = () => {
  return (
    <footer className="section" style={{ padding: '4rem 0', background: 'var(--ds-navy)', color: 'rgba(255,255,255,0.6)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="nav-logo" style={{ color: 'white', marginBottom: '0.5rem' }}>HV.</div>
            <p style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()} Harsh Vardhan. Built with React & Design System.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://github.com/harsh081204" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a>
            <a href="https://linkedin.com/in/harsh-vardhan-53711624a/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>LinkedIn</a>
            <a href="mailto:harsh081204@gmail.com" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
