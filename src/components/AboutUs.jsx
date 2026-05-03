import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image animate-fade-in delay-100">
              {/* Using a nice gradient/pattern since we don't have a specific image yet */}
               <div className="abstract-pattern"></div>
            </div>
            <div className="experience-badge animate-fade-in delay-300">
              <span className="number">100%</span>
              <span className="text">Student Led</span>
            </div>
          </div>
          <div className="about-content animate-fade-in delay-200">
            <h2 className="section-title">Our Story & <span className="text-accent">Mission</span></h2>
            <p className="about-text">
              Japan is a beautiful country, yet it remains one of the most prone to natural disasters globally, facing earthquakes, tsunamis, and typhoons.
            </p>
            <p className="about-text">
              <strong>Shizen Safety</strong> was founded by a passionate group of university students who recognized a gap in proactive disaster awareness, particularly among the youth and non-native communities.
            </p>
            <p className="about-text">
              We believe that preparation shouldn't be an afterthought. Our mission is to educate, empower, and equip our local communities with the knowledge and tools they need to protect themselves and their loved ones when the unexpected strikes.
            </p>
            
            <ul className="core-values">
              <li>
                <div className="value-icon">🎯</div>
                <div className="value-text">
                  <h4>Educate</h4>
                  <p>Making disaster knowledge accessible.</p>
                </div>
              </li>
              <li>
                <div className="value-icon">🤝</div>
                <div className="value-text">
                  <h4>Empower</h4>
                  <p>Building community networks and resilience.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
