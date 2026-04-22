import React from 'react';
import './Home.css';

const Home = () => {
  const skills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'C++', icon: '⚡', level: 85 },
    { name: 'React', icon: '⚛️', level: 88 },
    { name: 'Machine Learning', icon: '🤖', level: 82 },
    { name: 'Data Analysis', icon: '📊', level: 85 },
    { name: 'SQL', icon: '🗄️', level: 80 },
    { name: 'JavaScript', icon: '📜', level: 85 },
    { name: 'Git', icon: '🔧', level: 78 }
  ];

  const researchInterests = [
    { title: 'Artificial Intelligence', icon: '🧠', desc: 'Developing intelligent systems and algorithms' },
    { title: 'Machine Learning', icon: '📈', desc: 'Deep learning, neural networks, and predictive models' },
    { title: 'Data Science', icon: '💡', desc: 'Data-driven insights and visualization' },
    { title: 'NLP', icon: '💬', desc: 'Natural Language Processing and text analytics' },
    { title: 'Software Development', icon: '💻', desc: 'Full-stack development and system design' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">Your Name</h1>
            <h2 className="hero-title">B.Tech AI Student</h2>
            <p className="hero-description">
              Passionate third-year Artificial Intelligence student at Gitam University 
              with a strong foundation in machine learning, data science, and software development. 
              Dedicated to building innovative AI solutions and contributing to cutting-edge research.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="mailto:your.email@gitam.in" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="image-glow"></div>
            <div className="profile-image-wrapper">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio&backgroundColor=6366f1" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
            <div className="hero-badges">
              <span className="badge">🎓 B.Tech AI</span>
              <span className="badge">📚 3rd Year</span>
              <span className="badge">🚀 Gitam University</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-icon">👨‍🎓</span>
            About Me
          </h2>
          <div className="about-content">
            <div className="about-card">
              <p className="about-text">
                I am a motivated third-year B.Tech student specializing in Artificial Intelligence at Gitam University. 
                With a strong academic foundation and practical project experience, I aim to bridge the gap between 
                theoretical AI concepts and real-world applications. My journey includes working on machine learning 
                models, data analysis projects, and developing intelligent web applications.
                <br /><br />
                I am actively seeking internship opportunities to apply my skills in professional environments, 
                contribute to meaningful projects, and learn from industry experts. My goal is to become a proficient 
                AI engineer who can develop solutions that positively impact society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-icon">🔬</span>
            Research Interests
          </h2>
          <div className="research-grid">
            {researchInterests.map((interest, index) => (
              <div key={index} className="research-card" style={{animationDelay: `${index * 0.1}s`}}>
                <span className="research-icon">{interest.icon}</span>
                <h3 className="research-title">{interest.title}</h3>
                <p className="research-desc">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-icon">💎</span>
            Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-icon">📬</span>
            Personal Details
          </h2>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📱</span>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <a href="tel:+919999999999" className="contact-value">+91 99999 99999</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <span className="contact-label">Personal Email</span>
                <a href="mailto:your.email@gmail.com" className="contact-value">your.email@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🎓</span>
              <div className="contact-info">
                <span className="contact-label">College Email</span>
                <a href="mailto:your.email@gitam.in" className="contact-value">your.email@gitam.in</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🌐</span>
              <div className="contact-info">
                <span className="contact-label">Location</span>
                <span className="contact-value">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 Your Name. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;