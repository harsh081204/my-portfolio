import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--ds-surface)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Get in touch</span>
          <h2 className="t-h1" style={{ marginBottom: '1.5rem' }}>Ready to start a conversation?</h2>
          <p className="t-body" style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>
            I'm currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <a href="mailto:harsh081204@gmail.com" className="card" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
              <div style={{ background: 'var(--ds-navy)', color: 'white', padding: '0.75rem', borderRadius: '10px' }}>
                <Mail size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="t-label">Email</div>
                <div className="t-body" style={{ color: 'var(--ds-navy)', fontWeight: '600', wordBreak: 'break-all' }}>harsh081204@gmail.com</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/harsh-vardhan-53711624a/" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
              <div style={{ background: '#0077b5', color: 'white', padding: '0.75rem', borderRadius: '10px' }}>
                <Linkedin size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="t-label">LinkedIn</div>
                <div className="t-body" style={{ color: 'var(--ds-navy)', fontWeight: '600' }}>Harsh Vardhan</div>
              </div>
            </a>

            <a href="tel:+91-9151506344" className="card" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
              <div style={{ background: '#25D366', color: 'white', padding: '0.75rem', borderRadius: '10px' }}>
                <span style={{ fontSize: '20px', lineHeight: 1 }}>📱</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="t-label">Phone</div>
                <div className="t-body" style={{ color: 'var(--ds-navy)', fontWeight: '600' }}>+91-9151506344</div>
              </div>
            </a>
          </div>

          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="t-h2" style={{ marginBottom: '2rem' }}>Send a Message</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
              <div style={{ textAlign: 'left' }}>
                <label className="t-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--ds-border)',
                    background: 'var(--ds-white)',
                    minHeight: '120px',
                    fontFamily: 'inherit'
                  }}
                ></textarea>
              </div>
              <button className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
