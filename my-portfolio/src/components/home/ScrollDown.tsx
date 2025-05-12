import React from 'react';

const ScrollDown: React.FC = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <div className="home__scroll-mouse">
          <div className="home__scroll-wheel"></div>
        </div>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown; 