import React, { useRef, useEffect } from 'react';

const Team = () => {
  const teamScrollRef = useRef(null);

  useEffect(() => {
    const teamScrollContainer = teamScrollRef.current;

    const handleMouseEnter = () => {
      if (teamScrollContainer) {
        teamScrollContainer.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      if (teamScrollContainer) {
        teamScrollContainer.style.animationPlayState = 'running';
      }
    };

    if (teamScrollContainer) {
      teamScrollContainer.addEventListener('mouseenter', handleMouseEnter);
      teamScrollContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (teamScrollContainer) {
        teamScrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        teamScrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="team" className="section team-section">
      <div className="container-custom">
        <h2>
          Our Digital Experts
        </h2>
        <p className="section-subtitle">
          Meet the talented professionals dedicated to delivering exceptional digital solutions
        </p>

        <div className="team-scroll-container" ref={teamScrollRef}>
          {/* Team Card 1 - Inshal Fatima */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/inshal.jpg" alt="Inshal Fatima" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Inshal Fatima</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Senior Web Developer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Leads frontend development with expertise in React and modern JavaScript frameworks, creating responsive, high-performance websites.</p>
          </div>

          {/* Team Card 2 - Ayesha Khan */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/Ayesha.jpeg" alt="Ayesha Khan" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Ayesha Khan</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Mobile App Developer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Specializes in cross-platform mobile development using React Native and Flutter, delivering native-like app experiences.</p>
          </div>

          {/* Team Card 3 - Khalil Ahmad */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/khalil.jpg" alt="Khalil Ahmad" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Khalil Ahmad</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Lead UI/UX Designer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Creates intuitive, user-centered designs and prototypes that enhance engagement and drive conversion across digital platforms.</p>
          </div>

          {/* Team Card 4 - Aiza Meo */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/Aiza Designer.jpeg" alt="Aiza Meo" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Aiza Meo</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Graphic Design Specialist</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Develops compelling visual identities, marketing materials, and brand  that communicate client values effectively.</p>
          </div>

          {/* Team Card 5 - Sheraz Ali */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/sheraz ali.jpeg" alt="Sheraz Ali" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Sheraz Ali</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Video Production Lead</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Directs video production and editing for marketing campaigns, corporate communications, and social media content.</p>
          </div>

          {/* DUPLICATE SET FOR INFINITE SCROLL */}
          {/* Team Card 1 - Inshal Fatima (Duplicate) */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/inshal.jpg" alt="Inshal Fatima" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Inshal Fatima</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Senior Web Developer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Leads frontend development with expertise in React and modern JavaScript frameworks, creating responsive, high-performance websites.</p>
          </div>

          {/* Team Card 2 - Ayesha Khan (Duplicate) */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/Ayesha.jpeg" alt="Ayesha Khan" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Ayesha Khan</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Mobile App Developer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Specializes in cross-platform mobile development using React Native and Flutter, delivering native-like app experiences.</p>
          </div>

          {/* Team Card 3 - Khalil Ahmad (Duplicate) */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/khalil.jpg" alt="Khalil Ahmad" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Khalil Ahmad</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Lead UI/UX Designer</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Creates intuitive, user-centered designs and prototypes that enhance engagement and drive conversion across digital platforms.</p>
          </div>

          {/* Team Card 4 - Aiza Meo (Duplicate) */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/Aiza Designer.jpeg" alt="Aiza Meo" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Aiza Meo</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Graphic Design Specialist</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Develops compelling visual identities, marketing materials, and brand assets that communicate client values effectively.</p>
          </div>

          {/* Team Card 5 - Sheraz Ali (Duplicate) */}
          <div className="team-card card">
            <div className="team-img">
              <div className="team-img-inner">
                <img src="/sheraz ali.jpeg" alt="Sheraz Ali" loading="lazy" />
              </div>
            </div>
            <h3 className="gradient-text">Sheraz Ali</h3>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00FFF0', marginBottom: '10px' }}>Video Production Lead</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>Directs video production and editing for marketing campaigns, corporate communications, and social media content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;