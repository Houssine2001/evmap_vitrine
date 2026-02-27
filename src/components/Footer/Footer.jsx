import React from 'react';
import "../../styles/Footer.css";
import logoIcon from "../../assets/images/evmapytn.png";
import { FaMapMarkerAlt, FaBolt, FaEuroSign, FaPhone, FaEnvelope, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'application', label: 'Application' },
    { id: 'technologie', label: 'Technologies' },
    { id: 'equipe', label: 'Équipe' },
    { id: 'contact', label: 'Contact' }
  ];

  const quickLinks = [
  
  ];

  return (
    <footer className="ev-footer">
      <div className="footer-container">
        
        {/* Top Section - Logo & Navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-wrapper" onClick={() => scrollToSection('accueil')}>
              <div className="logo-container">
                <div className="logo-frame">
                  <div className="logo-inner-glow">
                    <img 
                      src={logoIcon} 
                      alt="EVMapTN Logo" 
                      className="logo-image"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title">
                  <span className="logo-evv">EVMapy</span>
                  <span className="logo-tn">TN</span>
                </span>
                <span className="logo-subtitle">Recharge intelligente</span>
              </div>
            </div>
            <p className="footer-description">
              La plateforme nationale de recharge électrique en Tunisie. 
              Simplifiez votre mobilité électrique avec une solution complète et fiable.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61586684008715" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="links-title">Navigation</h3>
            <ul className="links-list">
              {menuItems.map((item) => (
                <li key={item.id} className="links-item">
                  <button 
                    className="links-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="footer-features">
            <h3 className="features-title">Pourquoi EVMapyTN</h3>
            <div className="feature-item">
              <div className="feature-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="feature-text">
                <h4>Géolocalisation</h4>
                <p>Bornes en temps réel</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaBolt />
              </div>
              <div className="feature-text">
                <h4>Disponibilité</h4>
                <p>Statut live des bornes</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaEuroSign />
              </div>
              <div className="feature-text">
                <h4>Paiement</h4>
                <p>Sécurisé & simple</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="contact-title">Contactez-nous</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <p>Email</p>
                <a href="mailto:contact@evmapytn.tn">evmaptn@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <p>Téléphone</p>
                <span>+216 23 961 611</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {currentYear} EVMapyTN. Tous droits réservés.</p>
            <div className="legal-links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="legal-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <button 
            className="back-to-top"
            onClick={() => scrollToSection('accueil')}
            aria-label="Retour en haut"
          >
            <span className="arrow">↑</span>
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  );
}