import React from 'react';
import './footer.css';
import MyFace from '../../assets/my-face.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__title">
          <img src={MyFace} alt="My Face" className="footer__logo-img" />
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
            href="https://github.com/Adewale-1" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/adewaleadenle" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a 
            href="https://twitter.com/AdenleAdewale2" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          © {new Date().getFullYear()} Adewale Adenle. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer; 