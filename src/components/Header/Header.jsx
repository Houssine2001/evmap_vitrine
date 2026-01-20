import React, { useState, useEffect } from 'react';
import "../../styles/Header.css";
import logoIcon from "../../assets/images/evmapytn.png";


export default function Header({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'application', label: 'Application' },
    
    { id: 'technologie', label: 'Technologies' },
    { id: 'equipe', label: 'Équipe' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`ev-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Animated Background */}
      <div className="header-bg">
        <div className="bg-gradients">
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
          <div className="gradient-3"></div>
        </div>
        <div className="bg-grid"></div>
      </div>

      <nav className="navbar">
        {/* Premium Logo with Custom Image */}
        <div className="logo-wrapper" onClick={() => scrollToSection('accueil')}>
          <div className="logo-container">
            <div className="logo-frame">
              <div className="logo-inner-glow">
                <img 
                  src={logoIcon} 
                  alt="EVMapTN Logo" 
                  className="logo-image"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback';
                    fallback.innerHTML = '<span class="fallback-e">E</span><span class="fallback-v">V</span><div class="fallback-bolt">⚡</div>';
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
                {/* Fallback SVG for loading/error state */}
                
              </div>
              <div className="logo-sparkle"></div>
            </div>
          </div>
          <div className="logo-text">
            <span className="logo-title">
              <span className="logo-ev">EVMapy</span>
              <span className="logo-tn">TN</span>
            </span>
            <span className="logo-subtitle">Recharge intelligente</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`nav-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-container">
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="link-text">{item.label}</span>
                    <span className="link-underline"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="nav-actions">
             

              {/* Premium Download Button */}
              <button 
                className="download-button"
                onMouseEnter={() => setHoverDownload(true)}
                onMouseLeave={() => setHoverDownload(false)}
                onClick={() => window.open('#', '_blank')}
              >
                <div className="button-content">
                  <div className="button-icon">
                   <svg
  className="playstore-icon"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00F076" />
      <stop offset="100%" stopColor="#00C853" />
    </linearGradient>
    <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFD54F" />
      <stop offset="100%" stopColor="#FFB300" />
    </linearGradient>
    <linearGradient id="c" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FF5252" />
      <stop offset="100%" stopColor="#E53935" />
    </linearGradient>
    <linearGradient id="d" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#448AFF" />
      <stop offset="100%" stopColor="#2962FF" />
    </linearGradient>
  </defs>


  <path fill="url(#a)" d="M48 59v394c0 7 7 11 13 7l226-204L61 52c-6-4-13 0-13 7z"/>

  <path fill="url(#b)" d="M336 256 384 216 320 176l-64 80z"/>

  <path fill="url(#c)" d="M384 296l-48-40-80 80 64 40z"/>

  <path fill="url(#d)" d="M256 336 96 448c4 2 9 2 13-1l187-111z"/>
</svg>

                  </div>
                  <div className="button-text">
                    <span className="button-title">Télécharger</span>
                    <span className="button-subtitle">EVMapyTN</span>
                  </div>
                </div>
                <div className="button-glow"></div>
                <div className="button-shine"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </nav>
    </header>
  );
}