import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTop from './components/backtotop';
import Skills from './components/skill';
import Services from './components/services';
import Projects from './components/project';
import Testimonials from './components/testimonial';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;