import { useState, useEffect } from 'react';
import { meta } from '../data/portfolio';
import './Navbar.css';

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

  useEffect(function() {
    var onScroll = function() { setScrolled(window.scrollY > 40); };
    window.addEventListener('scroll', onScroll);
    return function() { window.removeEventListener('scroll', onScroll); };
  }, [setScrolled]);

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

  return (
    <nav className={'navbar' + (scrolled ? ' scrolled' : '') + (isLight ? ' light' : '') + (menuOpen ? ' open' : '')}>

      <div className="navbar-top">
        <span className="navbar-logo">
          OE<span className="navbar-logo-dot">.</span>
        </span>

        <div className="navbar-desktop">
          {links.map(function(link) {
            return (
              <button key={link} className="navbar-link" onClick={function() { handleNav(link); }}>
                {link}
              </button>
            );
          })}
          <button className="navbar-toggle" onClick={toggleTheme}>
            {isLight ? 'Dark' : 'Light'}
          </button>
          <a href={'mailto:' + meta.email} className="navbar-hire">
            Hire Me
          </a>
        </div>

        <div className="navbar-mobile-right">
          <button className="navbar-toggle" onClick={toggleTheme}>
            {isLight ? 'Dark' : 'Light'}
          </button>
          <button className="navbar-hamburger" onClick={function() { setMenuOpen(!menuOpen); }}>
            <span className={'bar' + (menuOpen ? ' open' : '')} />
            <span className={'bar' + (menuOpen ? ' open' : '')} />
            <span className={'bar' + (menuOpen ? ' open' : '')} />
          </button>
        </div>
      </div>

      <div className={'navbar-dropdown' + (menuOpen ? ' open' : '')}>
        {links.map(function(link) {
          return (
            <button key={link} className="navbar-dropdown-link" onClick={function() { handleNav(link); }}>
              {link}
            </button>
          );
        })}
        <a href={'mailto:' + meta.email} className="navbar-hire mobile">
          Hire Me
        </a>
      </div>

    </nav>
  );
}