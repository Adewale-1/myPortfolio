import React, { useState } from 'react';
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

  const handlePdfLoad = () => {
    setPdfLoading(false);
  };

  return (
    <div className="project-page__container">
      <div className="project-page__header">
        {DeepMindLogo ? (
          <div className="project-page__header-logo-full">
            <img 
              src={DeepMindLogo} 
              alt="Google DeepMind Logo" 
              className="project-page__header-img-full"
            />
            <button className="project-page__close" onClick={onClose}>
              <i className="uil uil-times"></i>
            </button>
          </div>
        ) : (
          <div className="project-page__header-content">
            <h1>Google DeepMind Project</h1>
            <button className="project-page__close" onClick={onClose}>
              <i className="uil uil-times"></i>
            </button>
          </div>
        )}
      </div>

      <div className="project-page__body">
        <div className="project-page__section">
          <h2>Google Summer of Code 2025</h2>
          <p>
            This project is part of Google Summer of Code 2025, 
            focusing on integrating the Gemini API with agent frameworks to extend multimodal capabilities.
          </p>
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
            onClick={onClose}
          >
            <i className="uil uil-arrow-left"></i> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleDeepMindPage; 