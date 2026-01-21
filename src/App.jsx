import { useEffect, useState } from "react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './styles/main.css';
import Home from "./assets/images/home.png";
import Cart from "/src/assets/images/cart.png";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaLock,
  FaMapMarkedAlt,
  FaServer,
  FaShieldAlt,
   FaCubes,
  FaTachometerAlt,
  FaGlobeAfrica,
   FaMapMarkerAlt,
  FaBolt,
  FaEuroSign,
   FaTools,
  FaEye,
  FaCreditCard,
  FaChartBar
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiSupabase,
  SiOpenstreetmap,
  SiJsonwebtokens,
  SiLeaflet
} from "react-icons/si";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiCopy
} from "react-icons/fi";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import { LuZap } from "react-icons/lu";
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
const images = [Home, Cart];
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 7000);

  return () => clearInterval(interval);
}, []);

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
          <span className="gradient-text">EVMapyTN</span><span class="tagline">
   La plateforme intelligente de recharge électrique en Tunisie
</span>

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
          <button className="btn btn-primary" >
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

          <button className="btn btn-secondary" onClick={() => scrollToSection('solution')}>
            <span className="btn-icon">⚡</span>
            Découvrir la solution
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="app-mockup-container">
        
            
          <img 
  src={images[currentImage]}
  alt="Interface EVMapyTN - Application de recharge électrique en Tunisie"
  className="app-screenshot fade-animation"
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
        <span className="stat-number">+2</span>
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
    <div className="icon-wrapper infrastructure">
      <FaTools className="icon" />
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
    <div className="icon-wrapper visibility">
      <FaEye className="icon" />
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
    <div className="icon-wrapper payment">
      <FaCreditCard className="icon" />
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
    <div className="icon-wrapper data">
      <FaChartBar className="icon" />
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
        <div className="highlight-icon"><img alt="Nassim El Dali" class="cat-member-photo-" src="/src/assets/images/nassim.png"/></div>
        <div className="highlight-text">
          <p className="highlight-quote">
            "L'infrastructure existe, mais elle n'est ni organisée ni optimisée pour une adoption massive."
          </p>
          <div className="highlight-author">
            <span className="author-name">Nassim El Dali</span>
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

       <section id="application"  className="section cat-interface">
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
        
            
            <img 
              src="/src/assets/images/home.png" 
              alt="Écran principal EVMapyTN"
              className="cat-phone-screen"
            />
          
          <div className="cat-interface-label">
            <h3>Écran principal</h3>
           
          </div>
        </div>
        
        <div className="cat-interface-features">
         <div className="cat-feature-card">
  <div className="cat-feature-icon location">
    <FaMapMarkerAlt />
  </div>
  <div className="cat-feature-details">
    <h4>Géolocalisation précise</h4>
    <p>Trouvez les stations les plus proches en temps réel</p>
  </div>


          </div>
          
         <div className="cat-feature-card">
  <div className="cat-feature-icon live">
    <FaBolt />
  </div>
  <div className="cat-feature-details">
    <h4>Statut en direct</h4>
    <p>Disponibilité des bornes actualisée chaque minute</p>
  </div>


          </div>
          
       <div className="cat-feature-card">
  <div className="cat-feature-icon pricing">
    <FaEuroSign />
  </div>
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
      <h3 className="cat-screens-title">Les Autres Interfaces</h3>
      
      <div className="cat-screens-grid">
        {/* Screen 1 - Search */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/src/assets/images/recherche.png" 
                alt="Recherche EVMapyTN"
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
                src="/src/assets/images/reservation.png" 
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
        
      {/* Screen 3 - Payment */}
<div className="cat-screen-card">
  <div className="cat-screen-preview">
    <div className="cat-screen-frame">
      <img 
        src="/src/assets/images/paiement.png" 
        alt="Paiement EVMapTN"
        className="cat-screen-image"
      />
    </div>
    <div className="cat-screen-info">
      <div className="cat-screen-number">03</div>
      <h4>Paiement sécurisé</h4>
      <p>Transactions rapides et sécurisées</p>
      <ul className="cat-screen-features">
        <li>Multiples modes de paiement</li>
        <li>Validation instantanée</li>
        <li>Reçu électronique</li>
      </ul>
    </div>
  </div>
</div>
        
        {/* Screen 4 - History */}
        <div className="cat-screen-card">
          <div className="cat-screen-preview">
            <div className="cat-screen-frame">
              <img 
                src="/src/assets/images/historique.png" 
                alt="Historique EVMapTN"
                className="cat-screen-image"
              />
            </div>
            <div className="cat-screen-info">
              <div className="cat-screen-number">04</div>
              <h4>Historique Recharges & paiements</h4>
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
      
       

      {/* Technology Section - Simple Emoji Version */}
<section id="technologie" className="section cat-tech">
  <div className="container">
    <div className="cat-header">
      <span className="cat-label">Technologie</span>
      <h2 className="cat-title">
        <span className="gradient-text">Architecture moderne</span> & robuste
      </h2>
      <p className="cat-subtitle">
        Une base technologique conforme aux standards internationaux, conçue pour évoluer avec vos besoins
      </p>
    </div>
    
    <div className="cat-tech-stack">
      {/* Frontend Stack */}
      <div className="cat-stack-category">
       <div className="cat-stack-header">
  <div className="cat-stack-icon frontend">
    <FaReact />
  </div>
  <h3 className="cat-stack-title">Front-End</h3>
</div>
        <div className="cat-stack-items">
         
          <div className="cat-stack-item">
  <FaReact className="cat-tech-icon react" />
  <span className="cat-tech-name">React JS</span>
</div>

<div className="cat-stack-item">
  <SiJavascript className="cat-tech-icon js" />
  <span className="cat-tech-name">JSX</span>
</div>
        </div>
      </div>
      
      {/* Mobile Stack */}
      <div className="cat-stack-category">
        <div className="cat-stack-header">
  <div className="cat-stack-icon mobile">
    <FaMobileAlt />
  </div>
  <h3 className="cat-stack-title">Mobile Front-End</h3>
</div>
        <div className="cat-stack-items">
         
          <div className="cat-stack-item">
  <FaMobileAlt className="cat-tech-icon native" />
  <span className="cat-tech-name">React Native</span>
</div>

        </div>
      </div>
      
      {/* Backend Stack */}
      <div className="cat-stack-category">
      <div className="cat-stack-header">
  <div className="cat-stack-icon backend">
    <FaServer />
  </div>
  <h3 className="cat-stack-title">Back-End</h3>
</div>
       <div className="cat-stack-item">
  <FaNodeJs className="cat-tech-icon node" />
  <span className="cat-tech-name">Express.js</span>
</div><br />

<div className="cat-stack-item">
  <SiTypescript className="cat-tech-icon ts" />
  <span className="cat-tech-name">TypeScript</span>
</div><br />

<div className="cat-stack-item">
  <SiSupabase className="cat-tech-icon supabase" />
  <span className="cat-tech-name">Supabase</span>
</div>

      </div>
      
      {/* Cartography Stack */}
      <div className="cat-stack-category">
        <div className="cat-stack-header">
  <div className="cat-stack-icon maps">
    <FaMapMarkedAlt />
  </div>
  <h3 className="cat-stack-title">Cartographie</h3>
</div>
       <div className="cat-stack-item">
  <SiLeaflet className="cat-tech-icon leaflet" />
  <span className="cat-tech-name">Leaflet</span>
</div>
<br />
<div className="cat-stack-item">
  <SiOpenstreetmap className="cat-tech-icon osm" />
  <span className="cat-tech-name">OpenStreetMap</span>
</div>
      </div>
      
      {/* Security Stack */}
      <div className="cat-stack-category">
        <div className="cat-stack-header">
  <div className="cat-stack-icon security">
    <FaShieldAlt />
  </div>
  <h3 className="cat-stack-title">Sécurité</h3>
</div>
      <div className="cat-stack-item">
  <SiJsonwebtokens className="cat-tech-icon jwt" />
  <span className="cat-tech-name">JWT</span>
</div>
<br />
<div className="cat-stack-item">
  <FaLock className="cat-tech-icon lock" />
  <span className="cat-tech-name">HTTPS / TLS</span>
</div>

      </div>
      
     
        </div>
      
    
    <div className="cat-tech-values">
      <div className="cat-value-card">
  <div className="cat-value-icon architecture">
    <FaCubes />
  </div>
  <div className="cat-value-content">
    <h4>Architecture modulaire</h4>
    <p>Composants indépendants, maintenables et extensibles</p>
  </div>
</div>
      
     <div className="cat-value-card">
  <div className="cat-value-icon performance">
    <FaTachometerAlt />
  </div>
  <div className="cat-value-content">
    <h4>Performance optimale</h4>
    <p>Optimisation continue pour des temps de réponse instantanés</p>
  </div>
</div>
      
     <div className="cat-value-card">
  <div className="cat-value-icon security">
    <FaLock />
  </div>
  <div className="cat-value-content">
    <h4>Sécurité renforcée</h4>
    <p>Certifications et standards de sécurité les plus élevés</p>
  </div>
</div>

      
      <div className="cat-value-card">
  <div className="cat-value-icon scalability">
    <FaGlobeAfrica />
  </div>
  <div className="cat-value-content">
    <h4>Scalabilité régionale</h4>
    <p>Prêt pour l'expansion à travers le Maghreb et au-delà</p>
  </div>
</div>

    </div>
    
    

  </div>
</section>

      

       {/* Team Section */}
<section id="equipe" className="section cat-team">
  <div className="container">
    <div className="cat-header">
      <span className="cat-label">Équipe</span>
      <h2 className="cat-title">
        L'équipe fondatrice <span className="gradient-text">EVMapyTN</span>
      </h2>
      <p className="cat-subtitle">
        Une équipe complémentaire, engagée et passionnée par la mobilité électrique en Tunisie
      </p>
    </div>
    
    {/* Founder Team */}
    <div className="cat-team-grid">
      {/* Rania Fatnassi */}
      <div className="cat-member-card">
        <div className="cat-member-photo-container">
          <img 
            src="/src/assets/images/team/rania-fatnassi.jpg" 
            alt="Rania Fatnassi" 
            className="cat-member-photo"
          />
        </div>
        <div className="cat-member-content">
          <h3 className="cat-member-name">Rania Fatnassi</h3>
          <div className="cat-member-role">CEO & Co-founder</div>
          <p className="cat-member-bio">
            Vision stratégique, développement business, partenariats et pilotage global du projet.
          </p>
          <div className="cat-member-expertise">
            <span>Stratégie</span>
            <span>Business Dev</span>
            <span>Partenariats</span>
          </div>
        </div>
      </div>
      
      {/* Nassim El Dali */}
      <div className="cat-member-card">
        <div className="cat-member-photo-container">
          <img 
            src="/src/assets/images/nassim.png" 
            alt="Nassim El Dali" 
            className="cat-member-photo"
          />
        </div>
        <div className="cat-member-content">
          <h3 className="cat-member-name">Nassim El Dali</h3>
          <div className="cat-member-role">CTO & Co-founder</div>
          <p className="cat-member-bio">
            Architecture technique, mobilité électrique, supervision des systèmes et interopérabilité OCPP.
          </p>
          <div className="cat-member-expertise">
            <span>Architecture</span>
            <span>OCPP</span>
            <span>Systèmes</span>
          </div>
        </div>
      </div>
      
      {/* Youssef Zrig */}
      <div className="cat-member-card">
        <div className="cat-member-photo-container">
          <img 
            src="/src/assets/images/youssef-zrig.png" 
            alt="Youssef Zrig" 
            className="cat-member-photo"
          />
        </div>
        <div className="cat-member-content">
          <h3 className="cat-member-name">Youssef Zrig</h3>
          <div className="cat-member-role">CFO & Co-founder</div>
          <p className="cat-member-bio">
            Modèle économique, stratégie financière, structuration des revenus et gestion opérationnelle.
          </p>
          <div className="cat-member-expertise">
            <span>Finance</span>
            <span>Business Model</span>
            <span>Stratégie</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Technical Team */}
    <div className="cat-technical-team">
      <div className="cat-header">
        <h2 className="cat-title">
          L'équipe technique <span className="gradient-text">EVMapyTN</span>
        </h2>
      </div>
      <br /><br />
      
      <div className="cat-team-grid tech-grid">
        {/* Takoua Laffet */}
        <div className="cat-member-card tech-card">
          <div className="cat-member-photo-container">
            <img 
              src="/src/assets/images/team/takoua-laffet.jpg" 
              alt="Takoua Laffet" 
              className="cat-member-photo"
            />
          </div>
          <div className="cat-member-content">
            <h3 className="cat-member-name">Takoua Laffet</h3>
            <div className="cat-member-role">Backend Developer</div>
            <p className="cat-member-bio">
              Architecture serveur, API REST, base de données et intégration OCPP pour la gestion des bornes de recharge.
            </p>
            <div className="cat-member-expertise">
              <span>Express</span>
              <span>API</span>
              <span>Base de données</span>
            </div>
          </div>
        </div>
        
        {/* Ftiti Mohamed Marouan */}
        <div className="cat-member-card tech-card">
          <div className="cat-member-photo-container">
            <img 
              src="/src/assets/images/ftiti-marouan.png" 
              alt="Ftiti Mohamed Marouan" 
              className="cat-member-photo"
            />
          </div>
          <div className="cat-member-content">
            <h3 className="cat-member-name">Ftiti Mohamed Marouan</h3>
            <div className="cat-member-role">Full-Stack Developer</div>
            <p className="cat-member-bio">
              Développement des interfaces utilisateur, intégration cartographique et optimisation des performances.
            </p>
            <div className="cat-member-expertise">
              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
        
        {/* Houssine Ben Arous */}
        <div className="cat-member-card tech-card">
          <div className="cat-member-photo-container">
            <img 
              src="/src/assets/images/houssine-benarous.png" 
              alt="Houssine Ben Arous" 
              className="cat-member-photo"
            />
          </div>
          <div className="cat-member-content">
            <h3 className="cat-member-name">Houssine Ben Arous</h3>
            <div className="cat-member-role">Mobile Developer</div>
            <p className="cat-member-bio">
              Développement d'applications mobiles iOS et Android avec intégration de paiement et recharge.
            </p>
            <div className="cat-member-expertise">
              <span>React Native</span>
              <span>iOS/Android</span>
              <span>Paiement</span>
            </div>
          </div>
        </div>
        
        {/* Ahed Assoudi */}
        <div className="cat-member-card tech-card">
          <div className="cat-member-photo-container">
            <img 
              src="/src/assets/images/team/ahed-assoudi.jpg" 
              alt="Ahed Assoudi" 
              className="cat-member-photo"
            />
          </div>
          <div className="cat-member-content">
            <h3 className="cat-member-name">Ahed Assoudi</h3>
            <div className="cat-member-role">DevOps & Infrastructure</div>
            <p className="cat-member-bio">
              Infrastructure cloud, déploiement continu, monitoring et sécurité pour une plateforme haute disponibilité.
            </p>
            <div className="cat-member-expertise">
              <span>DevOps</span>
              <span>Cloud</span>
              <span>Sécurité</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact Section - Form + Contact Info */}
