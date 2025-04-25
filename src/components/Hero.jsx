import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tagline"><span className="highlight">Company Profile</span></div>
          <h3 className="hero-title">
          Reinventing Success Through Transforming Ideas and Innovation
          </h3>
          <p className="hero-subtitle">
          We transform the way carpets are <span className="highlight"><b>Designed</b>,<b>Produced</b> and <b>Marketed</b></span>
          </p>
        </div>
      </div>
      <div className="scroll-indicator">
  <div className="arrow"></div>
</div>
    </section>
  );
};

export default Hero;