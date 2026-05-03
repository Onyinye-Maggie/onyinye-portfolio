import { meta } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        <div className="section-label">
          <span>05 / Contact</span>
        </div>

        <div className="contact-layout">

          <div>
            <h2 className="contact-heading">
              Let's
              <br />
              build
              <br />
              <span className="accent">something.</span>
            </h2>
            <p className="contact-bio">
              I am available for full-time frontend roles from June 2026.
              Open to remote and on-site opportunities in Lagos and beyond.
            </p>
          </div>

          <div className="contact-links">

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