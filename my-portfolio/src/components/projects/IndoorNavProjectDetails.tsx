import React, { useEffect } from 'react';
import { ProjectType } from '../../projectsData';
import './projectDetails.css';

// Function to format markdown-like content to HTML
const formatReadme = (content: string): string => {
  if (!content) return '';
  
  // Replace headers
  let html = content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    
    // Replace emphasis
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // Replace lists
    .replace(/^\* (.*$)/gm, '<ul><li>$1</li></ul>')
    .replace(/<\/ul>\s*<ul>/g, '')
    
    // Replace links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Replace code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // Replace line breaks
    .replace(/\n/g, '<br />');

  return html;
};

interface IndoorNavProjectDetailsProps {
  project: ProjectType;
  onClose: () => void;
}

const IndoorNavProjectDetails: React.FC<IndoorNavProjectDetailsProps> = ({ project, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Add escape key listener to close modal
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="project-details__container">
      <div className="project-details__header">
        <div className="project-details__header-content">
          <h1>
            <span className="project-details__header-icon">
              <i className="uil uil-map-marker"></i>
            </span>
            {project.title}
          </h1>
          <button 
            className="project-details__close" 
            onClick={onClose}
            aria-label="Close project details"
          >
            <i className="uil uil-times"></i>
          </button>
        </div>
      </div>
      
      <div className="project-details__body">
        <div className="project-details__main-image">
          <object 
            type="image/svg+xml" 
            data="/myPortfolio/assets/images/indoornav-waypoints.svg" 
            width="100%" 
            height="500px"
            title="IndoorNav Waypoint System"
            aria-label="Diagram showing indoor navigation waypoint system in a building"
            style={{ 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px',
              maxWidth: '100%',
              display: 'block',
              aspectRatio: '16/10',
              margin: '0 auto',
              padding: '10px'
            }}
            className="indoornav-svg"
          >
            <img 
              src="/myPortfolio/assets/indoornav.svg" 
              alt={project.title}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </object>
          <div className="project-details__category-badge">
            {project.category}
          </div>
        </div>
        
        <div className="project-details__content">
          <div className="project-details__section">
            <h2>
              <i className="uil uil-document-info"></i>
              Description
            </h2>
            <p>{project.description}</p>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-star"></i>
              Key Features
            </h2>
            <ul className="project-details__features">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <i className="uil uil-check-circle"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-details__section">
            <h2>
              <i className="uil uil-cell"></i>
              System Architecture
            </h2>
            <div className="project-details__features">
              <li>
                <i className="uil uil-mobile-android"></i>
                <span><strong>Mobile Frontend:</strong> Flutter-based UI providing map visualization, navigation instructions, and camera integration for landmark recognition.</span>
              </li>
              <li>
                <i className="uil uil-brain"></i>
                <span><strong>Recognition Engine:</strong> Computer vision model trained to identify key indoor landmarks and determine user position based on visual features.</span>
              </li>
              <li>
                <i className="uil uil-chart-network"></i>
                <span><strong>Navigation Backend:</strong> Graph-based pathfinding algorithm that calculates optimal routes between locations using predefined waypoints.</span>
              </li>
            </div>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-mobile-android"></i>
              Mobile Interface
            </h2>
            <div className="project-details__image-showcase" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
              <div style={{ 
                maxWidth: '400px', 
                width: '100%', 
                backgroundColor: '#121212', 
                borderRadius: '12px', 
                padding: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <img 
                  src="/myPortfolio/assets/indoornav-original.png" 
                  alt="IndoorNav Mobile App"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain', 
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-video"></i>
              Demo Video
            </h2>
            <div className="project-details__video-container" style={{ 
              width: '100%', 
              maxWidth: '600px',
              margin: '20px auto',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
              <video 
                controls
                width="100%" 
                height="auto"
                poster="/myPortfolio/assets/indoornav-original.png"
                style={{ 
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain'
                }}
              >
                <source src="/myPortfolio/assets/IndoorNav.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-award"></i>
              Performance Metrics
            </h2>
            <div className="project-details__features">
              <li>
                <i className="uil uil-chart-pie"></i>
                <span><strong>Recognition Accuracy:</strong> 92% landmark identification success rate in varied lighting conditions.</span>
              </li>
              <li>
                <i className="uil uil-location-point"></i>
                <span><strong>Navigation Precision:</strong> Average position error of less than 2 meters in tested environments.</span>
              </li>
              <li>
                <i className="uil uil-clock"></i>
                <span><strong>Response Time:</strong> Under 1.5 seconds for path recalculation after new landmark detection.</span>
              </li>
            </div>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-window-grid"></i>
              Technologies
            </h2>
            <div className="project-details__tech">
              {project.tech.map((item, index) => (
                <span key={index} className="project-details__tech-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {project.readmeContent && (
            <div className="project-details__section">
              <h2>
                <i className="uil uil-file-alt"></i>
                Project Documentation
              </h2>
              <div className="project-details__readme">
                <div className="markdown-content" dangerouslySetInnerHTML={{ __html: formatReadme(project.readmeContent) }} />
              </div>
            </div>
          )}
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-link"></i>
              Links
            </h2>
            <div className="project-details__links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-details__link"
              >
                <i className="uil uil-github"></i> View on GitHub
              </a>
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-details__link project-details__link--demo"
                >
                  <i className="uil uil-eye"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-details__footer">
          <button 
            onClick={onClose}
            className="project-details__back-button"
          >
            <i className="uil uil-arrow-left"></i> Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndoorNavProjectDetails; 