import React, { useRef, useEffect } from 'react';

const Testimonials = () => {
  const testimonialScrollRef = useRef(null);

  useEffect(() => {
    const testimonialScroll = testimonialScrollRef.current;

    const handleMouseEnter = () => {
      if (testimonialScroll) {
        testimonialScroll.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      if (testimonialScroll) {
        testimonialScroll.style.animationPlayState = 'running';
      }
    };

    if (testimonialScroll) {
      testimonialScroll.addEventListener('mouseenter', handleMouseEnter);
      testimonialScroll.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (testimonialScroll) {
        testimonialScroll.removeEventListener('mouseenter', handleMouseEnter);
        testimonialScroll.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const testimonialsData = [
    {
      text: "Abdul transformed our outdated website into a modern, responsive React application. The user experience has improved dramatically, and our bounce rate has decreased by 40%.",
      author: "Michael Chen, Product Manager at TechStart"
    },
    {
      text: "Working with Abdul was a pleasure. He delivered our e-commerce platform ahead of schedule and the code is clean, well-documented, and easy to maintain.",
      author: "Sarah Johnson, CEO at UrbanStyle"
    },
    {
      text: "The dashboard Abdul built for our analytics team has revolutionized how we track performance. The interface is intuitive and the real-time updates are seamless.",
      author: "David Rodriguez, CTO at DataFlow"
    },
    {
      text: "Abdul's expertise in React and modern JavaScript is outstanding. He optimized our application's performance, reducing load times by 60%.",
      author: "Emily Watson, Project Manager at InnovateCo"
    },
    {
      text: "I've worked with many front-end developers, but Abdul stands out for his attention to detail and commitment to best practices. Highly recommended!",
      author: "James Wilson, Lead Developer at CreativeLabs"
    },
    {
      text: "The mobile app Abdul developed for our startup is flawless. Users love the smooth animations and responsive design.",
      author: "Aisha Khan, Founder at FitPro"
    }
  ];

  return (
    <section id="testimonials" className="section testimonial-section">
      <div className="container-custom">
        <h2>
          Client Testimonials
        </h2>
        <p className="section-subtitle">
          What clients and colleagues say about working with me
        </p>

        <div className="card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <div className="terminal-title">
              testimonials.log
            </div>
          </div>

          <div className="terminal-content">
            <div className="testimonial-scroll" ref={testimonialScrollRef}>
              {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <p className="testimonial-author">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;