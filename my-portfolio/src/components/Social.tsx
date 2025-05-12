import React from 'react';

const Social: React.FC = () => {
  return (
    <div className="home__social">
      <a 
        href="https://github.com/" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github"></i>
      </a>

      <a 
        href="https://linkedin.com/" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a 
        href="https://twitter.com/" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <i className="uil uil-twitter"></i>
      </a>
      
      <a 
        href="mailto:email@example.com" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social; 