<section id="contact" className="section cat-contact">
  <div className="container">
    <div className="cat-header">
      <span className="cat-label">Contact</span>
      <h2 className="cat-title">
      Contactez   <span className="gradient-text"> notre équipe</span>
      </h2>
      <p className="cat-subtitle">
        Nous sommes là pour vous accompagner dans votre transition électrique
      </p>
    </div>
    
    <div className="cat-contact-layout">
      {/* Left Side - Contact Form */}
      <div className="cat-contact-form-section">
        <div className="form-header">
          <h3 className="form-title">Envoyez-nous un message</h3>
          <p className="form-subtitle">Nous vous répondrons dans les 24 heures</p>
        </div>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Votre nom</label>
            <input 
              type="text" 
              id="name" 
              className="form-input" 
              placeholder="Votre nom complet" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Votre email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="votre@email.com" 
              required 
            />
          </div>
          
         
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Votre message</label>
            <textarea 
              id="message" 
              className="form-textarea" 
              rows="5" 
              placeholder="Décrivez votre demande..." 
              required
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">
  <span className="btn-iconn">
    <FiSend />
  </span>
  <div className="btn-text">
    <span className="btn-title">Envoyer le message</span>
    <span className="btn-subtitle">Réponse rapide garantie</span>
  </div>
