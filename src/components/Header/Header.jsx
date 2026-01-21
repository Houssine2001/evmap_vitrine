import React, { useState, useEffect } from 'react';
import "../../styles/Header.css";
import logoIcon from "../../assets/images/evmapytn.png";
import { FaGooglePlay, FaApple, FaTimes } from 'react-icons/fa';

export default function Header({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

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

  const handleDownloadClick = () => {
    setShowDownloadPopup(true);
    setMobileMenuOpen(false);
  };

  const handleClosePopup = () => {
    setShowDownloadPopup(false);
  };

  return (
    <>
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
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'logo-fallback';
                      fallback.innerHTML = '<span class="fallback-e">E</span><span class="fallback-v">V</span><div class="fallback-bolt">⚡</div>';
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
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
                  onClick={handleDownloadClick}
                >
                  <div className="button-content">
                    <div className="button-icon">
                      <FaGooglePlay className="store-icon" />
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

      {/* Download Popup Modal */}
      {showDownloadPopup && (
        <div className="download-popup-overlay" onClick={handleClosePopup}>
          <div className="download-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={handleClosePopup}>
              <FaTimes />
            </button>
            
            <div className="popup-content">
              <div className="popup-icon">
                <div className="coming-soon-badge">Bientôt Disponible</div>
                <div className="app-icon-container">
                  <div className="app-icon-glow">
                    <FaGooglePlay className="popup-main-icon" />
                  </div>
                </div>
              </div>
              
              <h2 className="popup-title">Disponible Prochainement</h2>
              <p className="popup-description">
               Découvrez la première application tunisienne de recharge intelligente pour véhicules électriques. Disponible prochainement sur l'App Store et Google Play.
              </p>
              
              <div className="store-buttons">
                <div className="store-button playstore">
                  <div className="store-icon-wrapper">
                    <FaGooglePlay className="store-button-icon" />
                  </div>
                  <div className="store-button-text">
                    <span className="store-button-label">Disponible sur</span>
                    <span className="store-button-name">Google Play</span>
                  </div>
                </div>
                
                <div className="store-button appstore">
                  <div className="store-icon-wrapper">
                    <FaApple className="store-button-icon" />
                  </div>
                  <div className="store-button-text">
                    <span className="store-button-label">Disponible sur</span>
                    <span className="store-button-name">App Store</span>
                  </div>
                </div>
              </div>
              
              
            
            </div>
          </div>
        </div>
      )}
    </>
  );
}