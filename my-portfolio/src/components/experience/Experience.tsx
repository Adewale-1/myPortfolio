import React, { useState, useEffect } from 'react';
import './experience.css';

const Experience: React.FC = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const navigateToGoogleDeepMind = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "https://adewale-1.github.io/myPortfolio/#/projects/google-deepmind";
  };

  // Add scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const sectionPosition = experienceSection.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (sectionPosition.top < screenPosition * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className={`experience section ${isVisible ? 'animate' : ''}`} id="experience">
        <div className="section__header">
          <h2 className="section__title">Experience</h2>
          <span className="section__subtitle">My journey</span>
        </div>

        <div className="experience__container container">
          <div className="experience__tabs">
            <div 
              className={
                toggleState === 1 
                  ? "experience__button experience__active button--flex" 
                  : "experience__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-briefcase-alt experience__icon"></i> Work
            </div>

            <div 
              className={
                toggleState === 2 
                  ? "experience__button experience__active button--flex" 
                  : "experience__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-graduation-cap experience__icon"></i> Education
            </div>
          </div>

          <div className="experience__sections">
            {/* Work Experience */}
            <div className={toggleState === 1 ? "experience__content experience__content-active" : "experience__content"}>
              <div className="experience__data">
                <div>
                  <h3 className="experience__title">Incoming Software Engineering Intern</h3>
                  <span className="experience__subtitle">
                    <img 
                      src="/myPortfolio/assets/company-logos/chase-bank.png" 
                      alt="JPMorgan Chase Logo" 
                      className="experience__company-logo"
                    />
                    JPMorgan Chase
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> June - August 2025
                  </div>
                  <ul className="experience__description">
                    <li>Zelle payment platform, under the Connected Commerce Technology Line of Business</li>
                  </ul>
                </div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
              </div>

              <div className="experience__data">
                <div></div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>

                <div>
                  <div className="experience__title-container">
                    <h3 className="experience__title">Software Developer</h3>
                    <button 
                      className="experience__project-button"
                      onClick={navigateToGoogleDeepMind}
                    >
                      View Work <i className="uil uil-arrow-right"></i>
                    </button>
                  </div>
                  <span className="experience__subtitle">
                    <img 
                      src="/myPortfolio/assets/company-logos/google-2015-seeklogo-removebg-preview.png" 
                      alt="Google Logo" 
                      className="experience__company-logo"
                    />
                    Google DeepMind (Remote)
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> May - August 2025
                  </div>
                  <ul className="experience__description">
                    <li>Selected for Google Summer of Code 2025 under Google DeepMind Team, focused on integrating the Gemini API with agent frameworks (LangChain, LlamaIndex, CrewAI, Composio) to extend multimodal capabilities</li>
                    <li>Engineered a unified adapter layer to facilitate multimodal input processing, supporting both image and text data with seamless API integration</li>
                    <li>Designed LRU caching mechanisms, token management utilities, and streaming response handlers to minimize latency</li>
                  </ul>
                </div>
              </div>

              <div className="experience__data">
                <div>
                  <h3 className="experience__title">Core Perception Algorithm Developer</h3>
                  <span className="experience__subtitle">
                    <img 
                      src="/myPortfolio/assets/company-logos/ohio-state-university-seal-seeklogo-removebg-preview.png" 
                      alt="Ohio State University Logo" 
                      className="experience__company-logo"
                    />
                    Buckeye Autodrive, Ohio State University
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> Jan 2024 - Present
                  </div>
                  <ul className="experience__description">
                    <li>Developed and implemented cutting-edge 2D and 3D detection/classification algorithms using Convolutional Neural Networks, enhancing vehicle perception capabilities</li>
                    <li>Worked on 2D/3D sensor fusion, lane detection, HD mapping, and V2X communication to improve real-time data processing and decision-making for autonomous vehicles</li>
                    <li>Collaborated closely with a team to ensure seamless integration of algorithms on the Chevrolet Bolt</li>
                  </ul>
                </div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
              </div>

              <div className="experience__data">
                <div></div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>

                <div>
                  <div className="experience__title-container">
                    <h3 className="experience__title">Software Engineer</h3>
                    <a 
                      href="https://www.paws-ai.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="experience__project-button"
                    >
                      View Work <i className="uil uil-arrow-right"></i>
                    </a>
                  </div>
                  <span className="experience__subtitle">
                    <i className="uil uil-desktop experience__company-icon"></i>
                    PawsAI (Contract, Remote)
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> January - May 2025
                  </div>
                  <ul className="experience__description">
                    <li>Designed tiered caching architecture combining per-connection LRU (Least Recently Used) buffers with Redis global persistence, achieving 65% Database query reduction and 78% faster API responses for transcript-heavy operations</li>
                    <li>Engineered fault-tolerant WebSocket manager with connection pooling and heartbeat monitoring, handling 300+ simultaneous connections with 99.97% uptime and less than 200ms latency for real-time transcript interactions</li>
                  </ul>
                </div>
              </div>

              <div className="experience__data">
                <div>
                  <h3 className="experience__title">Software Engineering Fellow</h3>
                  <span className="experience__subtitle">
                    <i className="uil uil-brain experience__company-icon"></i>
                    Headstarter AI (Remote)
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> July - August 2024
                  </div>
                  <ul className="experience__description">
                    <li>Developed 3+ AI-powered tools that solved user pain points like onboarding, document retrieval, and payment automation—earning a 98% satisfaction rate from 30+ real users</li>
                    <li>Received coaching from engineers at Amazon, Bloomberg, and Capital One on Agile methodologies, CI/CD practices, Git, and microservices architecture</li>
                  </ul>
                </div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
              </div>

              <div className="experience__data">
                <div></div>

                <div>
                  <span className="experience__rounder"></span>
                </div>

                <div>
                  <h3 className="experience__title">Software Engineering Intern</h3>
                  <span className="experience__subtitle">
                    <i className="uil uil-mobile-android experience__company-icon"></i>
                    Yinsight
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> August 2023 - January 2024
                  </div>
                  <ul className="experience__description">
                    <li>Leveraged Dart, Swift, and Python to develop a cross-platform mobile app, Yinsight, designed to enhance student learning through active recall techniques</li>
                    <li>Followed MVVM design principles and integrated third-party APIs, such as Google Calendar two-way synchronization, to streamline onboarding and improve functionality by 25%</li>
                    <li>Designed and maintained database systems, reducing latency by 30% and improving data management and authentication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={toggleState === 2 ? "experience__content experience__content-active" : "experience__content"}>
              <div className="experience__data">
                <div>
                  <h3 className="experience__title">Bachelor of Science in Computer Science and Engineering</h3>
                  <span className="experience__subtitle">
                    <img 
                      src="/myPortfolio/assets/company-logos/ohio-state-university-seal-seeklogo-removebg-preview.png" 
                      alt="Ohio State University Logo" 
                      className="experience__company-logo"
                    />
                    The Ohio State University
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> Expected December 2026
                  </div>
                  <ul className="experience__description">
                    <li>Awards: Dean's List, Excellence Fellowship In Computing Scholarship Award</li>
                    <li>Relevant Coursework: Neural Networks, Data Structures and Algorithms, Operating Systems, Relational Database</li>
                  </ul>
                </div>

                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
              </div>

              <div className="experience__data">
                <div></div>

                <div>
                  <span className="experience__rounder"></span>
                </div>

                <div>
                  <h3 className="experience__title">Certificate in Machine Learning</h3>
                  <span className="experience__subtitle">
                    <img 
                      src="/myPortfolio/assets/company-logos/cornell-university-seeklogo-removebg-preview.png" 
                      alt="Cornell University Logo" 
                      className="experience__company-logo"
                    />
                    Cornell University (Remote)
                  </span>
                  <div className="experience__calendar">
                    <i className="uil uil-calendar-alt"></i> Expected August 2025
                  </div>
                  <ul className="experience__description">
                    <li>Accepted into the highly selective Break Through Tech AI Program, offered at Cornell University</li>
                    <li>Focus on data science, artificial intelligence, and machine learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience; 