import { useState } from 'react';
import { experience } from '../data/portfolio';
import useScrollReveal from './useScrollReveal';
import './Experience.css';

export default function Experience() {
  var state = useState(0);
  var active = state[0];
  var setActive = state[1];

  var reveal = useScrollReveal(0.1);
  var sectionRef = reveal[0];
  var revealed = reveal[1];

  var current = experience[active];

  return (
    <section id="experience" className="experience" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="section-watermark">04</div>
      <div className="experience-inner">

        <div className={'section-label reveal' + (revealed ? ' visible' : '')}>
          <span>04 / Experience</span>
        </div>

        <h2 className={'section-heading reveal reveal-delay-1' + (revealed ? ' visible' : '')}>
          Where I've<br />
          <span className="accent">Been</span>
        </h2>

        <div className={'experience-layout reveal reveal-delay-2' + (revealed ? ' visible' : '')}>
          <div className="experience-tabs">
            {experience.map(function(exp, i) {
              return (
                <button
                  key={i}
                  className={i === active ? 'experience-tab active' : 'experience-tab'}
                  onClick={function() { setActive(i); }}
                >
                  <div className="experience-tab-period">{exp.period}</div>
                  <div className="experience-tab-company">{exp.company}</div>
                </button>
              );
            })}
          </div>

          <div className="experience-content">
            <div className="experience-type">{current.type}</div>
            <h3 className="experience-role">{current.role}</h3>
            <div className="experience-company">{current.company}</div>
            <ul className="experience-bullets">
              {current.bullets.map(function(bullet, i) {
                return (
                  <li key={i} className="experience-bullet">
                    <span className="experience-bullet-arrow">→</span>
                    {bullet}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="experience-footer">
          <div>
            <div className="experience-footer-label">Education</div>
            <div className="experience-footer-value">B.Sc Marine Biology — University of Lagos</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="experience-footer-label">NYSC</div>
            <div className="experience-footer-mono">Corps Member · 2025 – 2026</div>
          </div>
        </div>

      </div>
    </section>
  );
}