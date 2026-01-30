import './Audit.css';

export default function Audit({ setCurrentPage }) {
  return (
    <section className="audit">
      <div className="audit-container">
        <div className="audit-content">
          <div className="audit-image-wrapper">
            <div className="audit-badge">OFFERT</div>
            <div className="audit-image-placeholder">
             <img src="/audit-gratuit.webp" alt="Audit Gratuit" />
            </div>
          </div>
          <div className="audit-text">
            <h2 className="audit-title">PROFITEZ D'UN AUDIT GRATUIT</h2>
            <p className="audit-description">
              J'analyse votre site Sans engagement, sans frais, juste un coup de pouce pour démarrer !
            </p>
            <a 
              href="#contact" 
              className="audit-button"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              JE VEUX MON AUDIT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
