import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Layers, ChevronDown, Download, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set body styles on mount
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'auto';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
    };
  }, []);

  const projects = [
    {
      name: "MemoryGraph",
      subtitle: "Dual-Layer AI Memory System",
      description: "Combines vector similarity search with knowledge graph relationships for deeply contextual AI reasoning.",
      category: ["GenAI", "Full-Stack", "AI Infrastructure"],
      tags: ["FastAPI", "React", "spaCy", "Ollama", "SentenceTransformers", "Graph Algorithms"],
      impact: "Context-aware AI responses • Persistent knowledge memory • Hybrid vector + graph intelligence",
      github: "https://github.com/harsh081204/MemoryGraph",
      demo: "#"
    },
    {
      name: "AutoML Pipeline",
      subtitle: "Automated Machine Learning System",
      description: "End-to-end AutoML pipeline for classification and regression with automated preprocessing, tuning, and ensemble learning.",
      category: ["Machine Learning", "MLOps"],
      tags: ["Python", "scikit-learn", "Optuna", "XGBoost", "Pandas"],
      impact: "Automates full ML lifecycle • Optimized models via Bayesian tuning • Ready for production deployment",
      github: "https://github.com/harsh081204/AutoML_Pipeline",
      demo: "#"
    },
    {
      name: "CNC Controller Application",
      subtitle: "PySide6-Based CNC Control Interface",
      description: "A modular desktop application for CNC machine control with signal-based architecture, real-time logging, and dark-themed UI.",
      category: ["Desktop", "Embedded Systems", "Automation"],
      tags: ["Python", "PySide6", "Qt", "Serial Communication", "G-Code"],
      impact: "Modular UI wiring • Real-time signal flow • Persistent configuration storage",
      github: "https://github.com/harsh081204/cnc_machine_app",
      demo: "#"
    },
  ];

  const skills = {
    "Languages": ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Streamlit"],
    "Backend": ["Node.js", "Express", "Flask", "FastAPI"],
    "AI/ML/DL": [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenAI API",
      "Hugging Face Transformers",
      "LangChain",
      "CrewAI",
      "LLaMA",
      "ChatGroq",
      "ChromaDB",
      "FAISS",
      "BERT",
      "Optuna"
    ],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Chroma"],
    "Tools": [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Pydantic",
      "Figma"
    ]
  };


  const categories = ["All", "GenAI", "Deep Learning", "ML", "Full-Stack", "NLP", "Computer Vision"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Harsh Vardhan
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-purple-800/30 rounded">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 hover:bg-purple-800/30 rounded">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 hover:bg-purple-800/30 rounded">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-purple-800/30 rounded">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center z-10 max-w-4xl">
          <div className="mb-6 flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-sm">
              AI/ML Engineer
            </span>
            <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-sm">
              GenAI Explorer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Building Intelligent Applications
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Software engineer passionate about AI/ML, full-stack development, and creating transformative user experiences
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Code2 size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a software engineer passionate about building intelligent applications that solve real problems. My journey started with web development, but I quickly became fascinated by the potential of AI/ML to create truly transformative user experiences.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Brain size={32} className="text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I specialize in the full stack—from training deep learning models to deploying production-ready applications with modern frameworks. Whether it's building GenAI-powered tools, fine-tuning computer vision models, or architecting scalable backends, I love the challenge of bringing AI from concept to production.
              </p>
            </div>
          </div>

          {/* Currently Section */}
          {/* <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Layers className="text-purple-400" />
              Currently
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-purple-400 font-semibold mb-2">📚 Learning</p>
                <p className="text-gray-300">Edge AI optimization with TensorRT</p>
              </div>
              <div>
                <p className="text-pink-400 font-semibold mb-2">🔨 Building</p>
                <p className="text-gray-300">AI-powered code documentation tool</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-2">🎯 Exploring</p>
                <p className="text-gray-300">Multi-modal AI applications</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Tech Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-500/20 rounded text-xs border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-purple-300 mb-4 font-semibold">
                    {project.impact}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition text-sm">
                      <Github size={16} />
                      Code
                    </a>
                    {/* <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition text-sm">
                      <ExternalLink size={16} />
                      Demo
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-gray-300 mb-10">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a href="mailto:harsh081204@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              <Mail size={20} />
              Email Me
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition">
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/harsh081204" className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-vardhan-53711624a/" className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:harsh081204@gmail.com" className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Portfolio. Built with React & Tailwind CSS</p>
          {/* <p className="text-sm mt-2">Designed with ❤️ and AI</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;