import SEO from '../components/SEO';
import '../components/ServicePages.css';

export default function CreationSiteVitrine({ setCurrentPage }) {
  return (
    <>
      <SEO
        title="Création de site vitrine | Site pro rapide & sur mesure – EA Web Agency"
        description="Création de site vitrine rapide, design et SEO-friendly. Un site sur mesure qui inspire confiance et génère des demandes. Dès 90€/mois."
      />
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-icon">
            <img src="/vitrine.svg" alt="Site vitrine" className="service-hero-svg" />
          </div>
          <h1>Création de site vitrine professionnel</h1>
          <h2>Design sur mesure, responsive et optimisé SEO</h2>


          <p>Découvrez comment un site vitrine performant peut transformer votre présence en ligne et générer plus de demandes.</p>
        </div>

        <div className="service-content">
          <div className="service-section">
            <div className='icon'><i className="fa-solid fa-question"></i></div>
            <h2>Pourquoi un site vitrine performant change tout</h2>
            <p>Crédibilité, visibilité Google, génération de demandes, preuve sociale.</p>
          </div>

          <div className="service-section">
            <div className='icon'><i className="fa-solid fa-check"></i></div>
            <h2>Ce que vous obtenez</h2>
            <ul>
              <li>Design sur mesure (à votre image)</li>
              <li>Site responsive (mobile-first)</li>
              <li>Pages essentielles (Accueil, Services, À propos, Contact)</li>
              <li>Performance & vitesse (Core Web Vitals)</li>
              <li>SEO technique de base + structure Hn + maillage interne</li>
              <li>Formulaire / prise de rendez-vous</li>
            </ul>
          </div>

          <div className="service-section">
            <div className='icon'><i className="fa-solid fa-user"></i></div>
            <h2>Pour qui ?</h2>
            <p>Artisans, indépendants, PME, professions libérales.</p>
          </div>

          <div className="service-section">
            <div className='icon'><i className="fa-solid fa-star"></i></div>
            <h2>Avantages clés</h2>
            <p>Un site qui inspire confiance et convertit vos visiteurs en clients potentiels.</p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => setCurrentPage('contact')}>Demander un devis</button>
            <button className="cta-button secondary" onClick={() => setCurrentPage('contact')}>Prendre rendez-vous</button>
          </div>
        </div>

        <div className="other-services">
          <h2>Autres services</h2>
          <div className="other-services-grid">
            <div className="other-service-card" onClick={() => setCurrentPage('landing-page')}>
              <h3>Landing Page</h3>
              <p>Page de conversion optimisée pour vos campagnes.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-ecommerce')}>
              <h3>Site E-commerce</h3>
              <p>Boutique en ligne performante et sécurisée.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('refonte-site-web')}>
              <h3>Refonte Site Web</h3>
              <p>Modernisez votre site existant.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}