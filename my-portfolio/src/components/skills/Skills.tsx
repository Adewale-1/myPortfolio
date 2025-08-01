import React from 'react';
import './skills.css';

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section__header">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical expertise</span>
      </div>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Programming Languages</h3>
          
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Python</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">JavaScript (ES6+)</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">TypeScript</h3>
                </div>
              </div>
              
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Dart</h3>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Java</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">C</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">C++</h3>
                </div>
              </div>
              
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Swift</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Frameworks & Libraries</h3>
          
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">React.js</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Spring Boot</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">FastAPI</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Flask</h3>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Rails</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">JUnit</h3>
                </div>
              </div>
              
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Pytest</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">gRPC</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Databases</h3>
          
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">PostgreSQL</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Google Firestore</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Redis</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills__content">
          <h3 className="skills__title">DevOps & Infrastructure</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Docker</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">GitHub Actions</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">Amazon EC2</h3>
                </div>
              </div>

              <div className="skills__data">
                <div>
                  <h3 className="skills__name">RabbitMQ</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 