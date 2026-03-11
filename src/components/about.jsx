import React from 'react';

const About = () => {
  const handleDownloadCV = () => {
    // CV file path - public folder mein cv.pdf rakhna hai
    const cvUrl = '/Abdul_Rehman.docx';
    
    // Create anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = '/Abdul_Rehman.docx'; // Download karte waqt file ka naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="gradient-text">
          About Me
        </h2>
        <p className="section-subtitle">
          Front-End Developer passionate about creating exceptional digital experiences
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3 className="gradient-text">
              Front-End Developer & React Specialist
            </h3>
            <p>
              I'm a dedicated Front-End Developer with expertise in React.js and modern JavaScript. 
              With a strong focus on creating responsive, user-friendly interfaces, I transform 
              design concepts into performant web applications that deliver exceptional user experiences.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>3+ years of experience in front-end development</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>Specialized in React.js, Next.js, and modern JavaScript</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>Passionate about responsive design and performance optimization</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>Clean code advocate with focus on maintainability and scalability</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={handleDownloadCV}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(90deg, #00FFF0, #FF00D4)',
                  color: '#000000',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                }}
              >
                <i className="fas fa-download"></i>
                Download CV
              </button>
            </div>
          </div>

          <div className="profile-image-container">
            <div className="profile-image">
              <div className="profile-image-inner">
                <img src="/roni.jpeg" alt="Abdul Rahman - Front-End Developer" />
              </div>
              <div className="profile-shine"></div>
            </div>
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;