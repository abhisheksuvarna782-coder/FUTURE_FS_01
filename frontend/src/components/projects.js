import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'HealVision AI',
      description: 'An intelligent health partner application that provides AI-powered health insights and personalized wellness recommendations. Features include symptom analysis, health tracking, and expert medical guidance.',
      technologies: ['React', 'AI/ML', 'Node.js', 'MongoDB']
    },
    {
      title: 'Weather Application',
      description: 'A responsive weather forecast application that displays real-time weather data, forecasts, and interactive weather maps using third-party API integration with a clean user interface.',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5']
    },
    {
      title: 'Advanced Calculator',
      description: 'A feature-rich calculator application with standard arithmetic operations, scientific functions, and a user-friendly interface designed for both basic and advanced calculations.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I've built to enhance my development skills and solve real-world problems.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;