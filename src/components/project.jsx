import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      image: '/image1.jpg',
      title: 'Nexus Financial Platform',
      description: 'Comprehensive financial management dashboard with real-time analytics, investment tracking, and automated reporting for a financial services client.',
      technologies: ['Website Development', 'App Development', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      image: '/image2.jpg',
      title: 'UrbanStyle Fashion Store',
      description: 'Complete e-commerce solution for a fashion retailer with advanced product filtering, size recommendations, and AR try-on features.',
      technologies: ['E-Commerce', 'Website Development', 'Shopify', 'React', 'Payment Integration']
    },
    {
      image: '/image3.jpg',
      title: 'HealthTrack Mobile App',
      description: 'Health monitoring application with medication reminders, symptom tracking, and doctor appointment scheduling for healthcare providers.',
      technologies: ['App Development', 'React Native', 'Healthcare', 'AWS', 'Push Notifications']
    },
    {
      image: '/image4.jpg',
      title: 'BrandVibe Identity Package',
      description: 'Complete brand identity development including logo design, brand guidelines, marketing collateral, and social media templates for a tech startup.',
      technologies: ['Graphic Design', 'Branding', 'Adobe Creative Suite', 'Figma', 'Marketing Materials']
    },
    {
      image: '/image5.jpg',
      title: 'EduTech Learning Platform',
      description: 'Interactive educational platform with video courses, progress tracking, and certification system for online learning institutions.',
      technologies: ['Website Development', 'Video Editing', 'LMS', 'React', 'MongoDB']
    },
    {
      image: '/image6.jpg',
      title: 'TravelEase Booking System',
      description: 'Complete travel booking platform with hotel reservations, flight booking, itinerary planning, and real-time availability updates.',
      technologies: ['Website Development', 'E-Commerce', 'Payment Gateway', 'API Integration', 'MongoDB']
    },
    {
      image: '/image7.jpg',
      title: 'FitPro Mobile Application',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition logging, progress analytics, and social sharing features for health enthusiasts.',
      technologies: ['App Development', 'Digital Marketing', 'Flutter', 'Firebase', 'Social Integration']
    },
    {
      image: '/image8.jpg',
      title: 'PropertyView Real Estate',
      description: 'Advanced property listing platform with virtual tours, mortgage calculators, agent matching, and neighborhood insights for real estate agencies.',
      technologies: ['Website Development', 'Graphic Design', 'VR Integration', 'Vue.js', 'Google Maps API']
    },
    {
      image: '/image9.jpg',
      title: 'RestoManage POS System',
      description: 'Complete restaurant management solution with table reservations, inventory tracking, staff management, and customer loyalty programs.',
      technologies: ['App Development', 'Website Development', 'React Native', 'Node.js', 'Inventory Management']
    },
    {
      image: '/image10.jpg',
      title: 'Corporate Brand Video Series',
      description: 'Complete video production package including company profile videos, product demonstrations, and social media advertisements for B2B clients.',
      technologies: ['Video Editing', 'Digital Marketing', 'Premiere Pro', 'After Effects', 'Motion Graphics']
    },
    {
      image: '/image11.jpg',
      title: 'LuxeBeauty E-Commerce Redesign',
      description: 'Complete website redesign with improved user experience, faster load times, enhanced product visualization, and integrated marketing tools.',
      technologies: ['E-Commerce', 'Website Development', 'UI/UX Design', 'Performance Optimization', 'Analytics']
    },
    {
      image: '/image12.jpg',
      title: 'GrowthBoost Marketing Campaign',
      description: 'Comprehensive digital marketing campaign including SEO optimization, social media management, PPC advertising, and conversion rate optimization.',
      technologies: ['Digital Marketing', 'SEO', 'Social Media', 'Google Ads', 'Analytics']
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;