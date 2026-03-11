import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <a href="#home" className="footer-logo">Abdul Rahman</a>
              <p className="footer-tagline">
                Front-End Developer specializing in React.js and JavaScript. 
                Creating responsive, performant, and user-friendly web applications 
                with modern technologies and best practices.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/abdul-rahman-7637b9371?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon-footer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/share/1Cc4De3zhS/" className="social-icon-footer" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/rajputofficial78?igsh=MTU0aWhvczF3MWJmMg==" className="social-icon-footer" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/923317451076" className="social-icon-footer" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
                <li><a href="#skills"><i className="fas fa-chevron-right"></i> Skills</a></li>
                <li><a href="#services"><i className="fas fa-chevron-right"></i> Services</a></li>
                <li><a href="#projects"><i className="fas fa-chevron-right"></i> Projects</a></li>
                <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul className="footer-links-list">
                <li><a href="#services"><i className="fas fa-code"></i> React Development</a></li>
                <li><a href="#services"><i className="fas fa-mobile-alt"></i> Responsive Design</a></li>
                <li><a href="#services"><i className="fas fa-paint-brush"></i> UI Implementation</a></li>
                <li><a href="#services"><i className="fas fa-shopping-cart"></i> E-Commerce Frontend</a></li>
                <li><a href="#services"><i className="fas fa-tachometer-alt"></i> Performance Optimization</a></li>
                <li><a href="#services"><i className="fas fa-code-branch"></i> Code Architecture</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact Info</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="footer-contact-details">
                    <h4>Location</h4>
                    <p>Lahore, Pakistan<br />Available Worldwide</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="footer-contact-details">
                    <h4>Email</h4>
                    <p>abdulrahmanofficial258@gmail.com</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="footer-contact-details">
                    <h4>Phone</h4>
                    <p>+92 331 7451076<br />Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="footer-newsletter">
                <h3 style={{ marginTop: '25px', marginBottom: '15px' }}>Newsletter</h3>
                <form className="newsletter-form" onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.querySelector('.newsletter-input').value;
                  
                  const notification = document.createElement('div');
                  notification.className = 'notification';
                  notification.innerHTML = `
                    <div class="notification-content">
                      <div class="notification-icon">
                        <i class="fas fa-check"></i>
                      </div>
                      <div>
                        <h4>Subscribed!</h4>
                        <p>Thank you for subscribing with <strong>${email}</strong>. You'll receive updates on my latest projects and insights.</p>
                      </div>
                    </div>
                  `;

                  document.body.appendChild(notification);
                  e.target.reset();

                  setTimeout(() => {
                    notification.classList.add('slide-out');
                    setTimeout(() => {
                      if (notification.parentNode) {
                        document.body.removeChild(notification);
                      }
                    }, 300);
                  }, 5000);
                }}>
                  <input type="email" className="newsletter-input" placeholder="Your Email" required />
                  <button type="submit" className="newsletter-btn">
                    <i className="fas fa-paper-plane"></i> Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Abdul Rahman. All rights reserved. | Crafted with <i className="fas fa-heart" style={{ color: '#FF00D4' }}></i> using React.js
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookies</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;