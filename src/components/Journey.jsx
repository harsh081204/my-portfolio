import React from 'react';

const Journey = () => {
  const timeline = [
    {
      date: "Dec 2025",
      title: "Research Paper Co-Author",
      company: "Springer International Conference",
      desc: "Co-authored a research paper on SDLC optimization methodologies (ASAF: A Hybrid Approach of SDLC).",
      tech: ["Research", "SDLC", "Optimization"]
    },
    {
      date: "06/2025 - 09/2025",
      title: "Software Engineer Intern",
      company: "Invariance Automation",
      desc: "Engineered a professional-grade multi-firmware desktop app for high-precision CNC machine control with zero-latency communication.",
      tech: ["Python", "PySide6", "PySerial"]
    },
    {
      date: "July 2025",
      title: "Team Lead - Smart India Hackathon",
      company: "Institute Level Qualifier",
      desc: "Led a 6-member team to design and build a full-stack ed-tech platform under agile, time-constrained conditions.",
      tech: ["Full-Stack", "Agile", "Leadership"]
    },
    {
      date: "Expected 2027",
      title: "B.Tech in Computer Science",
      company: "APJ Abdul Kalam Technical University",
      desc: "Coursework in Distributed Systems, AI, Database Management, and Algorithm Design.",
      tech: ["DSA", "OOP", "DBMS", "Computer Networks"]
    }
  ];

  return (
    <section id="journey" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
          <div>
            <span className="section-label">Evolution</span>
            <h2 className="t-h1" style={{ marginBottom: '1.5rem' }}>The Path So Far</h2>
            <p className="t-body">A chronological look at my growth as an engineer, moving from core development to specialized AI systems.</p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px', background: 'var(--ds-border)' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {timeline.map((item, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '-5px', 
                    top: '8px', 
                    width: '11px', 
                    height: '11px', 
                    borderRadius: '50%', 
                    background: idx === 0 ? 'var(--ds-navy)' : 'var(--ds-mid)',
                    boxShadow: idx === 0 ? '0 0 0 4px rgba(53, 88, 114, 0.1)' : 'none'
                  }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                    <h3 className="t-h2" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                    <span className="t-label" style={{ color: 'var(--ds-navy)' }}>{item.date}</span>
                  </div>
                  
                  <div className="t-label" style={{ marginBottom: '0.75rem', color: 'var(--ds-mid)' }}>{item.company}</div>
                  <p className="t-body" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{item.desc}</p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.tech.map(t => (
                      <span key={t} className="badge badge-tech" style={{ fontSize: '0.7rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
