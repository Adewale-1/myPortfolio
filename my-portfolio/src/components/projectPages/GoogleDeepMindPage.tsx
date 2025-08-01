import React, { useState, useEffect, useRef } from 'react';
import './projectPages.css';
// Import the assets with error handling
let DeepMindLogo: string | null = null;
let DeepMindPDF: string | null = null;
try {
  DeepMindLogo = require('../../assets/1687642392390.jpeg');
} catch (e) {
  console.warn('DeepMind logo image not found. Using placeholder.');
  DeepMindLogo = null;
}

try {
  DeepMindPDF = require('../../assets/GoogleDeepMind.pdf');
} catch (e) {
  console.warn('DeepMind PDF not found. Using placeholder.');
  DeepMindPDF = null;
}

const GoogleDeepMindPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [pdfLoading, setPdfLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure the component is properly mounted
    document.title = "Google DeepMind Project - Adenle's Portfolio";
    setAssetsLoaded(true);
    
    // Override any accidental navigations
    const hash = window.location.hash;
    if (!hash.includes('projects/google-deepmind')) {
      window.location.hash = '#/projects/google-deepmind';
    }

    // Apply additional CSS to hide any unwanted texts
    const style = document.createElement('style');
    style.innerHTML = `
      .project-page__container h1, 
      .project-page__container h2:not(.project-page__section h2),
      .project-page__container > div:not(.project-page__header-logo-full, .project-page__body) > *,
      .project-page__header-logo-full + div > h2,
      .project-page__header-logo-full ~ h2:first-of-type,
      .project-page__container div:has(> h1:contains("Google DeepMind")),
      .project-page__container div[class*="google-deepmind"] {
        display: none !important;
      }
      
      .project-page__section h2 {
        color: var(--primary-color) !important;
        font-size: 1.8rem !important;
      }
    `;
    document.head.appendChild(style);

    // Hide any text that might be added dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && containerRef.current) {
          const unwantedElements = containerRef.current.querySelectorAll('h1, div > h2:not(.project-page__section h2)');
          unwantedElements.forEach(el => {
            if (el.closest('.project-page__section') === null) {
              (el as HTMLElement).style.display = 'none';
            }
          });
        }
      });
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  const handlePdfLoad = () => {
    setPdfLoading(false);
  };

  const handleHomeNavigation = () => {
    document.title = "Adenle | Portfolio";
    onClose();
  };

  return (
    <div className="project-page__container" ref={containerRef}>
      {/* Full-width header image without the text header */}
      <div className="project-page__header-logo-full">
        {DeepMindLogo ? (
          <img 
            src={DeepMindLogo} 
            alt="Google DeepMind Logo" 
            className="project-page__header-img-full"
          />
        ) : (
          <div className="project-page__header-placeholder">
            Google DeepMind Project
          </div>
        )}
        <button className="project-page__close" onClick={handleHomeNavigation}>
          <i className="uil uil-times"></i>
        </button>
      </div>

      <div className="project-page__body">
        <div className="project-page__section">
          <h2>Google Summer of Code 2025</h2>
          {/* <p>
            I was selected for Google Summer of Code 2025 under the Google DeepMind team, focused on integrating the Gemini API with agent frameworks (LangChain, LlamaIndex, CrewAI, Composio) to extend multimodal capabilities.
          </p>
          <p>
            My project involves engineering a unified adapter layer to facilitate multimodal input processing, supporting both image and text data with seamless API integration. I'm also designing LRU caching mechanisms, token management utilities, and streaming response handlers to minimize latency.
          </p> */}
          <div className="project-page__links">
            <a 
              href="https://summerofcode.withgoogle.com/programs/2025/projects/C9emc20S" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page__link"
            >
              <i className="uil uil-external-link-alt"></i> View GSoC Project
            </a>
          </div>
        </div>

        <div className="project-page__section">
          <h2>Project Documentation</h2>
          {pdfLoading && <div className="project-page__loading">Loading PDF...</div>}
          {DeepMindPDF ? (
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
          ) : (
            <div className="project-page__pdf-placeholder">
              <p>PDF not found. Please add the PDF to src/assets/GoogleDeepMind.pdf</p>
              <a 
                href="https://summerofcode.withgoogle.com/programs/2025/projects/C9emc20S" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-page__link"
              >
                <i className="uil uil-external-link-alt"></i> Visit Google DeepMind GSOC Project
              </a>
            </div>
          )}
        </div>
        
        <div className="project-page__back-container">
          <button 
            className="project-page__back-button"
            onClick={handleHomeNavigation}
          >
            <i className="uil uil-arrow-left"></i> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleDeepMindPage; 