</button>

          </div>
        </form>
      </div>
      
      {/* Right Side - Contact Information */}
      <div className="cat-contact-info-section">
        <div className="contact-info-header">
          <h3 className="info-title">Informations de contact</h3>
          <p className="info-subtitle">Plusieurs façons de nous contacter</p>
        </div>
        
        <div className="contact-info-cards">
          {/* Email Card */}
          <div className="contact-info-card">
            <div className="info-card-content">
              <div className="info-card-icon">
  <span className="icon-wrapper">
    <FiMail />
  </span>
</div>

              <div className="info-card-text">
                <h4 className="info-card-title">Email</h4>
                <p className="info-card-description">Pour toutes demandes</p>
                <div className="info-card-action">
                  <a href="mailto:contact@evmapytn.tn" className="info-contact-link">
                    contact@evmapytn.tn
                  </a>
                  <button 
                    className="info-copy-btn" 
                    onClick={() => {
                      navigator.clipboard.writeText('contact@evmapytn.tn');
                      // Add toast notification here
                    }}
                    
                  >
                    Copier
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-info-card">
            <div className="info-card-content">
              <div className="info-card-icon">
  <span className="icon-wrapper">
    <FiPhone />
  </span>
</div>

              <div className="info-card-text">
                <h4 className="info-card-title">Téléphone</h4>
                <p className="info-card-description">Appelez-nous directement</p>
                <div className="info-card-action">
                  <span className="info-contact-link">+216</span>
                  
              
                 
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="contact-info-card">
            <div className="info-card-content">
             <div className="info-card-icon">
  <span className="icon-wrapper">
    <FaLinkedinIn />
  </span>
</div>

              <div className="info-card-text">
                <h4 className="info-card-title">LinkedIn</h4>
                <p className="info-card-description">Réseau professionnel</p>
                <div className="info-card-action">
                  <a 
                    href="https://linkedin.com/company/evmapytn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-contact-link"
                  >
                    /company/evmapytn
                  </a>
           
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="contact-info-card">
            <div className="info-card-content">
              <div className="info-card-icon">
  <span className="icon-wrapper">
    <FaFacebookF />
  </span>
</div>

              <div className="info-card-text">
                <h4 className="info-card-title">Facebook</h4>
                <p className="info-card-description">Suivez notre actualité</p>
                <div className="info-card-action">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61586684008715" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-contact-link"
                  >
                    @evmapytn
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        

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