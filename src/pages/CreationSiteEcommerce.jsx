import SEO from '../components/SEO';
import '../components/ServicePages.css';

export default function CreationSiteEcommerce({ setCurrentPage }) {
  return (
    <>
      <SEO
        title="Création site e-commerce | Boutique en ligne rapide – EA Web Agency"
        description="Création de site e-commerce sur mesure : boutique rapide, parcours d’achat optimisé et SEO. Vendez en ligne efficacement. Dès 90€/mois."
      />
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-icon">
            <img src="/e-commerce.svg" alt="E-commerce" className="service-hero-svg" />
          </div>
          <h1>Création de site e-commerce</h1>
          <h2>Design sur mesure, responsive et optimisé SEO</h2>
          <p>Lancez votre boutique en ligne et vendez efficacement sur internet (boutique rapide et optimisée pour vendre).</p>
        </div>

        <div className="service-content">
          <div className="service-section">
            <h2>Un e-commerce qui rassure et fait acheter</h2>
            <p>Confiance, fiches produit, paiement, panier, livraison.</p>
          </div>

          <div className="service-section">
            <h2>Fonctionnalités clés</h2>
            <ul>
              <li>Catalogue / catégories</li>
              <li>Fiches produits optimisées</li>
              <li>Paiement sécurisé</li>
              <li>Optimisation panier/checkout</li>
              <li>Emails transactionnels</li>
              <li>SEO e-commerce (structure + performance)</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>Pour qui ?</h2>
            <p>Marques, artisans, boutiques, créateurs.</p>
          </div>

          <div className="service-section">
            <h2>Avantages</h2>
            <p>Vendez 24/7 et développez votre activité en ligne.</p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => setCurrentPage('contact')}>Lancer ma boutique en ligne</button>
          </div>
        </div>

        <div className="other-services">
          <h2>Autres services</h2>
          <div className="other-services-grid">
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-vitrine')}>
              <h3>Site Vitrine</h3>
              <p>Présentez votre activité.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('landing-page')}>
              <h3>Landing Page</h3>
              <p>Page de conversion optimisée.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('refonte-site-web')}>
              <h3>Refonte Site Web</h3>
              <p>Modernisez votre site.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}