import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">
          <i class="fas fa-check"></i>
        </div>
        <div>
          <h4>Message Sent!</h4>
          <p>Thank you for reaching out!</p>
        </div>
      </div>
      <div class="notification-details">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><i class="fas fa-clock"></i> I'll respond within 24 hours</p>
      </div>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    `;

    document.body.appendChild(notification);

    notification.querySelector('.notification-close').addEventListener('click', function () {
      notification.classList.add('slide-out');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      if (notification.parentNode) {
        notification.classList.add('slide-out');
        setTimeout(() => {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 8000);
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">
          <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        </div>
        <div>
          <h4>${type === 'error' ? 'Error' : 'Success'}</h4>
          <p>${message}</p>
        </div>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('slide-out');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2>
          Get In Touch
        </h2>
        <p className="section-subtitle">
          Interested in collaborating? Let's discuss your project and create something amazing together.
        </p>

        <div className="contact-container-redesigned">
          <div className="contact-form-redesigned">
            <div className="form-header">
              <h3>
                Let's Work Together
              </h3>
              <p>
                Fill out the form below and I'll get back to you within 24 hours to discuss your requirements.
              </p>
            </div>

            <form className="contact-form-redesigned" id="contactFormRedesigned" onSubmit={handleSubmit}>
              <div className="form-group-redesigned">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="form-icon">
                  <i className="fas fa-user-check"></i>
                </div>
              </div>

              <div className="form-group-redesigned">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="form-icon">
                  <i className="fas fa-at"></i>
                </div>
              </div>

              <div className="form-group-redesigned">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i> Subject
                </label>
                <select id="subject" required value={formData.subject} onChange={handleChange}>
                  <option value="">Select a subject</option>
                  <option value="react-development">React Development</option>
                  <option value="frontend-consulting">Front-End Consulting</option>
                  <option value="project-collaboration">Project Collaboration</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
                <div className="form-icon">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>

              <div className="form-group-redesigned">
                <label htmlFor="message">
                  <i className="fas fa-comment-alt"></i> Project Details
                </label>
                <textarea 
                  id="message" 
                  placeholder="Tell me about your project requirements, timeline, and goals..." 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="form-icon">
                  <i className="fas fa-pen"></i>
                </div>
              </div>

              <div className="submit-btn-container">
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info-redesigned">
            <div className="contact-card">
              <div className="contact-icon-container">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="contact-details">
                <h3>
                  Email
                </h3>
                <p>
                  Preferred contact method for project discussions
                </p>
                <a href="mailto:abdulrahmanofficial258@gmail.com">
                  abdulrahmanofficial258@gmail.com
                </a>
                <div className="availability-badge">
                  <i className="fas fa-clock"></i>
                  <span>Response time: 2-4 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-container">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-details">
                <h3>
                  Phone & WhatsApp
                </h3>
                <p>
                  Available for urgent queries and quick consultations
                </p>
                <a href="tel:+923317451076">
                  +92 331 7451076
                </a>
                <div className="contact-social">
                  <a href="https://wa.me/923317451076" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="tel:+923317451076" aria-label="Call">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="sms:+923317451076" aria-label="SMS">
                    <i className="fas fa-sms"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-container">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>
                  Location & Hours
                </h3>
                <p>
                  Lahore, Pakistan
                </p>
                <p>
                  Available for remote work worldwide
                </p>
                <p>
                  <strong>Business Hours:</strong> Mon-Fri, 9AM-6PM PKT
                </p>
                <div className="contact-social">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;