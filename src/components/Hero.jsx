import { useEffect, useState } from 'react';
import { meta } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={visible ? 'hero visible' : 'hero'}>

      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content">

        <div className="hero-tag">
          <span />
          Frontend Developer · Lagos, Nigeria
        </div>

        <h1 className="hero-heading">
          Onyinye<br />
          <span className="accent">Eziuno</span>
        </h1>

        <p className="hero-bio">
          I build responsive, production-grade web apps with React, focused on clean code, accessible UI, and experiences that actually work.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={() => scrollTo('projects')}>
            View Projects →
          </button>
          <a className="hero-btn-secondary" href={'mailto:' + meta.email}>
            Get In Touch
          </a>
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