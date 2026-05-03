import { useState, useEffect } from 'react';
import { meta } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['projects', 'skills', 'experience', 'contact'];

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.1rem 2rem',
    background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
    borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
  };

  const linkStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.68rem',
    color: 'var(--text-muted)', letterSpacing: '0.1em',
    textTransform: 'uppercase', transition: 'color 0.2s',
  };

  const hireStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.68rem',
    color: 'var(--accent)', letterSpacing: '0.1em',
    textTransform: 'uppercase', border: '0.5px solid var(--accent)',
    padding: '0.3rem 0.8rem',
  };

  return (
    <nav style={navStyle}>
      <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
        OE<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            style={linkStyle}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link}
          </button>
        ))}

        <a href={`mailto:${meta.email}`} style={hireStyle}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}