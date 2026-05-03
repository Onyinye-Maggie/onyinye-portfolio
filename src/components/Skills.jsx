import { skills } from '../data/portfolio';
import './Skills.css';

var categories = [
  { label: 'Core Stack', key: 'core', labelClass: 'skills-category-label', dotClass: 'skill-dot', itemClass: 'skill-item' },
  { label: 'Tools and Libraries', key: 'tools', labelClass: 'skills-category-label muted', dotClass: 'skill-dot dim', itemClass: 'skill-item' },
  { label: 'Design', key: 'design', labelClass: 'skills-category-label muted', dotClass: 'skill-dot dim', itemClass: 'skill-item' },
];
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">

        <div className="section-label">
          <span>03 / Skills</span>
        </div>

        <h2 className="section-heading">
          What I
          <br />
          <span className="accent">Work With</span>
        </h2>

        <div className="skills-grid">
          {categories.map(function(cat) {
            return (
              <div key={cat.key} className="skills-category">

                <div className={cat.labelClass}>{cat.label}</div>

                {skills[cat.key].map(function(skill) {
                  return (
                    <div key={skill} className={cat.itemClass}>
                      <span className={cat.dotClass} />
                      {skill}
                    </div>
                  );
                })}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}