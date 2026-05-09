import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "MemoryGraph",
      subtitle: "Dual-Layer AI Memory System",
      desc: "Combines vector similarity search with knowledge graph relationships for deeply contextual AI reasoning.",
      tech: ["FastAPI", "React", "spaCy", "Ollama"],
      link: "https://github.com/harsh081204/MemoryGraph",
      featured: true
    },
    {
      name: "AutoML Pipeline",
      subtitle: "Automated ML System",
      desc: "End-to-end AutoML pipeline for classification and regression with automated preprocessing and tuning.",
      tech: ["Python", "scikit-learn", "Optuna", "XGBoost"],
      link: "https://github.com/harsh081204/AutoML_Pipeline",
      featured: true
    },
    {
      name: "CNC Controller",
      subtitle: "PySide6-Based Interface",
      desc: "A modular desktop application for CNC machine control with real-time logging and dark-themed UI.",
      tech: ["Python", "PySide6", "Qt", "Serial"],
      link: "https://github.com/harsh081204/cnc_machine_app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="t-h1">Featured Projects</h2>
          </div>
          <a href="https://github.com/harsh081204" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View All GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="t-h2" style={{ marginBottom: '0.25rem' }}>{proj.name}</h3>
                  <div className="t-label" style={{ color: 'var(--ds-mid)', fontSize: '0.65rem' }}>{proj.subtitle}</div>
                </div>
                {proj.featured && <span className="badge badge-featured">Featured</span>}
              </div>
              
              <p className="t-body" style={{ flex: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{proj.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {proj.tech.map(t => (
                  <span key={t} className="badge badge-tech">{t}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--ds-border)', paddingTop: '1.5rem' }}>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
