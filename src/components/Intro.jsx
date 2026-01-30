import './Intro.css';

export default function Intro({ setCurrentPage }) {
  return (
    <section className="intro">
      <div className="intro-container">
        <h2 className="intro-title">
          Votre partenaire digital pour la création de site web professionnel
        </h2>
        <p className="intro-description">
          Que vous recherchiez une <strong>création site vitrine</strong> pour valoriser votre activité, un <strong>site e-commerce</strong> performant pour vendre en ligne, ou un <strong>développement site sur mesure</strong> adapté à vos besoins spécifiques, nous avons la solution idéale.
        </p>
        <p className="intro-description">
          Notre agence web accompagne les entreprises de toute la France avec des <strong>solutions digitales personnalisées</strong>. Du <strong>web design responsive</strong> à la <strong>maintenance site internet</strong>, en passant par l'optimisation SEO et le développement WordPress, nous mettons notre expertise au service de votre croissance.
        </p>
        <div className="intro-features">
          <div className="intro-feature">
            <i className="fas fa-check-circle"></i>
            <span>Sites SEO-friendly optimisés pour Google</span>
          </div>
          <div className="intro-feature">
            <i className="fas fa-check-circle"></i>
            <span>Design responsive adapté mobile et tablette</span>
          </div>
          <div className="intro-feature">
            <i className="fas fa-check-circle"></i>
            <span>Accompagnement personnalisé partout en France</span>
          </div>
        </div>
        <a 
          href="#services" 
          className="intro-button"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          DÉCOUVREZ NOS SERVICES
        </a>
      </div>
    </section>
  );
}
