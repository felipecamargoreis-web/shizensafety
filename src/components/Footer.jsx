import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-icon">🗻</span>
              <div className="logo-text">
                <span className="title text-light">SHIZEN SAFETY</span>
                <span className="subtitle text-light">自然セーフティ</span>
              </div>
            </div>
            <p className="footer-desc">
              A student-led NGO focused on disaster awareness in Japan. Helping communities prepare for the unexpected.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#mission">Mission</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Get in touch with us to collaborate, volunteer, or learn more.</p>
            <a href="mailto:shizensafety@gmail.com" className="contact-email">
              shizensafety@gmail.com
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shizen Safety Japan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
