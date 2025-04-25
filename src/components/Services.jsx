import React, { useState } from 'react';
import '../App.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to your business needs.',
      color: '#2563eb', // blue
      url: 'Galaincha.com.np' // Replace with your actual URL
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'iOS and Android applications that engage your customers.',
      color: '#7c3aed', // purple
      url: 'https://example.com/mobile-apps' // Replace with your actual URL
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Strategies to increase your online presence and customer base.',
      color: '#059669', // green
      url: 'https://example.com/digital-marketing' // Replace with your actual URL
    },
    {
      icon: '🛠️',
      title: 'IT Consulting',
      description: 'Expert advice to optimize your technology infrastructure.',
      color: '#d97706', // amber
      url: 'https://example.com/it-consulting' // Replace with your actual URL
    }
  ];

  const handleCardClick = (url) => {
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="serviceas-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${hoveredCard === index ? 'glow' : ''}`}
              style={{ '--glow-color': service.color }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service.url)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-bg"></div>
              <span className="learn-more">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;