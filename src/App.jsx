import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './styles/main.css';
import Home from "./assets/images/home.png";

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [activeTab, setActiveTab] = useState('b2c');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="evmap-app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="main-content">
        {/* Hero Section */}
      <section id="accueil" className="section hero-section">
        <br />
  <div className="container">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="gradient-text">EVMapyTN</span> – La plateforme intelligente de recharge électrique en Tunisie
        </h1>
        <p className="hero-subtitle">
          Localisez, réservez, payez et gérez vos sessions de recharge à travers une Application Mobile nationale, fiable et interopérable.
        </p>
       
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Disponibilité</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">OCPP Compatible</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Multi-opérateurs</span>
            <span className="stat-label">Interopérable</span>
          </div>
        </div>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollToSection('solution')}>
  <svg
    className="playstore-icon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gp-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F076" />
        <stop offset="100%" stopColor="#00C853" />
      </linearGradient>
      <linearGradient id="gp-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" />
        <stop offset="100%" stopColor="#2979FF" />
      </linearGradient>
      <linearGradient id="gp-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="100%" stopColor="#FFB300" />
      </linearGradient>
      <linearGradient id="gp-red" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5252" />
        <stop offset="100%" stopColor="#D32F2F" />
      </linearGradient>
    </defs>

    {/* Green */}
    <path
      fill="url(#gp-green)"
      d="M48 64v384c0 10 11 16 19 10l224-202L67 54c-8-6-19 0-19 10z"
    />

    {/* Yellow */}
    <path
      fill="url(#gp-yellow)"
      d="M336 256 384 216 320 176l-64 80z"
    />

    {/* Red */}
    <path
      fill="url(#gp-red)"
      d="M384 296l-48-40-80 80 64 40z"
    />

    {/* Blue */}
    <path
      fill="url(#gp-blue)"
      d="M256 336 96 448c6 4 14 4 20 0l140-112z"
    />
  </svg>

  Télécharger l’application
