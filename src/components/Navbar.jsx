import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-open' : ''}`}>
      <div className="nav-content">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          HV<span style={{ color: 'var(--ds-mid)' }}>.</span>
        </a>
        
        <button 
          className="nav-mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`nav-links ${menuOpen ? 'nav-links-mobile-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('about'); }}>About</a>
          <a href="#journey" className="nav-link" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('journey'); }}>Journey</a>
          <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('skills'); }}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('projects'); }}>Projects</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }} onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('contact'); }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
