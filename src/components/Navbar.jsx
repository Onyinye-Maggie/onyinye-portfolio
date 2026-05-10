import { useState, useEffect } from 'react';
import { meta } from '../data/portfolio';

export default function Navbar() {
  var scrollState = useState(false);
  var scrolled = scrollState[0];
  var setScrolled = scrollState[1];

  var themeState = useState(false);
  var isLight = themeState[0];
  var setIsLight = themeState[1];

  useEffect(function() {
    var onScroll = function() { setScrolled(window.scrollY > 40); };
    window.addEventListener('scroll', onScroll);
    return function() { window.removeEventListener('scroll', onScroll); };
  }, []);

  var toggleTheme = function() {
    var newIsLight = !isLight;
    setIsLight(newIsLight);
    if (newIsLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  };

  var handleNav = function(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  var links = ['projects', 'skills', 'experience', 'contact'];

  var navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.1rem 2rem',
    background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
    borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
  };

  var navStyleLight = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.1rem 2rem',
    background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
  };

  var linkStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.68rem',
    color: 'var(--text-muted)', letterSpacing: '0.1em',
    textTransform: 'uppercase', transition: 'color 0.2s',
  };

  var hireStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.68rem',
    color: 'var(--accent)', letterSpacing: '0.1em',
    textTransform: 'uppercase', border: '0.5px solid var(--accent)',
    padding: '0.3rem 0.8rem',
  };

  var toggleStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.68rem',
    color: 'var(--text-muted)', letterSpacing: '0.1em',
    border: '0.5px solid var(--border)',
    padding: '0.3rem 0.8rem',
    transition: 'all 0.2s',
  };

  return (
    <nav style={isLight ? navStyleLight : navStyle}>
      <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        OE<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {links.map(function(link) {
          return (
            <button
              key={link}
              onClick={function() { handleNav(link); }}
              style={linkStyle}
              onMouseEnter={function(e) { e.target.style.color = 'var(--accent)'; }}
              onMouseLeave={function(e) { e.target.style.color = 'var(--text-muted)'; }}
            >
              {link}
            </button>
          );
        })}

        <button onClick={toggleTheme} style={toggleStyle}>
          {isLight ? 'Dark' : 'Light'}
        </button>

        <a href={'mailto:' + meta.email} style={hireStyle}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}