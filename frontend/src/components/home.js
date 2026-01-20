import React from 'react';

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Abhishek Suvarna</h1>
            <p className="hero-title">Full Stack Web Developer Intern</p>
            <p className="hero-description">
              Passionate about building modern web applications with clean code and exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;