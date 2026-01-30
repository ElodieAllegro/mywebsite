import './ServicesIntro.css';

export default function ServicesIntro({ setCurrentPage }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const features = [
    'Conseils & accompagnement pour perfectionner votre projet web',
    'Création de Sites Web modernes et optimisés.',
    'Les conseils, la création et la maintenance de votre site web',
  ];

  return (
    <section className="services-intro">
      <div className="services-intro-container">
        <div className="services-intro-left">
          <p className="services-intro-subtitle">Découvrez Nos Services</p>
          <h2 className="services-intro-title">
            SOLUTIONS
            <br />
            ADAPTÉES À TOUS
            <br />
            VOS BESOINS.
          </h2>
        </div>
        <div className="services-intro-right">
          <p className="services-intro-description">
            Chez EA-WEBAGENCY, nous pensons qu'une forte présence en ligne est essentielle.
          </p>
          <p className="services-intro-description">
            Nos services sont là pour vous accompagner, que vous souhaitiez créer un site attrayant, améliorer votre SEO.
          </p>
          <ul className="services-intro-features">
            {features.map((feature, index) => (
              <li key={index} className="services-intro-feature">
                <i className="fas fa-star"></i>
                {feature}
              </li>
            ))}
          </ul>
          <div className="services-intro-buttons">
            <a href="#contact" className="services-intro-button" onClick={handleContactClick}>
              CONTACTEZ-NOUS!
            </a>
            <a 
              href="https://calendar.app.google/3WtB5c3w8JJ8t43V6" 
              className="services-intro-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRENEZ RENDEZ-VOUS!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
