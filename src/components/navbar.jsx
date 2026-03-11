import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveLink(id);
      setMobileMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '20px 0',
      transition: 'all 0.3s ease',
      background: theme === 'light' ? 'rgba(248, 249, 250, 0.9)' : 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(10px, 3vw, 20px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleNavClick(e, 'home')}
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00FFF0, #FF00D4)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textDecoration: 'none'
          }}
        >
          Abdul Rahman
        </a>

        <div className="mobile-controls" style={{
          display: 'none',
          alignItems: 'center',
          gap: '15px'
        }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <div 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              zIndex: 1001,
              width: '30px',
              height: '24px',
              justifyContent: 'space-between'
            }}
          >
            <span style={{
              width: '100%',
              height: '3px',
              background: theme === 'light' ? '#FF00D4' : '#00FFF0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '100%',
              height: '3px',
              background: theme === 'light' ? '#FF00D4' : '#00FFF0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '100%',
              height: '3px',
              background: theme === 'light' ? '#FF00D4' : '#00FFF0',
              transition: 'all 0.3s ease'
            }}></span>
          </div>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={{
          display: 'flex',
          listStyle: 'none',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {navItems.map(item => (
            <li key={item.id} style={{
              marginLeft: 'clamp(10px, 2vw, 40px)'
            }}>
              <a 
                href={`#${item.id}`} 
                className={activeLink === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  color: activeLink === item.id ? '#FF00D4' : (theme === 'light' ? '#1A1A1A' : '#DFFBFF'),
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
                {activeLink === item.id && (
                  <span style={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#FF00D4'
                  }}></span>
                )}
              </a>
            </li>
          ))}
          <li style={{
            marginLeft: 'clamp(10px, 2vw, 40px)'
          }}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .mobile-controls {
            display: flex !important;
          }
          .nav-links {
            display: none;
            position: fixed;
            top: 0;
            right: ${mobileMenuOpen ? '0' : '-100%'};
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background: ${theme === 'light' ? 'rgba(248, 249, 250, 0.98)' : 'rgba(0, 0, 0, 0.98)'};
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            transition: right 0.6s ease;
            z-index: 1000;
            padding: 100px 20px 30px;
            overflow-y: auto;
          }
          body.light-mode .nav-links {
            background: rgba(248, 249, 250, 0.98);
          }
          .nav-links.active {
            display: flex !important;
            right: 0;
          }
          .nav-links li {
            margin: 15px 0 !important;
            width: 100%;
            text-align: center;
          }
          .nav-links a {
            font-size: 1.1rem !important;
            padding: 12px 20px;
            display: block;
            width: 100%;
            text-align: center;
            border-radius: 8px;
          }
          .nav-links .theme-toggle {
            display: none;
          }
          .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 6px);
          }
          .hamburger.active span:nth-child(2) {
            opacity: 0;
          }
          .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }
          .theme-toggle {
            margin-left: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;