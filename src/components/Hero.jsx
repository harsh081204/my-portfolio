import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <span className="section-label" style={{ color: 'var(--ds-mid)', fontWeight: '700' }}>Available for new opportunities</span>
          <h1 className="t-display" style={{ marginBottom: '1.5rem' }}>
            Building <span style={{ color: 'var(--ds-navy)' }}>intelligent</span> applications with precision.
          </h1>
          <p className="t-body" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I'm Harsh Vardhan, a software engineer specialized in AI/ML and full-stack development. I bridge the gap between complex algorithms and intuitive user experiences.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
