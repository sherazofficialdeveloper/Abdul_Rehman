import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const animateSkillProgress = () => {
    const circularProgressElements = document.querySelectorAll('.circle-progress-fill');

    circularProgressElements.forEach(element => {
      const percentage = parseInt(element.getAttribute('data-percentage'));
      const degree = (percentage / 100) * 360;

      // Reset to 0
      element.style.transition = 'none';
      element.style.transform = 'rotate(0deg)';

      // Force reflow to reset
      void element.offsetWidth;

      // Animate to final position over 2 seconds
      element.style.transition = 'transform 2s ease-out';

      if (element === element.parentElement.firstElementChild) {
        // First half (0-180 degrees)
        if (degree <= 180) {
          element.style.transform = `rotate(${degree}deg)`;
        } else {
          element.style.transform = 'rotate(180deg)';
        }
      } else {
        // Second half (180-360 degrees)
        if (degree > 180) {
          element.style.transform = `rotate(${degree}deg)`;
        } else {
          element.style.transform = 'rotate(180deg)';
        }
      }

      element.classList.add('animated');
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillProgress();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSkillsRef = skillsRef.current;
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    // Initial animation
    setTimeout(animateSkillProgress, 100);

    return () => {
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  const skillsData = [
    {
      percentage: 95,
      level: 'Expert',
      title: 'React.js',
      description: 'Building complex, interactive UIs with React hooks, context API, and state management.',
      technologies: ['React', 'Next.js', 'Redux', 'React Router']
    },
    {
      percentage: 92,
      level: 'Advanced',
      title: 'JavaScript',
      description: 'Modern ES6+ JavaScript, asynchronous programming, and functional programming concepts.',
      technologies: ['ES6+', 'Promises', 'Async/Await', 'TypeScript']
    },
    {
      percentage: 90,
      level: 'Expert',
      title: 'HTML & CSS',
      description: 'Semantic HTML, modern CSS layouts, animations, and responsive design principles.',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'SASS']
    },
    {
      percentage: 85,
      level: 'Advanced',
      title: 'UI Libraries',
      description: 'Implementing beautiful interfaces with popular component libraries and frameworks.',
      technologies: ['Material-UI', 'Tailwind', 'Bootstrap', 'Framer Motion']
    },
    {
      percentage: 88,
      level: 'Advanced',
      title: 'Performance',
      description: 'Optimizing web applications for speed, accessibility, and search engines.',
      technologies: ['Lazy Loading', 'Code Splitting', 'SEO', 'Web Vitals']
    },
    {
      percentage: 90,
      level: 'Expert',
      title: 'Tools & Workflow',
      description: 'Efficient development workflow with modern tools and version control.',
      technologies: ['Git', 'Webpack', 'Vite', 'npm/yarn', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="section skills-section" ref={skillsRef}>
      <div className="container-custom">
        <h2>
          My Expertise
        </h2>
        <p className="skills-description">
          Specialized in front-end development with a focus on React.js and modern JavaScript technologies
        </p>

        <div className="skills-circular-container">
          {skillsData.map((skill, index) => (
            <div className="skill-circle-card" key={index}>
              <div className="circle-container">
                <div className="circle-bg">
                  <div className="circle-progress">
                    <div className="circle-progress-fill" data-percentage={skill.percentage}></div>
                    <div className="circle-progress-fill" data-percentage={skill.percentage}></div>
                  </div>
                  <div className="circle-mask">
                    <div className="skill-percentage">
                      {skill.percentage}%
                    </div>
                    <div className="skill-label">
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-info">
                <h3 className="gradient-text">
                  {skill.title}
                </h3>
                <p>
                  {skill.description}
                </p>

                <div className="skill-technologies">
                  {skill.technologies.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>
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

export default Skills;