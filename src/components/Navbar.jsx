import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span className="logo-icon">🗻</span>
          <div className="logo-text">
            <span className="title">SHIZEN SAFETY</span>
            <span className="subtitle">自然セーフティ</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:shizensafety@gmail.com" className="btn btn-primary">Get Involved</a>
      </div>
    </nav>
  );
};

export default Navbar;
