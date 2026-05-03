import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Akari Tanaka',
      role: 'Founder & Director',
      image: '/src/assets/team_member.png',
      bio: 'Environmental Science student passionate about community safety.'
    },
    {
      name: 'Kenji Sato',
      role: 'Operations Lead',
      image: '/src/assets/team_member.png',
      bio: 'Logistics expert ensuring smooth delivery of our educational programs.'
    },
    {
      name: 'Yui Takahashi',
      role: 'Community Outreach',
      image: '/src/assets/team_member.png',
      bio: 'Bridging the gap between our NGO and local non-native communities.'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-header text-center animate-fade-in delay-100">
          <h2 className="section-title">Meet Our <span className="text-accent">Team</span></h2>
          <p className="team-subtitle text-muted">
            We are a group of dedicated university students working together to build a safer tomorrow for everyone in Japan.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className={`team-card animate-fade-in delay-${(index + 2) * 100}`} key={index}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-socials">
                  <a href="#">in</a>
                  <a href="#">tw</a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
