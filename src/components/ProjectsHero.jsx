import './ProjectsHero.css';

export default function ProjectsHero() {
  const services = [
    'Sites vitrines professionnels',
    'Boutiques en ligne (e-commerce)',
    'Landing pages optimisées SEO',
    'Refonte de site web existant',
    'Sites administrables avec WordPress',
    'Développement sur-mesure.',
  ];

  const strengths = [
    'Design moderne et personnalisé.',
    'Développement responsive.',
    'Optimisation SEO et campagne Google ADS',
    'Intégration des meilleures pratiques UX/UI',
    'Accompagnement et conseils tout au long du projet.',
  ];

  return (
    <section className="projects-hero">
      <div className="projects-hero-container">
        <div className="projects-hero-content">
          <div className="projects-hero-text">
            <p className="projects-hero-description">
              Chez <strong>ae-webagency</strong>, chaque projet web est unique. Nous accompagnons{' '}
              <strong>les PME</strong> dans la <strong>création de site vitrine</strong>,{' '}
              <strong>site e-commerce</strong> ou <strong>landing page optimisée</strong> pour le{' '}
              <strong>référencement naturel (SEO)</strong>.
            </p>
            <p className="projects-hero-description">
              Découvrez ici quelques-unes de nos <strong>réalisations web</strong> : des sites modernes,
              responsive et pensés pour <strong>convertir vos visiteurs en clients</strong>.
            </p>
          </div>
          <div className="projects-hero-image">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Devices showcasing responsive design"
            />
          </div>
        </div>

        <div className="projects-hero-features">
          <div className="projects-hero-feature-col">
            <h3 className="projects-hero-feature-title">Ce que nous réalisons :</h3>
            <ul className="projects-hero-list">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="projects-hero-feature-col">
            <h3 className="projects-hero-feature-title">Nos atouts :</h3>
            <ul className="projects-hero-list">
              {strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
