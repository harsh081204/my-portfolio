import React from 'react';
import { Code2, Brain, Layers } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Code2 size={24} />,
      title: "Clean Architecture",
      desc: "Building scalable and maintainable systems using modern best practices and design patterns."
    },
    {
      icon: <Brain size={24} />,
      title: "AI Integration",
      desc: "Specialized in GenAI, RAG systems, and LLM orchestration to build truly smart applications."
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack Mastery",
      desc: "From training deep learning models to deploying production-ready frontends and backends."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--ds-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Philosophy</span>
          <h2 className="t-h1">Engineering with Purpose</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ color: 'var(--ds-navy)', background: 'var(--ds-white)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid var(--ds-border)' }}>
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
