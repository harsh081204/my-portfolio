import React from 'react';
import { Code2, Brain, Layers } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Code2 size={24} />,
      title: "Distributed Architecture",
      desc: "Building robust platforms utilizing Go, Docker, and message brokers to ensure high-availability and transactional integrity."
    },
    {
      icon: <Brain size={24} />,
      title: "Generative AI & ML",
      desc: "Specializing in LLM orchestration, automated hyperparameter tuning, and advanced anomaly detection models."
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack Orchestration",
      desc: "Bridging the gap between complex backend algorithms and responsive, intuitive user interfaces using React and Streamlit."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--ds-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Core Pillars</span>
          <h2 className="t-h1">Areas of Expertise</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ color: 'var(--ds-navy)', background: 'var(--ds-white)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--ds-border)' }}>
                 <div style={{ margin: 'auto' }}>{pillar.icon}</div>
              </div>
              <h3 className="t-h2">{pillar.title}</h3>
              <p className="t-body">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