</button>

          <button className="btn btn-secondary" onClick={() => scrollToSection('mockup')}>
            <span className="btn-icon">⚡</span>
            Découvrir la solution
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="app-mockup-container">
        
            
            <img 
              src={Home} 
              alt="Interface EVMapyTN - Application de recharge électrique en Tunisie"
              className="app-screenshot"
            />
            {/* Bottom Navigation Tabs */}
           

          
          {/* Floating Elements */}
          
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Problem Section */}
       <section id="probleme" className="section problem-section">
  <div className="container">
    <div className="section-header">
      <span className="section-label">Problématique</span>
      <h2 className="section-title">
        <span className="gradient-text">Une recharge électrique fragmentée</span> et peu lisible
      </h2>
      <p className="section-subtitle">
        La mobilité électrique progresse en Tunisie, mais l'écosystème de recharge reste dispersé, 
        complexe et sous-optimisé pour les utilisateurs.
      </p>
    </div>
    
    <div className="problem-stats">
      <div className="stat-item">
        <span className="stat-number">+5</span>
        <span className="stat-text">Applications différentes</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">0</span>
        <span className="stat-text">Plateforme unifiée</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">100%</span>
        <span className="stat-text">Écosystème fragmenté</span>
      </div>
    </div>
    
    <div className="problem-grid">
      <div className="problem-card">
        <div className="card-icon">
          <div className="icon-wrapper">
            <span className="icon">🚧</span>
          </div>
        </div>
        <h3 className="card-title">Absence de plateforme nationale</h3>
        <p className="card-description">
          Pas de solution centralisée pour gérer l'ensemble du réseau de recharge tunisien
        </p>
        <div className="card-footer">
          <span className="footer-tag">Problème structurel</span>
        </div>
      </div>
      
      <div className="problem-card">
        <div className="card-icon">
          <div className="icon-wrapper">
            <span className="icon">👁️</span>
          </div>
        </div>
        <h3 className="card-title">Manque de visibilité</h3>
        <p className="card-description">
          Difficulté à localiser les bornes disponibles en temps réel avec leur statut
        </p>
        <div className="card-footer">
          <span className="footer-tag">Expérience utilisateur</span>
        </div>
      </div>
      
      <div className="problem-card">
        <div className="card-icon">
          <div className="icon-wrapper">
            <span className="icon">💳</span>
          </div>
        </div>
        <h3 className="card-title">Paiements multiples</h3>
        <p className="card-description">
          Différents systèmes de paiement, abonnements et méthodes de facturation
        </p>
        <div className="card-footer">
          <span className="footer-tag">Complexité opérationnelle</span>
        </div>
      </div>
      
      <div className="problem-card">
        <div className="card-icon">
          <div className="icon-wrapper">
            <span className="icon">📊</span>
          </div>
        </div>
        <h3 className="card-title">Données non exploitées</h3>
        <p className="card-description">
          Absence d'analytics et de données consolidées pour les décideurs
        </p>
        <div className="card-footer">
          <span className="footer-tag">Opportunité manquée</span>
        </div>
      </div>
    </div>
    
    <div className="problem-highlight">
      <div className="highlight-content">
        <div className="highlight-icon">⚡</div>
        <div className="highlight-text">
          <p className="highlight-quote">
            "L'infrastructure existe, mais elle n'est ni organisée ni optimisée pour une adoption massive."
          </p>
          <div className="highlight-author">
            <span className="author-name">Nassim H.</span>
            <span className="author-role">CTO EVMapyTN - Tunis</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Solution Section */}
       <section id="solution" className="section cat-solution">
  <div className="container">
    <div className="cat-header">
      <span className="section-label">Solution</span>
      <h2 className="cat-title">
        <span className="gradient-text">Une plateforme, un écosystème,</span> plusieurs usages
      </h2>
      <p className="cat-subtitle">
        EVMapyTN centralise l'ensemble des services liés à la recharge électrique dans une plateforme unique, 
        simple et évolutive.
      </p>
    </div>
    
    <div className="cat-grid">
      {/* B2C Card */}
      <div className="cat-card cat-driver">
        <div className="cat-card-header">
          <h3 className="cat-card-title">Pour les conducteurs (B2C)</h3>
        </div>
        <div className="cat-card-body">
          <ul className="cat-list">
            <li>Carte interactive nationale des bornes</li>
            <li>Disponibilité en temps réel</li>
            <li>Navigation GPS intégrée</li>
            <li>Réservation et paiement en ligne</li>
            <li>Historique et avis utilisateurs</li>
          </ul>
          <div className="cat-result">
            <strong>Résultat :</strong> une expérience de recharge fluide et rassurante.
          </div>
        </div>
      </div>
      
      {/* B2B Card */}
      <div className="cat-card cat-operator">
        <div className="cat-card-header">
          <h3 className="cat-card-title">Pour les opérateurs (B2B)</h3>
        </div>
        <div className="cat-card-body">
          <ul className="cat-list">
            <li>Gestion multi-stations et bornes</li>
            <li>Suivi état et disponibilité</li>
            <li>Statistiques d'utilisation</li>
            <li>Gestion des revenus</li>
            <li>Supervision centralisée</li>
          </ul>
          <div className="cat-result">
            <strong>Résultat :</strong> meilleure rentabilité et contrôle opérationnel.
          </div>
        </div>
      </div>
      
      {/* B2G Card */}
      <div className="cat-card cat-institution">
        <div className="cat-card-header">
          <h3 className="cat-card-title">Pour les institutions (B2G)</h3>
        </div>
        <div className="cat-card-body">
          <ul className="cat-list">
            <li>Vision globale du réseau national</li>
            <li>Données fiables pour la planification</li>
            <li>Suivi transition énergétique</li>
            <li>Outil d'aide à la décision</li>
            <li>Coordination public-privé</li>
          </ul>
          <div className="cat-result">
            <strong>Résultat :</strong> pilotage stratégique de la mobilité électrique.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       <section id="mockup" className="section cat-interface">
  <div className="container">
    <div className="cat-header">
      <h2 className="cat-title">
        Explorez l'interface <span className="gradient-text">EVMapyTN</span>
      </h2>
      <p className="cat-subtitle">
        Découvrez les écrans clés de notre application mobile - conçue pour une expérience utilisateur exceptionnelle
      </p>
    </div>
    
    {/* Main App Interface Showcase */}
    <div className="cat-interface-showcase">
      <div className="cat-interface-main">
        <div className="cat-phone-container">
          <div className="cat-phone">
            <div className="cat-phone-notch"></div>
            <img 
              src="/path-to-your-main-screen.png" 
              alt="Écran principal EVMapTN"
              className="cat-phone-screen"
            />
          </div>
          <div className="cat-interface-label">
            <h3>Écran principal</h3>
           
          </div>
        </div>
        
        <div className="cat-interface-features">
          <div className="cat-feature-card">
            <div className="cat-feature-icon">📍</div>
            <div className="cat-feature-details">
              <h4>Géolocalisation précise</h4>
              <p>Trouvez les stations les plus proches en temps réel</p>
            </div>
          </div>
          
          <div className="cat-feature-card">
            <div className="cat-feature-icon">⚡</div>
            <div className="cat-feature-details">
              <h4>Statut en direct</h4>
              <p>Disponibilité des bornes actualisée chaque minute</p>
            </div>
          </div>
          
          <div className="cat-feature-card">
            <div className="cat-feature-icon">💰</div>
            <div className="cat-feature-details">
              <h4>Tarifs transparents</h4>
              <p>Prix clairs avant chaque réservation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* App Screens Grid */}
    <div className="cat-app-screens">
      <h3 className="cat-screens-title">Les Interfaces de l'application</h3>
      
      <div className="cat-screens-grid">
        {/* Screen 1 - Search */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/src/assets/images/recherche.png" 
                alt="Recherche EVMapTN"
                className="cat-screen-image"
              />
            </div>
            <div className="cat-screen-info">
              <div className="cat-screen-number">01</div>
              <h4>Recherche avancée</h4>
              <p>Filtrez par puissance, prix et disponibilité</p>
              <ul className="cat-screen-features">
                <li>Filtres personnalisables</li>
                <li>Recherche par localisation</li>
                <li>Suggestions intelligentes</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Screen 2 - Reservation */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/path-to-reservation-screen.png" 
                alt="Réservation EVMapTN"
                className="cat-screen-image"
              />
            </div>
            <div className="cat-screen-info">
              <div className="cat-screen-number">02</div>
              <h4>Réservation rapide</h4>
              <p>Réservez votre borne en quelques secondes</p>
              <ul className="cat-screen-features">
                <li>Sélection de créneau</li>
                <li>Confirmation instantanée</li>
                <li>QR code d'accès</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Screen 3 - Charging */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/path-to-charging-screen.png" 
                alt="Chargement EVMapTN"
                className="cat-screen-image"
              />
            </div>
            <div className="cat-screen-info">
              <div className="cat-screen-number">03</div>
              <h4>Suivi de recharge</h4>
              <p>Surveillez votre session en temps réel</p>
              <ul className="cat-screen-features">
                <li>Progression en direct</li>
                <li>Estimation de durée</li>
                <li>Notifications push</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Screen 4 - History */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/path-to-history-screen.png" 
                alt="Historique EVMapTN"
                className="cat-screen-image"
              />
            </div>
            <div className="cat-screen-info">
              <div className="cat-screen-number">04</div>
              <h4>Historique & paiements</h4>
              <p>Consultez vos sessions et dépenses</p>
              <ul className="cat-screen-features">
                <li>Détails des recharges</li>
                <li>Factures téléchargeables</li>
                <li>Statistiques mensuelles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* App Features Summary */}
    
  </div>
