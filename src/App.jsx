import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PayFlowBlog from './components/PayFlowBlog';
import AutoMLBlog from './components/AutoMLBlog';
import './index.css';

const App = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <div className="portfolio-root">
      {activeBlog === null ? (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects onViewBlog={setActiveBlog} />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <>
          {activeBlog === 'payflow' && (
            <PayFlowBlog onBack={() => setActiveBlog(null)} />
          )}
          {activeBlog === 'automl' && (
            <AutoMLBlog onBack={() => setActiveBlog(null)} />
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;