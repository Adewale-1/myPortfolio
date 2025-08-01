import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import { projects, ProjectType } from '../../projectsData';
import ProjectDetails from './ProjectDetails';
import NL2SQLProjectDetails from './NL2SQLProjectDetails';
import TransformerProjectDetails from './TransformerProjectDetails';
import IndoorNavProjectDetails from './IndoorNavProjectDetails';
import PandasTAProjectDetails from './PandasTAProjectDetails';

const categories = ['Machine Learning', 'Software'];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (project: ProjectType) => {
    if (project.directLink) {
      // Handle hash-based routing for direct links
      if (project.directLink.startsWith('#')) {
        // If it's already a hash link, navigate directly without router
        window.location.hash = project.directLink.substring(1);
      } else {
        // Otherwise use the router
        navigate(project.directLink);
      }
    } else {
      setSelectedProject(project);
    }
  };

  const renderProjectDetails = () => {
    if (!selectedProject) return null;
    
    switch(selectedProject.title) {
      case 'Natural Language To SQL':
        return (
          <NL2SQLProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        );
      case 'Transformer Language Modelling':
        return (
          <TransformerProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        );
      case 'Indoor Nav':
        return (
          <IndoorNavProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        );
      case 'Pandas TA (Open source contributions)':
        return (
          <PandasTAProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        );
      default:
        return (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        );
    }
  };

  // Function to determine if a project is the Google DeepMind project
  const isGoogleDeepMindProject = (title: string) => {
    return title.includes('Google DeepMind');
  };

  return (
    <section className="projects section" id="projects">
      <div className="section__header">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My recent work</span>
      </div>
      <div className="projects__categories">
        {categories.map((cat) => (
          <div key={cat} className="projects__category">
            <h3>{cat}</h3>
            <div className="projects__grid">
              {projects.filter(p => p.category === cat).map(project => (
                <div 
                  className={`project__card ${isGoogleDeepMindProject(project.title) ? 'project__card--deepmind' : ''}`} 
                  key={project.title} 
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project__clickable-hint">Click to view</div>
                  <div className="project__img-container">
                    <img src={project.image} alt={project.title} className="project__img" />
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project__card-overlay">
                    <div className="project__view-btn">
                      {project.directLink ? 'Open Page' : 'View Details'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {renderProjectDetails()}
    </section>
  );
};

export default Projects; 