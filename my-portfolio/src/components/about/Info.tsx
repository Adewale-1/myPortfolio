import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Ohio State & Cornell</span>
      </div>

      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">AI & Full-Stack Dev</span>
      </div>

      <div className="about__box">
        <i className="uil uil-code-branch about__icon"></i>
        <h3 className="about__title">Tech Stack</h3>
        <span className="about__subtitle">Python, JS, Java, React</span>
      </div>
    </div>
  );
};

export default Info; 