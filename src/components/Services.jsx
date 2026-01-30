import './Services.css';

export default function Services() {
  const services = [
    {
      icon: 'fa-laptop',
      title: 'Site Vitrine',
      description: 'Création site vitrine professionnel pour présenter votre entreprise avec élégance',
    },
    {
      icon: 'fa-shopping-cart',
      title: 'E-Commerce',
      description: 'Création site e-commerce optimisé pour maximiser vos ventes en ligne',
    },
    {
      icon: 'fa-wordpress',
      title: 'WordPress',
      description: 'Développement site WordPress sur mesure, flexible et facile à gérer',
    },
    {
      icon: 'fa-cogs',
      title: 'Maintenance',
      description: 'Maintenance site internet pour garantir performance et sécurité',
    },
    {
      icon: 'fa-search',
      title: 'SEO',
      description: 'Optimisation SEO pour sites web SEO-friendly et visibles sur Google',
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Design Responsive',
      description: 'Web design responsive adapté à tous les appareils mobiles et tablettes',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nos Services de Création de Sites Web</h2>
          <p className="services-intro">
            Solutions complètes pour votre présence digitale en France
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-circle">
                <i className={`fas ${service.icon} service-icon`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
