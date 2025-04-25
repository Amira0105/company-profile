import React from 'react';
import '../App.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Visionary leader with 15+ years of industry experience.'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Technology expert specializing in scalable architectures.'
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Creative strategist with a track record of successful campaigns.'
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Full-stack developer passionate about clean code and UX.'
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;