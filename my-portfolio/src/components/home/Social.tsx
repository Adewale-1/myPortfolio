import React from 'react';

const Social: React.FC = () => {
  return (
    <div className="home__social">
      <a 
        href="https://github.com/Adewale-1" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github"></i>
      </a>

      <a 
        href="https://www.linkedin.com/in/adewaleadenle/" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a 
        href="https://twitter.com/AdenleAdewale2" 
        className="home__social-link" 
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <i className="uil uil-twitter"></i>
      </a>
      
      <a 
        href="mailto:waleadenle1@gmail.com" 
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