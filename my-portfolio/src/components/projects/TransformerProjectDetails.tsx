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

interface TransformerProjectDetailsProps {
  project: ProjectType;
  onClose: () => void;
}

const TransformerProjectDetails: React.FC<TransformerProjectDetailsProps> = ({ project, onClose }) => {
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
              <i className="uil uil-brain"></i>
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
            data="/assets/images/transformer-architecture.svg" 
            width="100%" 
            height="auto"
            title="Transformer Architecture Diagram"
            aria-label="Architecture diagram showing transformer model components"
            style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}
          >
            <img 
              src="/assets/png/transformer.svg" 
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
              <i className="uil uil-bolt"></i>
              Transformer Architecture
            </h2>
            <div className="project-details__features">
              <li>
                <i className="uil uil-layer-group"></i>
                <span><strong>Multi-Head Self-Attention:</strong> The core component that allows the model to focus on different parts of the input sequence simultaneously through multiple attention heads.</span>
              </li>
              <li>
                <i className="uil uil-chart-line"></i>
                <span><strong>Positional Encoding:</strong> Since transformers process all tokens in parallel, positional encoding adds information about the position of each character in the sequence.</span>
              </li>
              <li>
                <i className="uil uil-focus-target"></i>
                <span><strong>Causal Masking:</strong> For language modeling, ensures that predictions for a position can only depend on known positions (those that come before it in the sequence).</span>
              </li>
              <li>
                <i className="uil uil-circuit"></i>
                <span><strong>Feed-Forward Networks:</strong> Position-wise fully connected layers that process the attention outputs with non-linear transformations.</span>
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
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-analysis"></i>
              Tasks and Results
            </h2>
            <div className="project-details__features">
              <li>
                <i className="uil uil-clipboard-notes"></i>
                <span><strong>Character-level Language Modeling:</strong> Achieved a perplexity of 6.35 on the development set, demonstrating strong predictive capabilities at the character level.</span>
              </li>
              <li>
                <i className="uil uil-abacus"></i>
                <span><strong>Letter Counting Task:</strong> Achieved 95.7% accuracy in classifying whether each character in a sequence has appeared 0, 1, or 2+ times before.</span>
              </li>
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

export default TransformerProjectDetails; 