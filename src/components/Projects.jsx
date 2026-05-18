import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Intelligent Fund Flow Tracking",
      subtitle: "AI-Powered Fraud Detection",
      desc: "Graph-based fraud detection system using NetworkX and Isolation Forest to detect money laundering across 6.3M+ transactions.",
      tech: ["Python", "NetworkX", "Streamlit"],
      link: "https://github.com/harsh081204/Intelligent-Fund-Flow-Tracking-System",
      featured: true
    },
    {
      name: "PayFlow",
      subtitle: "Scalable Microservices Payment Platform",
      desc: "High-performance payment platform with 6 microservices, Double-Entry Bookkeeping Ledger, and token bucket rate limiter.",
      tech: ["Go", "Docker", "PostgreSQL", "Kafka"],
      link: "https://github.com/harsh081204/payflow",
      featured: true
    },
    {
      name: "AI Changelog Writer",
      subtitle: "Automated Impact Classifier & Changelog Generator",
      desc: "Developer tool that ingests Git/GitHub PR diffs, classifies technical impact, suggests SemVer bumps, and auto-generates beautiful changelogs using Groq and BullMQ.",
      tech: ["Next.js", "Redis", "BullMQ", "PostgreSQL", "Prisma"],
      link: "https://github.com/harsh081204/changelog-writer",
      featured: true
    },
    {
      name: "TradingAgents",
      subtitle: "Multi-Agent Financial Framework",
      desc: "Autonomous multi-agent system coordinating AI agents for financial analysis and trading strategy execution.",
      tech: ["Docker", "LLMs", "Multi-Agent"],
      link: "https://github.com/harsh081204/TradingAgents",
      featured: false
    },
    {
      name: "MemoryGraph",
      subtitle: "Advanced Dual-Layer AI Memory",
      desc: "Combines vector similarity search with knowledge graph relationships for deeply contextual AI reasoning.",
      tech: ["React Flow", "spaCy", "Vector DB"],
      link: "https://github.com/harsh081204/MemoryGraph",
      featured: true
    },
    {
      name: "DayLog",
      subtitle: "AI-Driven Behavioral Analytics",
      desc: "Information extraction pipeline using Llama 3.3 to parse journals and provide predictive career coaching.",
      tech: ["Groq", "Data Pipeline", "Analytics"],
      link: "https://github.com/harsh081204/DayLog",
      featured: false
    },
    {
      name: "AutoML Pipeline",
      subtitle: "Automated ML Optimization Framework",
      desc: "End-to-end AutoML pipeline using Optuna for hyperparameter tuning and sophisticated ensemble learning strategies.",
      tech: ["Python", "Optuna", "XGBoost"],
      link: "https://github.com/harsh081204/AutoML_Pipeline",
      featured: false
    },
    {
      name: "StudyPal",
      subtitle: "RAG-Based Learning Assistant",
      desc: "Educational assistant using LangChain and ChromaDB for customized textbook querying and YouTube integration.",
      tech: ["LangChain", "ChromaDB", "Groq"],
      link: "https://github.com/harsh081204/studypal",
      featured: false
    },
    {
      name: "CNC Controller",
      subtitle: "Industrial CNC Controller Development",
      desc: "Professional-grade multi-firmware desktop app for CNC control with a multi-threaded asynchronous communication engine.",
      tech: ["Python", "PySide6", "PySerial"],
      link: "https://github.com/harsh081204/cnc_machine_app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="t-h1">Featured Projects</h2>
          </div>
          <a href="https://github.com/harsh081204" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View All GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
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
