import React, { useState, useEffect, useCallback } from 'react';
import './header.css';
import MyFace from '../../assets/my-face.png';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>('#home');
  const [showScrollHeader, setShowScrollHeader] = useState<boolean>(false);
  const { darkMode, toggleTheme } = useTheme();

  // Handle smooth scrolling for navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveNav(sectionId);
    setToggle(false); // Close mobile menu if open
    
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      // Get position of the section accounting for header
      const headerElement = document.querySelector('.header');
      const headerHeight = headerElement ? (headerElement as HTMLElement).offsetHeight : 0;
      const targetPosition = (targetSection as HTMLElement).offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Debounce function to limit how often the scroll handler fires
  const debounce = (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    // Toggle scroll header class based on scroll position
    if (scrollY >= 80) {
      setShowScrollHeader(true);
    } else {
      setShowScrollHeader(false);
    }
    
    // Find the section that takes up the most screen space
    let maxVisibleSection = null;
    let maxVisibleHeight = 0;
    
    sections.forEach(section => {
      const htmlSection = section as HTMLElement;
      const sectionHeight = htmlSection.offsetHeight;
      const sectionTop = htmlSection.offsetTop - 70; // Adjust offset for header
      const sectionId = section.getAttribute('id') || '';
      
      // Calculate how much of the section is visible in the viewport
      const viewportHeight = window.innerHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const visibleTop = Math.max(sectionTop, scrollY);
      const visibleBottom = Math.min(sectionBottom, scrollY + viewportHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        maxVisibleSection = sectionId;
      }
    });
    
    if (maxVisibleSection) {
      setActiveNav(`#${maxVisibleSection}`);
    }
  }, []);
  
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 10);
    
    window.addEventListener('scroll', debouncedHandleScroll);
    // Set initial active section on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={showScrollHeader ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={MyFace} alt="My Face" className="nav__logo-img" />
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')} 
                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, '#skills')}
                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#experience"
                onClick={(e) => handleNavClick(e, '#experience')} 
                className={activeNav === '#experience' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Experience
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')} 
                className={activeNav === '#projects' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')} 
                className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
        </div>

        <div className="nav__buttons">
          <button 
            className="theme__toggle" 
            onClick={toggleTheme} 
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={`uil ${darkMode ? 'uil-sun' : 'uil-moon'}`}></i>
          </button>
          
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 