import React, { useState } from 'react';
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
                <div className="project__card" key={project.title} onClick={() => setSelectedProject(project)}>
                  <div className="project__clickable-hint">Click to view</div>
                  <div className="project__img-container">
                    <img src={project.image} alt={project.title} className="project__img" />
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project__card-overlay">
                    <div className="project__view-btn">View Details</div>
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