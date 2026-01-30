import SEO from '../components/SEO';
import '../components/ServicePages.css';

export default function LandingPage({ setCurrentPage }) {
  return (
    <>
      <SEO
        title="Landing page | Page de vente optimisée conversion – EA Web Agency"
        description="Landing page rapide et orientée conversion : prise de RDV, devis, inscription ou vente. Copy & design optimisés. Dès 90€/mois."
      />
      <div className="service-page">
        <div className="service-hero">
          <h1>Landing page optimisée conversion</h1>
          <h2>Design sur mesure, responsive et axé sur la conversion</h2>
          <p>Transformez vos visiteurs en clients avec une page dédiée à la conversion.</p>
        </div>

        <div className="service-content">
          <div className="service-section">
            <h2>Une page = un objectif : convertir</h2>
            <p>Trafic → action (RDV, devis, achat).</p>
          </div>

          <div className="service-section">
            <h2>Ce que nous optimisons</h2>
            <ul>
              <li>Message (proposition de valeur claire)</li>
              <li>Structure (preuves, bénéfices, objections)</li>
              <li>UX mobile + vitesse</li>
              <li>CTA et formulaires</li>
              <li>Tracking (Meta/Google si besoin)</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>Idéal pour</h2>
            <p>Publicités Google/Meta, lancement d'offre, événement, lead magnet.</p>
          </div>

          <div className="service-section">
            <h2>Résultats attendus</h2>
            <p>Augmentez vos conversions et maximisez le ROI de vos campagnes.</p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => setCurrentPage('contact')}>Créer ma landing page</button>
          </div>
        </div>

        <div className="other-services">
          <h2>Autres services</h2>
          <div className="other-services-grid">
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-vitrine')}>
              <h3>Site Vitrine</h3>
              <p>Présentez votre activité professionnellement.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-ecommerce')}>
              <h3>Site E-commerce</h3>
              <p>Boutique en ligne performante.</p>
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