import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm currently open to internship opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:your.email@example.com">abhisheksuvarna782@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+918891164684">+91 8891164684</a></p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abhishek-1bb2b6335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a></p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">https://github.com/abhisheksuvarna782-coder</a></p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;