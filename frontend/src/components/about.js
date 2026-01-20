import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated Full Stack Web Developer with a passion for creating 
              innovative and user-friendly web applications. Currently pursuing my 
              internship at Future Interns, I'm constantly learning and expanding 
              my skill set.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, 
              I enjoy tackling challenging problems and transforming ideas into 
              elegant solutions. I believe in writing clean, maintainable code 
              and following best practices.
            </p>
            <p>
              When I'm not coding, I enjoy staying updated with the latest web 
              development trends, contributing to open-source projects, and 
              collaborating with fellow developers.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>Education</h3>
              <p>B.E in Computer Science and Engineering(AIML)</p>
            </div>
            <div className="highlight-item">
              <h3>Focus</h3>
              <p>Full Stack Development</p>
            </div>
            <div className="highlight-item">
              <h3>Internship</h3>
              <p>Future Interns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;