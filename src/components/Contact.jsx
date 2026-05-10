import { meta } from '../data/portfolio';
import useScrollReveal from './useScrollReveal';
import './Contact.css';

export default function Contact() {
  var reveal = useScrollReveal(0.1);
  var sectionRef = reveal[0];
  var revealed = reveal[1];

  return (
    <section id="contact" className="contact" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="section-watermark">05</div>
      <div className="contact-inner">

        <div className={'section-label reveal' + (revealed ? ' visible' : '')}>
          <span>05 / Contact</span>
        </div>

        <div className="contact-layout">

          <div className={'reveal reveal-delay-1' + (revealed ? ' visible' : '')}>
            <h2 className="contact-heading">
              Let's<br />build<br />
              <span className="accent">something.</span>
            </h2>
            <p className="contact-bio">
              I am available for full-time frontend roles from June 2026.
              Open to remote and on-site opportunities in Lagos and beyond.
            </p>
          </div>

          <div className={'contact-links reveal reveal-delay-2' + (revealed ? ' visible' : '')}>
            <a href={'mailto:' + meta.email} className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">{meta.email}</span>
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">onyinye-eziuno</span>
            </a>
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">Onyinye-Maggie</span>
            </a>
          </div>

        </div>

        <div className="contact-footer">
          <span>2025 Onyinye Eziuno. Built with React.</span>
          <span>Lagos, Nigeria</span>
        </div>

      </div>
    </section>
  );
}