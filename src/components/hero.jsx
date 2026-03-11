import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Abdul Rahman
            </h1>
            <p className="hero-subtitle">
              Front-End Developer specializing in React.js and JavaScript. 
              I create responsive, high-performance web applications with 
              modern UI/UX principles and clean, maintainable code.
            </p>
            <div className="hero-btns">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                View My Work
              </a>
              <a 
                href="https://wa.me/923317451076?text=Hello%20Abdul!%20I%20want%20to%20discuss%20your%20portfolio."
                className="btn btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image">
              <div className="hero-image-inner">
                {/* Profile image with correct path and alt text */}
                <img src="/a rehman.jpeg" alt="Abdul Rahman - Front-End Developer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;