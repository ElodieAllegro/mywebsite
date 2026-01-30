import './Offers.css';

export default function Offers({ setCurrentPage }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="offres" className="offers">
      <div className="offers-container">
        <div className="offers-header">
          <h2 className="offers-title">Nos Offres</h2>
          <p className="offers-subtitle">
            Des solutions adaptées à votre budget et vos besoins, avec un accompagnement personnalisé
          </p>
        </div>

        <div className="offers-grid">
          <div className="offer-card">
            <span className="offer-badge">Idéal pour démarrer</span>
            <h3 className="offer-name">Landing Page</h3>
            <p className="offer-description">de 3 à 5 sections</p>

            <div className="offer-price">
              <div className="offer-price-amount">
               dès 90€ <span>/mois</span><br />
              </div>
              <div className="offer-price-duration">pendant 12 mois</div>
            </div>
            <div className="offer-price-total">
              Ou dès 999€ TTC 
            </div>
              <div className="offer-price-duration">(paiement en une fois)</div>

            <ul className="offer-features">
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Template basique</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Trois sections</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Formulaire de contact</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Référencement naturel</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>CGV & infos utiles</span>
              </li>
            </ul>

            <a href="#contact" className="offer-cta" onClick={handleContactClick}>
              En savoir plus
            </a>
          </div>

          <div className="offer-card">
            <span className="offer-badge">Pour votre présence en ligne</span>
            <h3 className="offer-name">Site Vitrine</h3>
            <p className="offer-description">de 3 à 5 pages</p>

            <div className="offer-price">
              <div className="offer-price-amount">
                dès 100€ <span>/mois</span>
              </div>
              <div className="offer-price-duration">pendant 24 mois</div>
            </div>
            <div className="offer-price-total">
              Ou dès 2200€ TTC
            </div>
              <div className="offer-price-duration">(paiement en une fois)</div>

            <ul className="offer-features">
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Template basique</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Trois pages</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Formulaire de contact</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Référencement naturel</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>CGV & infos utiles</span>
              </li>
            </ul>

            <a href="#contact" className="offer-cta" onClick={handleContactClick}>
              En savoir plus
            </a>
          </div>

          <div className="offer-card">
            <span className="offer-badge">Maintenez votre site à jour</span>
            <h3 className="offer-name">Maintenance </h3>
            <p className="offer-description">Service de maintenance hebdomadaire</p>

            <div className="offer-price">
              <div className="offer-price-amount">
                50€ <span>TTC/mois</span>
              </div>
            </div>

            <ul className="offer-features">
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Mises à jour des plugins</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Mises à jour des sauvegardes</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Ajout, modification de texte</span>
              </li>
              <li className="offer-feature">
                <div className="offer-feature-icon"></div>
                <span>Ajout, modification d'images</span>
              </li>
            </ul>

            <a href="#contact" className="offer-cta" onClick={handleContactClick}>
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
