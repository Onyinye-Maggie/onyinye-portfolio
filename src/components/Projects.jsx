import { useState } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard(props) {
  var project = props.project;

  return (
    <div className="project-card">

      {project.featured === true ? <div className="project-badge">Featured</div> : null}

      <div className="project-num">{project.id}</div>

      <h3 className="project-name">{project.name}</h3>

      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.map(function(t) {
          return (
            <span key={t} className="tech-tag">{t}</span>
          );
        })}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>

        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
            Live Site
          </a>
        ) : (
          <span className="project-wip">In Progress</span>
        )}
      </div>

    </div>
  );
}
export default function Projects() {
  var state = useState(false);
  var showAll = state[0];
  var setShowAll = state[1];

  var displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        <div className="section-label">
          <span>02 / Projects</span>
        </div>

        <h2 className="section-heading">
          Selected
          <br />
          <span className="accent">Work</span>
        </h2>

        <div className="projects-grid">
          {displayed.map(function(project) {
            return (
              <ProjectCard key={project.id} project={project} />
            );
          })}
        </div>

        {showAll === false ? (
          <div className="projects-show-more">
            <button className="show-more-btn" onClick={function() { setShowAll(true); }}>
              View All Projects
            </button>
          </div>
        ) : null}

      </div>
    </section>
  );
}