import { useState } from 'react';
import { projects } from '../data/portfolio';
import useScrollReveal from './useScrollReveal';
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
          return <span key={t} className="tech-tag">{t}</span>;
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
  var shown = useState(false);
  var showAll = shown[0];
  var setShowAll = shown[1];

  var reveal = useScrollReveal(0.1);
  var sectionRef = reveal[0];
  var revealed = reveal[1];

  var displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="projects" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="section-watermark">02</div>
      <div className="projects-inner">

        <div className={'section-label reveal' + (revealed ? ' visible' : '')}>
          <span>02 / Projects</span>
        </div>

        <h2 className={'section-heading reveal reveal-delay-1' + (revealed ? ' visible' : '')}>
          Selected<br />
          <span className="accent">Work</span>
        </h2>

        <div className="projects-grid">
          {displayed.map(function(project) {
            return <ProjectCard key={project.id} project={project} />;
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