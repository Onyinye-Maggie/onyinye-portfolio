import { useEffect, useRef, useState } from 'react';
import useScrollReveal from './useScrollReveal';
import './Skills.css';

var techStack = [
  { name: 'HTML5', percent: 75 },
  { name: 'CSS3', percent: 70 },
  { name: 'CSS Variables', percent: 70 },
  { name: 'JavaScript ES6+', percent: 60 },
  { name: 'React.js', percent: 65 },
  { name: 'Git & GitHub', percent: 65 },
  { name: 'React Router v6', percent: 60 },
  { name: 'Axios / REST APIs', percent: 60 },
  { name: 'Tailwind CSS', percent: 55 },
  { name: 'Context API', percent: 55 },
];

export default function Skills() {
  var sectionRef = useRef(null);
  var state = useState(false);
  var animated = state[0];
  var setAnimated = state[1];

  var reveal = useScrollReveal(0.1);
  var revealRef = reveal[0];
  var revealed = reveal[1];

  useEffect(function() {
    var observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return function() { observer.disconnect(); };
  }, [setAnimated]);

  return (
    <section id="skills" className="skills" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="section-watermark">03</div>
      <div className="skills-inner" ref={revealRef}>

        <div className={'section-label reveal' + (revealed ? ' visible' : '')}>
          <span>03 / Skills</span>
        </div>

        <h2 className={'section-heading reveal reveal-delay-1' + (revealed ? ' visible' : '')}>
          Tech<br />
          <span className="accent">Stack</span>
        </h2>

        <div className="skills-chart">
          {techStack.map(function(skill) {
            return (
              <div key={skill.name} className="skill-row">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar-track">
                  <div
                    className={animated ? 'skill-bar-fill animate' : 'skill-bar-fill'}
                    style={{ '--target-width': skill.percent + '%' }}
                  />
                </div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}