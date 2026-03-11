import React from 'react';

const Services = () => {
  const servicesData = [
    {
      number: '01',
      icon: 'fa-code',
      title: 'React Development',
      description: 'Custom React applications with modern hooks, context API, and optimized performance for seamless user experiences.',
      technologies: ['React', 'Next.js', 'Redux']
    },
    {
      number: '02',
      icon: 'fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Mobile-first responsive websites that work flawlessly across all devices and screen sizes.',
      technologies: ['Flexbox', 'Grid', 'Media Queries']
    },
    {
      number: '03',
      icon: 'fa-paint-brush',
      title: 'UI Implementation',
      description: 'Pixel-perfect implementation of UI designs with attention to detail and smooth animations.',
      technologies: ['Figma', 'Tailwind', 'Framer Motion']
    },
    {
      number: '04',
      icon: 'fa-shopping-cart',
      title: 'E-Commerce Frontend',
      description: 'Interactive e-commerce interfaces with product filtering, cart management, and checkout flows.',
      technologies: ['React', 'Context API', 'Payment UI']
    },
    {
      number: '05',
      icon: 'fa-tachometer-alt',
      title: 'Performance Optimization',
      description: 'Optimizing web applications for fast loading times and smooth interactions.',
      technologies: ['Lazy Loading', 'Code Splitting', 'Caching']
    },
    {
      number: '06',
      icon: 'fa-code-branch',
      title: 'Code Architecture',
      description: 'Clean, maintainable code structure with reusable components and efficient state management.',
      technologies: ['Component Design', 'Hooks', 'Custom Hooks']
    }
  ];

  return (
    <section id="services" className="section services-section py-10">
      <div className="container-custom">
        <h2>
          My Services
        </h2>
        <p className="section-subtitle">
          Professional front-end development services tailored to your project needs
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card-redesigned" key={index}>
              <div className="service-number">
                {service.number}
              </div>
              <div className="service-icon-container">
                <div className="service-icon-bg"></div>
                <div className="service-icon-redesigned">
                  <i className={`fas ${service.icon}`}></i>
                </div>
              </div>
              <h3>
                {service.title}
              </h3>
              <p>
                {service.description}
              </p>
              <div className="service-tech">
                {service.technologies.map((tech, idx) => (
                  <span className="service-tech-badge" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;