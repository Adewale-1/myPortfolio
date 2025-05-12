import React, { useState, useEffect } from 'react';
import './scrollup.css';

const ScrollUp: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 560) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <a href="#home" className={show ? "scrollup show-scroll" : "scrollup"}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp; 