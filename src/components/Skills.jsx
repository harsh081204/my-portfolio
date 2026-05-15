import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Deep Learning (PyTorch/TF)", score: 90 },
        { name: "GenAI & LLM Orchestration", score: 95 },
        { name: "Multi-Agent Systems", score: 85 },
        { name: "RAG Systems & Vector DBs", score: 92 }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js / FastAPI / Go", score: 92 },
        { name: "Distributed Systems & Microservices", score: 90 },
        { name: "PostgreSQL / MongoDB / Redis", score: 88 },
        { name: "Docker / Kafka / AWS", score: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--ds-navy)', color: 'var(--ds-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label" style={{ color: 'var(--ds-light)' }}>Expertise</span>
          <h2 className="t-h1" style={{ color: 'white' }}>Technical Capabilities</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {skills.map((group, idx) => (
            <div key={idx}>
              <h3 className="t-h2" style={{ color: 'var(--ds-light)', marginBottom: '2rem', borderLeft: '3px solid var(--ds-accent)', paddingLeft: '1rem' }}>{group.category}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className="t-body" style={{ color: 'white', fontWeight: '500' }}>{skill.name}</span>
                      <span className="t-label" style={{ color: 'var(--ds-light)' }}>{skill.score}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${skill.score}%`, 
                        background: 'var(--ds-light)',
                        borderRadius: '10px'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '5rem', padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="t-h2" style={{ color: 'white', fontSize: '1rem', marginBottom: '1.5rem' }}>Languages & Tools</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {["JavaScript", "Python", "C/C++", "Go", "React.js", "Next.js", "Streamlit", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "AWS", "LangChain", "CrewAI", "Git"].map(tool => (
              <span key={tool} className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--ds-light)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
