import { useState, useEffect } from 'react';
import { meta } from '../data/portfolio';

export default function Navbar() {
  var scrollState = useState(false);
  var scrolled = scrollState[0];
  var setScrolled = scrollState[1];

  var themeState = useState(false);
  var isLight = themeState[0];
  var setIsLight = themeState[1];

  var menuState = useState(false);
  var menuOpen = menuState[0];
  var setMenuOpen = menuState[1];

  var mobileState = useState(false);
  var isMobile = mobileState[0];
  var setIsMobile = mobileState[1];
console.log('window width:', window.innerWidth, 'isMobile:', isMobile);

  useEffect(function() {
    var onScroll = function() { setScrolled(window.scrollY > 40); };
    window.addEventListener('scroll', onScroll);
    return function() { window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(function() {
    var checkMobile = function() {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return function() { window.removeEventListener('resize', checkMobile); };
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
    setMenuOpen(false);
  };

  var links = ['projects', 'skills', 'experience', 'contact'];

  var navBg = scrolled || menuOpen
    ? isLight ? 'rgba(255,255,255,0.97)' : 'rgba(10,10,10,0.97)'
    : 'transparent';

  var navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: navBg,
    borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
  };

  var topRowStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1.1rem 2rem',
  };

  var logoStyle = {
    fontWeight: 800, fontSize: '1.05rem',
    letterSpacing: '-0.02em', color: 'var(--text)',
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

  var barStyle = {
    width: '22px', height: '1.5px',
    background: 'var(--text)', display: 'block',
    transition: 'all 0.3s ease',
  };

  var mobileMenuStyle = {
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    padding: '1rem 2rem 1.5rem',
    borderTop: '0.5px solid var(--border)',
  };

  var mobileLinkStyle = {
    fontFamily: 'var(--mono)', fontSize: '0.8rem',
    color: 'var(--text-muted)', letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '0.9rem 0',
    borderBottom: '0.5px solid var(--border)',
    textAlign: 'left', transition: 'color 0.2s',
    background: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={topRowStyle}>

        <span style={logoStyle}>
          OE<span style={{ color: 'var(--accent)' }}>.</span>
        </span>

        {isMobile ? (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} style={toggleStyle}>
              {isLight ? 'Dark' : 'Light'}
            </button>
            <button
              onClick={function() { setMenuOpen(!menuOpen); }}
              style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={barStyle} />
              <span style={barStyle} />
              <span style={barStyle} />
            </button>
          </div>
        ) : (
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
        )}

      </div>

      {isMobile ? (
        <div style={mobileMenuStyle}>
          {links.map(function(link) {
            return (
              <button
                key={link}
                onClick={function() { handleNav(link); }}
                style={mobileLinkStyle}
              >
                {link}
              </button>
            );
          })}
          <div style={{ marginTop: '1rem' }}>
            <a href={'mailto:' + meta.email} style={hireStyle}>
              Hire Me
            </a>
          </div>
        </div>
      ) : null}

    </nav>
  );
}