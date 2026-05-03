import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">Student-led NGO in Japan</span>
          <h1 className="hero-title">
            Prepare. Protect. <span className="text-accent">Save Lives.</span>
          </h1>
          <p className="hero-subtitle">
            We are dedicated to raising awareness for natural disasters in Japan. 
            Building a resilient and informed society where every individual is prepared for the unexpected.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">Learn Our Mission</a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
