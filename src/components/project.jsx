import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      image: '/hamme.png',
      title: 'Hamme.com.pk',
      description: 'E-commerce platform for local products with shopping cart and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'JavaScript', 'Ajax'],
      liveLink: 'https://www.hamme.com.pk/'
    },
    {
      image: '/textreturn.png',
      title: 'TaxReturnFilers.com',
      description: 'Professional tax filing service website with clean UI and user-friendly forms.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://taxreturnfilers.com/'
    },
    {
      image: '/WanFinancials.png',
      title: 'WanFinancials.com',
      description: 'Financial consulting firm website with professional layout and service showcases.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://wanfinancials.com/'
    },
    {
      image: '/ENMA.png',
      title: 'ENMA-BH.com',
      description: 'Business consultancy website with multilingual support and corporate design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://enma-bh.com/'
    },
    {
      image: '/haskir.png',
      title: 'Haskir.com',
      description: 'Service-based platform connecting customers with local service providers.',
      technologies: ['.NET', 'SQL Server', 'Angular', 'Azure', 'next.js'],
      liveLink: 'https://haskir.com'
    },
    {
      image: '/InstantHomeOffers.png',
      title: 'InstantHomeOffers.co.uk',
      description: 'UK property investment website with property listings and investment calculators.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://instanthomeoffers.co.uk/'
    },
    {
      image: '/GallifordTry.png',
      title: 'GallifordTry.co.uk',
      description: 'Construction company website with project portfolio and company information.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://www.gallifordtry.co.uk/'
    },
    {
      image: '/StarSecurityUAE.png',
      title: 'StarSecurityUAE.com',
      description: 'Security services website for UAE market with service details and contact forms.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
      liveLink: 'https://starsecurityuae.com/'
    },
    {
      image: '/Sofodynamix.png',
      title: 'Sofodynamix.com',
      description: 'Software development company website showcasing services and technologies.',
      technologies: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
      liveLink: 'https://sofodynamix.com/'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="gradient-text">
          Modern Digital Solutions
        </h2>
        <p className="section-subtitle">
          A portfolio of successful projects delivering measurable results for clients across industries
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="card project-card" key={index}>
              <div className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3 className="gradient-text">
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  marginBottom: '15px',
                  lineHeight: '1.5',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: '20px'
                }}>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-block',
                      padding: '10px 24px',
                      background: 'linear-gradient(90deg, #00FFF0, #FF00D4)',
                      color: '#000000',
                      textDecoration: 'none',
                      borderRadius: '30px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                      textAlign: 'center',
                      minWidth: '140px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 240, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Live Website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;