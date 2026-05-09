import React from 'react';

const Journey = () => {
  const timeline = [
    {
      date: "2024",
      title: "GenAI & LLMs",
      company: "Specialization",
      desc: "Deep dive into Generative AI, RAG systems, and AI agent orchestration.",
      tech: ["LangChain", "OpenAI", "Vector DBs"]
    },
    {
      date: "2023",
      title: "Deep Learning",
      company: "Advanced Studies",
      desc: "Advanced neural networks, computer vision, and NLP implementations.",
      tech: ["PyTorch", "TensorFlow", "BERT"]
    },
    {
      date: "2022",
      title: "Machine Learning",
      company: "Foundations",
      desc: "Building predictive models and mastering data science fundamentals.",
      tech: ["scikit-learn", "Pandas", "NumPy"]
    },
    {
      date: "2021",
      title: "Full-Stack Dev",
      company: "Web Ecosystem",
      desc: "Building dynamic applications with React, Node.js, and modern frameworks.",
      tech: ["React", "Node.js", "PostgreSQL"]
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