</section>
        {/* Video Tutorial Section */}
        <section id="tutoriel" className="section video-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Comment utiliser EVMapyTN en 2 minutes</h2>
              <p className="section-subtitle">Découvrez comment simplifier votre recharge électrique avec notre tutoriel vidéo</p>
            </div>
            
            <div className="video-container">
              <div className="video-player">
                {/* Video Placeholder - Replace with actual video */}
                <div className="video-placeholder">
                  <div className="play-button">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="#0066FF" fillOpacity="0.1"/>
                      <circle cx="40" cy="40" r="30" fill="#0066FF"/>
                      <path d="M50 40L34 48V32L50 40Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="video-overlay">
                    <h3>Tutoriel EVMapTN</h3>
                    <p>Comment trouver, réserver et payer votre recharge</p>
                  </div>
                </div>
                
                <div className="video-info">
                  <div className="video-duration">2:30</div>
                  <div className="video-quality">HD</div>
                </div>
              </div>
              
              <div className="video-steps">
                <h3>Étapes principales démontrées</h3>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Recherche de bornes</h4>
                      <p>Utilisez la carte interactive pour trouver les bornes disponibles près de vous</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Réservation</h4>
                      <p>Réservez votre borne en un clic et sécurisez votre créneau</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Navigation</h4>
                      <p>Suivez les instructions GPS vers la borne réservée</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Paiement</h4>
                      <p>Payez directement depuis l'application de manière sécurisée</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4>Suivi</h4>
                      <p>Surveillez votre recharge en temps réel et recevez des notifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="video-cta">
              <button className="btn btn-primary">
                <span>🎥 Voir la démo complète</span>
              </button>
              <button className="btn btn-outline">
                <span>📱 Télécharger l'app</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="fonctionnalites" className="section features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Fonctionnalités clés</h2>
              <p className="section-subtitle">Tout ce dont vous avez besoin pour une recharge intelligente</p>
            </div>
            
            <div className="features-grid">
              {[
                {icon: '🗺️', title: 'Carte nationale interactive', desc: 'OpenStreetMap avec overlay stations'},
                {icon: '🔍', title: 'Recherche intelligente', desc: 'Filtres par type, puissance, disponibilité'},
                {icon: '🧭', title: 'Navigation intégrée', desc: 'GPS optimisé pour bornes'},
                {icon: '💳', title: 'Paiement sécurisé', desc: 'Multiples moyens de paiement'},
                {icon: '📱', title: 'Réservation en ligne', desc: 'Planifiez votre recharge'},
                {icon: '📊', title: 'Dashboard opérateur', desc: 'Gestion et analytics'},
                {icon: '⭐', title: 'Système d\'avis', desc: 'Communauté de confiance'},
                {icon: '🔌', title: 'Interopérabilité', desc: 'API & OCPP Ready'},
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technologie" className="section tech-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Une base technologique robuste et scalable</h2>
              <p className="section-subtitle">Architecture moderne conforme aux standards internationaux</p>
            </div>
            
            <div className="tech-stack">
              <div className="stack-category">
                <h3>Frontend</h3>
                <div className="stack-items">
                  <div className="stack-item">React</div>
                  <div className="stack-item">Vite</div>
                  <div className="stack-item">TypeScript</div>
                </div>
              </div>
              
              <div className="stack-category">
                <h3>Mobile</h3>
                <div className="stack-items">
                  <div className="stack-item">Capacitor</div>
                  <div className="stack-item">React Native</div>
                </div>
              </div>
              
              <div className="stack-category">
                <h3>Backend</h3>
                <div className="stack-items">
                  <div className="stack-item">Node.js</div>
                  <div className="stack-item">TypeScript</div>
                  <div className="stack-item">Supabase</div>
                </div>
              </div>
              
              <div className="stack-category">
                <h3>Cartographie</h3>
                <div className="stack-items">
                  <div className="stack-item">OpenStreetMap</div>
                  <div className="stack-item">Leaflet</div>
                </div>
              </div>
              
              <div className="stack-category">
                <h3>Sécurité</h3>
                <div className="stack-items">
                  <div className="stack-item">JWT</div>
                  <div className="stack-item">RLS</div>
                  <div className="stack-item">HTTPS</div>
                </div>
              </div>
              
              <div className="stack-category">
                <h3>Standards</h3>
                <div className="stack-items">
                  <div className="stack-item">OCPP 1.6/2.0</div>
                  <div className="stack-item">ISO 15118</div>
                </div>
              </div>
            </div>
            
            <div className="tech-values">
              <div className="value-card">
                <h4>Architecture modulaire</h4>
                <p>Composants indépendants et maintenables</p>
              </div>
              <div className="value-card">
                <h4>Sécurité et performance</h4>
                <p>Best practices et optimisation continue</p>
              </div>
              <div className="value-card">
                <h4>Scalabilité régionale</h4>
                <p>Prêt pour expansion Maghreb</p>
              </div>
              <div className="value-card">
                <h4>Conformité standards</h4>
                <p>Interopérabilité garantie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="section team-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">L'équipe fondatrice</h2>
              <p className="section-subtitle">Une équipe complémentaire, engagée et orientée impact</p>
            </div>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">RF</div>
                <h3>Rania Fatnassi</h3>
                <div className="member-role">CEO</div>
                <p className="member-bio">
                  Vision stratégique, développement business, partenariats et pilotage global
                </p>
                <div className="member-expertise">
                  <span>Stratégie</span>
                  <span>Business Dev</span>
                  <span>Partenariats</span>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">ND</div>
                <h3>Nassim El Dali</h3>
                <div className="member-role">CTO</div>
                <p className="member-bio">
                  Architecture technique, mobilité électrique, supervision des systèmes et interopérabilité
                </p>
                <div className="member-expertise">
                  <span>Architecture</span>
                  <span>OCPP</span>
                  <span>Systèmes</span>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">YZ</div>
                <h3>Youssef Zrig</h3>
                <div className="member-role">CFO</div>
                <p className="member-bio">
                  Modèle économique, stratégie financière et structuration des revenus
                </p>
                <div className="member-expertise">
                  <span>Finance</span>
                  <span>Business Model</span>
                  <span>Stratégie</span>
                </div>
              </div>
            </div>
            
            <div className="team-extended">
              <h4>Équipe élargie</h4>
              <div className="extended-roles">
                <div className="role">Développeurs Full-Stack (4)</div>
                <div className="role">Designer UI/UX</div>
                <div className="role">Marketing & Growth</div>
                <div className="role">Support Client</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Rejoignez l'écosystème EVMapTN</h2>
              <p className="section-subtitle">Contactez-nous pour un partenariat, une démo ou plus d'informations</p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">🤝</div>
                  <h4>Partenariats</h4>
                  <p>Opérateurs de bornes, constructeurs automobiles</p>
                  <a href="mailto:partenariats@evmaptn.tn">partenariats@evmaptn.tn</a>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">🏛️</div>
                  <h4>Institutions</h4>
                  <p>Collectivités, programmes publics, investisseurs</p>
                  <a href="mailto:institutions@evmaptn.tn">institutions@evmaptn.tn</a>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">📋</div>
                  <h4>Dossier projet</h4>
                  <p>Téléchargez notre pitch deck complet</p>
                  <button className="btn btn-outline">Télécharger le PDF</button>
                </div>
              </div>
              
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Votre nom" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Votre email" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Type de demande</option>
                      <option value="partnership">Partenariat</option>
                      <option value="demo">Démo produit</option>
                      <option value="investment">Investissement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Votre message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Envoyer le message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;