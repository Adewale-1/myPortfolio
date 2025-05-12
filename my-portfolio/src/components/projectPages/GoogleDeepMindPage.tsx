import React, { useState, useEffect } from 'react';
import './projectPages.css';

// Fixed image paths with the /myPortfolio prefix for GitHub Pages
const DeepMindLogo = "/myPortfolio/assets/company-logos/google-2015-seeklogo-removebg-preview.png";
const DeepMindPDF = "/myPortfolio/assets/GoogleDeepMind.pdf";
const GoogleLogo = "/myPortfolio/assets/company-logos/google-2015-seeklogo-removebg-preview.png";

interface GoogleDeepMindPageProps {
  onClose: () => void;
  standalone?: boolean;
}

const GoogleDeepMindPage: React.FC<GoogleDeepMindPageProps> = ({ onClose, standalone = false }) => {
  const [pdfLoading, setPdfLoading] = useState(true);
  
  // Check if this component is being rendered as a standalone page
  const isStandalone = standalone || 
                       window.location.hash.includes('google-deepmind');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    // Log for debugging
    console.log("GoogleDeepMindPage mounted");
    console.log("URL hash:", window.location.hash);
    console.log("Is standalone:", isStandalone);
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isStandalone]);

  const handlePdfLoad = () => {
    setPdfLoading(false);
  };

  return (
    <div className={`project-page__container ${isStandalone ? 'project-page__container--standalone' : ''}`}>
      <div className="project-page__header">
        <div className="project-page__header-logo-full google-deepmind-header">
          <div className="google-deepmind-logo">
            <img 
              src={DeepMindLogo} 
              alt="Google Logo" 
              className="google-logo"
            />
            <span className="deepmind-text">DeepMind</span>
          </div>
          <button 
            className="project-page__close" 
            onClick={onClose}
            aria-label="Close Google DeepMind project"
          >
            <i className="uil uil-times"></i>
          </button>
        </div>
      </div>

      <div className="project-page__body">
        <div className="project-page__section">
          <h2>Google Summer of Code 2025</h2>
          <p>
            This project is part of Google Summer of Code 2025, 
            focusing on integrating the Gemini API with agent frameworks to extend multimodal capabilities.
          </p>
          <div className="project-page__details">
            <div className="project-page__detail-item">
              <i className="uil uil-calendar-alt"></i>
              <span>Duration: May - August 2025</span>
            </div>
            <div className="project-page__detail-item">
              <i className="uil uil-location-point"></i>
              <span>Remote</span>
            </div>
          </div>
          <div className="project-page__links">
            <a 
              href="https://summerofcode.withgoogle.com/programs/2025/projects/C9emc20S" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page__link gsoc-link"
            >
              <i className="uil uil-external-link-alt"></i> View GSoC Project
            </a>
            
            {isStandalone && (
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className="project-page__link project-page__link--secondary"
              >
                <i className="uil uil-arrow-left"></i> Back to Portfolio
              </a>
            )}
          </div>
        </div>

        <div className="project-page__section">
          <h2>Project Achievements</h2>
          <div className="project-page__achievements">
            <div className="project-page__achievement">
              <i className="uil uil-layer-group"></i>
              <div>
                <h3>Multimodal API Integration</h3>
                <p>Integrated the Gemini API with agent frameworks (LangChain, LlamaIndex, CrewAI, Composio) to extend multimodal capabilities</p>
              </div>
            </div>
            <div className="project-page__achievement">
              <i className="uil uil-process"></i>
              <div>
                <h3>Unified Adapter Layer</h3>
                <p>Engineered a unified adapter layer to facilitate multimodal input processing, supporting both image and text data with seamless API integration</p>
              </div>
            </div>
            <div className="project-page__achievement">
              <i className="uil uil-clock"></i>
              <div>
                <h3>Performance Optimization</h3>
                <p>Designed LRU caching mechanisms, token management utilities, and streaming response handlers to minimize latency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-page__section">
          <h2>Project Documentation</h2>
          {pdfLoading && <div className="project-page__loading">Loading PDF...</div>}
          <div className="project-page__pdf-container">
            <object
              data={DeepMindPDF}
              type="application/pdf"
              width="100%"
              height="600px"
              className="project-page__pdf"
              onLoad={handlePdfLoad}
            >
              <p>
                Your browser doesn't support embedded PDFs.
                <a href={DeepMindPDF} target="_blank" rel="noopener noreferrer">
                  Click here to download the PDF
                </a>.
              </p>
            </object>
          </div>
        </div>
        
        <div className="project-page__back-container">
          <button 
            className="project-page__back-button"
            onClick={onClose}
          >
            <i className="uil uil-arrow-left"></i> Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleDeepMindPage; 