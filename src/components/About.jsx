import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Our Company</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Founded in 2010, CompanyName has grown from a small startup to a leading provider of innovative business solutions. 
              Our team of experts is dedicated to delivering exceptional results for our clients across various industries.
            </p>
            <p>
              We believe in building long-term relationships with our clients by providing reliable, scalable, and customized 
              solutions that drive growth and efficiency.
            </p>
            <a href="#services" className="btn">Our Services</a>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Our Office" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;