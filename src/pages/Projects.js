import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Student Performance Prediction',
      description: 'A machine learning model that predicts student academic performance based on various demographic and academic features. Built using Python, Scikit-learn, and Pandas for data preprocessing.',
      techStack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/yourusername/student-performance-prediction',
      highlight: true
    },
    {
      id: 2,
      title: 'IPL Data Analysis & Visualization',
      description: 'Comprehensive Exploratory Data Analysis (EDA) of IPL cricket data with interactive visualizations. Includes player statistics, team performance metrics, and match insights using Python and visualization libraries.',
      techStack: ['Python', 'EDA', 'Matplotlib', 'Seaborn', 'Pandas', 'Power BI'],
      github: 'https://github.com/yourusername/ipl-data-analysis',
      highlight: false
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with React and React Router. Features glassmorphism UI design, smooth animations, and HashRouter for GitHub Pages deployment.',
      techStack: ['React', 'React Router', 'CSS3', 'Glassmorphism', 'GitHub Pages'],
      github: 'https://github.com/yourusername/portfolio',
      highlight: false
    },
    {
      id: 4,
      title: 'Sentiment Analysis Tool',
      description: 'NLP-powered sentiment analysis application that processes customer reviews and provides sentiment scores. Uses natural language processing techniques for text classification and insight extraction.',
      techStack: ['Python', 'NLP', 'NLTK', 'TextBlob', 'Flask'],
      github: 'https://github.com/yourusername/sentiment-analysis',
      highlight: false
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <span className="projects-badge">💼 My Work</span>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-description">
            Showcasing real-world applications of AI, Machine Learning, and Software Development skills. 
            Each project demonstrates practical problem-solving and technical implementation.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.highlight ? 'highlight' : ''}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="project-card-inner">
                  <div className="project-header">
                    <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-github-link"
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-2.587 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Interested in Collaborating?</h2>
          <p className="cta-description">
            Feel free to reach out if you'd like to discuss projects, opportunities, or just to say hello!
          </p>
          <a href="mailto:likithanelluri303@gmail.com" className="cta-button">
            Get In Touch
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 N. Likitha. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/likithanelluri303-gif" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/likitha-nelluri-934456333" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://leetcode.com/u/f7zat4DZST" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;