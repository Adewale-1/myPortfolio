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

interface PandasTAProjectDetailsProps {
  project: ProjectType;
  onClose: () => void;
}

const PandasTAProjectDetails: React.FC<PandasTAProjectDetailsProps> = ({ project, onClose }) => {
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
              <i className="uil uil-chart-line"></i>
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
          {project.moreImages && project.moreImages.length > 0 ? (
            <img 
              src={project.moreImages[0]} 
              alt={`${project.title} visualization`}
              className="project-image"
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
            />
          ) : (
            <div className="code-visualization">
              <pre className="code-block">
                <code>
{`# Smart Money Concept (SMC) Indicator for pandas-ta
def smc(df):
    # Calculate candlestick properties
    df["body_hi"] = df[["open", "close"]].max(axis=1)
    df["body_lo"] = df[["open", "close"]].min(axis=1)
    df["body"] = df["body_hi"] - df["body_lo"]
    df["body_avg"] = df["body"].rolling(window=14).mean()
    
    # Signal identification
    df["top_imbalance_size"] = df["low"].shift(2) - df["high"]
    df["bottom_imbalance_size"] = df["low"] - df["high"].shift(2)
    
    # Calculate percentages based on average daily range
    day_adr = df["high"].rolling(window=14).max() - df["low"].rolling(window=14).min()
    df["top_imbalance_percentage"] = (df["top_imbalance_size"] / day_adr) * 100
    df["bottom_imbalance_percentage"] = (df["bottom_imbalance_size"] / day_adr) * 100
    
    # Flag significant imbalances
    df["top_imbalance_flag"] = (df["top_imbalance_size"] > 0) & (df["top_imbalance_percentage"] > 1)
    df["bottom_imbalance_flag"] = (df["bottom_imbalance_size"] > 0) & (df["bottom_imbalance_percentage"] > 1)
    
    return df`}
                </code>
              </pre>
            </div>
          )}
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
            <p>Contributed to the open-source pandas-ta library by implementing the Smart Money Concept (SMC) indicator for technical market analysis. This contribution enables traders and analysts to identify significant price imbalances and potential market manipulation by institutional investors (smart money).</p>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-star"></i>
              Key Features
            </h2>
            <ul className="project-details__features">
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Smart Money Concept (SMC) implementation for identifying institutional trading patterns</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Detection of market imbalances and supply/demand zones</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Candlestick analysis with body size evaluation and shadow calculation</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Trend identification with moving average comparisons</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Volatility analysis with adaptive thresholds</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Percentage-based imbalance detection relative to average daily range</span>
              </li>
              <li>
                <i className="uil uil-check-circle"></i>
                <span>Seamless integration with the pandas-ta technical analysis ecosystem</span>
              </li>
            </ul>
          </div>

          <div className="project-details__section">
            <h2>
              <i className="uil uil-chart-growth"></i>
              Technical Implementation
            </h2>
            <div className="project-details__features">
              <li>
                <i className="uil uil-analytics"></i>
                <span><strong>Candlestick Analysis:</strong> Identifies and categorizes candlestick patterns based on body size, shadows, and position relative to trend.</span>
              </li>
              <li>
                <i className="uil uil-chart"></i>
                <span><strong>Imbalance Detection:</strong> Calculates price imbalances between candles to identify areas where price has moved rapidly, potentially indicating institutional activity.</span>
              </li>
              <li>
                <i className="uil uil-signal"></i>
                <span><strong>Volatility Measurement:</strong> Implements rolling window calculations to determine current volatility relative to historical levels.</span>
              </li>
              <li>
                <i className="uil uil-comparison"></i>
                <span><strong>Trend Analysis:</strong> Compares current price levels to moving averages to determine market trend direction.</span>
              </li>
            </div>
          </div>
          
          <div className="project-details__section">
            <h2>
              <i className="uil uil-code-branch"></i>
              Implementation Details
            </h2>
            <div className="project-details__code-showcase">
              <h3>Smart Money Concept Algorithm:</h3>
              <ol className="implementation-steps">
                <li>
                  <strong>Candlestick Properties</strong>: Calculate body height, upper and lower shadows, and average body size over a rolling window.
                </li>
                <li>
                  <strong>Imbalance Identification</strong>: Detect price gaps between candles that indicate potential supply and demand zones.
                </li>
                <li>
                  <strong>Significance Filtering</strong>: Calculate imbalance size as a percentage of average daily range to filter for significant events.
                </li>
                <li>
                  <strong>Volatility Analysis</strong>: Calculate current volatility relative to historical average to identify unusual market conditions.
                </li>
                <li>
                  <strong>Flag Generation</strong>: Create boolean flags for top and bottom imbalances that meet significance thresholds.
                </li>
              </ol>
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
              <a 
                href="https://github.com/Adewale-1/pandas-ta/blob/wale-contribution/pandas_ta/momentum/smc.py" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-details__link project-details__link--demo"
              >
                <i className="uil uil-code"></i> View SMC Code
              </a>
            </div>
          </div>
          
          {project.readmeContent && (
            <div className="project-details__section">
              <h2>
                <i className="uil uil-file-alt"></i>
                Technical Documentation
              </h2>
              <div 
                className="project-details__readme"
                dangerouslySetInnerHTML={{ __html: formatReadme(project.readmeContent) }}
              />
            </div>
          )}
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

export default PandasTAProjectDetails; 