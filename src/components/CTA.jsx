import './CTA.css';

export default function CTA({ setCurrentPage }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="cta-section">
      <div className="cta-top-line"></div>
      <div className="cta-container">
        <h2 className="cta-title">
          <span className="cta-title-pink">ÊTES VOUS PRÊT À FAIRE</span>{' '}
          <span className="cta-title-blue">DÉCOLLER VOTRE CA</span>
        </h2>
        <div className="cta-buttons">
          <a 
            href="https://calendar.app.google/3WtB5c3w8JJ8t43V6" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <a href="#contact" className="cta-button" onClick={handleContactClick}>
            CONTACTEZ NOUS
          </a>
        </div>
      </div>
    </section>
  );
}
