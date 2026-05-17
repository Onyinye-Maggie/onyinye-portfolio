import { useEffect, useState } from 'react';
import { meta } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  var visibleState = useState(false);
  var visible = visibleState[0];
  var setVisible = visibleState[1];

  useEffect(function() {
    var t = setTimeout(function() { setVisible(true); }, 100);
    return function() { clearTimeout(t); };
  }, [setVisible]);

  var scrollTo = function(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={visible ? 'hero visible' : 'hero'}>

      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">

        <div className="hero-tag">
          <span />
          Frontend Developer · Lagos, Nigeria
        </div>

        <h1 className="hero-heading">
          Onyinye<br />
          <span className="gradient-text">Eziuno</span>
        </h1>

        <p className="hero-bio">
          I build responsive, production-grade web apps with React, 
          focused on clean code, accessible UI, and experiences that actually work.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={function() { scrollTo('projects'); }}>
            View Projects
          </button>
          <a className="hero-btn-secondary" href={'mailto:' + meta.email}>
            Get In Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
           <div className="hero-stat-number">8+</div>
<div className="hero-stat-label">Projects Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">2+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5+</div>
            <div className="hero-stat-label">Live Deployments</div>
          </div>
        </div>

        <div className="hero-available">
          <span className="dot" />
          <span>{meta.available}</span>
        </div>

      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="line" />
      </div>

    </section>
  );
}