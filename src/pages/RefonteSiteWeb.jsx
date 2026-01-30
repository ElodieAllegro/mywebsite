import SEO from '../components/SEO';
import '../components/ServicePages.css';

export default function RefonteSiteWeb({ setCurrentPage }) {
  return (
    <>
      <SEO
        title="Refonte de site web | Performance, SEO & conversion – EA Web Agency"
        description="Refonte de site web : modernisez le design, améliorez la vitesse, le SEO et la conversion. Gardez l’essentiel, boostez les résultats."
      />
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-icon">
            <img src="/refonte.svg" alt="Refonte site web" className="service-hero-svg" />
          </div>
          <h1>Refonte de site web </h1>
          <h2>Design moderne, SEO et performance</h2>
          <p>Donnez un nouveau souffle à votre site web et améliorez ses performances.</p>
        </div>

        <div className="service-content">
          <div className="service-section">
            <h2>Quand refaire votre site ?</h2>
            <p>Site lent, non responsive, peu de demandes, design daté, SEO en baisse.</p>
          </div>

          <div className="service-section">
            <h2>Notre approche</h2>
            <ul>
              <li>Audit (UX, SEO, vitesse)</li>
              <li>Refonte design + structure</li>
              <li>Optimisation performance</li>
              <li>Reprise / amélioration contenus</li>
              <li>Redirections (SEO safe)</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>Résultat</h2>
            <p>Un site plus rapide, mieux positionné, plus convaincant.</p>
          </div>

          <div className="service-section">
            <h2>Bénéfices</h2>
            <p>Augmentez vos conversions et votre visibilité en ligne.</p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => setCurrentPage('contact')}>Demander un audit</button>
            <button className="cta-button secondary" onClick={() => setCurrentPage('contact')}>Devis refonte</button>
          </div>
        </div>

        <div className="other-services">
          <h2>Autres services</h2>
          <div className="other-services-grid">
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-vitrine')}>
              <h3>Site Vitrine</h3>
              <p>Créez votre présence en ligne.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('landing-page')}>
              <h3>Landing Page</h3>
              <p>Optimisez vos conversions.</p>
            </div>
            <div className="other-service-card" onClick={() => setCurrentPage('creation-site-ecommerce')}>
              <h3>Site E-commerce</h3>
              <p>Lancez votre boutique.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}