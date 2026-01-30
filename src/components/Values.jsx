import './Values.css';

export default function Values({ setCurrentPage }) {
  const handleServicesClick = (e) => {
    e.preventDefault();
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const values = [
    {
      title: 'INTÉGRITÉ',
      description: 'Nous plaçons l\'honnêteté au cœur de nos relations.',
      content:
        'Chaque projet est une nouvelle occasion de transformer les idées en réussites digitales. Notre équipe est dédiée à fournir des solutions sur mesure qui répondent aux besoins uniques de chaque client.',
      button: 'DÉCOUVREZ NOS SOLUTIONS',
    },
    {
      title: 'INNOVATION',
      description: 'Toujours à la recherche de nouvelles façons de vous faire avancer.',
      content:
        'Notre engagement se traduit par des solutions innovantes qui s\'adaptent à votre rythme. Nous restons à l\'écoute pour vous aider à trouver le meilleur chemin vers votre succès.',
      button: 'DÉCOUVREZ NOS SOLUTIONS',
    },
    {
      title: 'ENGAGEMENT',
      description: 'Nous priorisons votre succès à chaque étape.',
      content:
        'Avec nous, vous avez un partenaire qui s\'engage à faire de votre succès une priorité. Ensemble, nous bâtissons un avenir digital solide.',
      button: 'DÉCOUVREZ NOS SERVICES',
    },
  ];

  return (
    <section className="values">
      <div className="values-container">
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <p className="value-content">{value.content}</p>
              <a href="#services" className="value-button" onClick={handleServicesClick}>
                {value.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
