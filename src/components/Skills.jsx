import { useEffect, useRef, useState } from 'react';
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

    return function() {
      observer.disconnect();
    };
  }, [setAnimated]);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-inner">

        <div className="section-label">
          <span>03 / Skills</span>
        </div>

        <h2 className="section-heading">
          Tech
          <br />
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