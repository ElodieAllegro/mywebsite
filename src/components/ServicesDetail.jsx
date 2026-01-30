import './ServicesDetail.css';

export default function ServicesDetail({ setCurrentPage }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const services = [
    {
      title: 'Création de site vitrine',
      description:
        "Présentez votre activité avec un site professionnel, moderne et SEO-friendly. Nous concevons des sites vitrines sur mesure, adaptés à votre image de marque et optimisés pour le référencement naturel. Attirez plus de visiteurs, convertissez-les en clients et développez votre présence en ligne grâce à un site qui vous ressemble.",
      icon: '/vitrine.svg',
      page: 'creation-site-vitrine',
    },
    {
      title: 'Création de landing page',
      description:
        "Landing page rapide et orientée conversion : prise de RDV, devis, inscription ou vente. Copy & design optimisés. Dès 90€/mois. Landing pages optimisées pour convertir vos visiteurs en clients. Nous concevons des landing pages performantes, conçues pour captiver votre audience et maximiser vos conversions. ",
      icon: '/landing-page.svg',
      page: 'landing-page',
    },
    {
      title: 'Création de site e-commerce',
      description:
        "Vendez en ligne avec une boutique rapide, rassurante et optimisée panier/achat. Nous développons des sites e-commerce sur mesure, adaptés à vos besoins et à ceux de vos clients. Offrez une expérience d'achat fluide et sécurisée pour maximiser vos ventes et fidéliser votre clientèle.",
      icon: '/e-commerce.svg',
      page: 'creation-site-ecommerce',
    },
    {
      title: 'Refonte de site web',
      description:
        "Améliorez design, performance, SEO et conversion sans repartir de zéro. Nous proposons des services de refonte de site web pour moderniser votre présence en ligne. Optimisez l'expérience utilisateur, améliorez le référencement naturel et boostez vos conversions avec un site repensé et performant.",
      icon: '/refonte.svg',
      page: 'refonte-site-web',
    },
    {
      title: 'Maintenance de site web',
      description:
        "Assurez la sécurité, les mises à jour et le bon fonctionnement de votre site. Nous proposons des services de maintenance pour garantir la performance et la sécurité de votre site web. Profitez d'un suivi régulier, de mises à jour techniques et d'une assistance dédiée pour un site toujours opérationnel.",
      icon: '/Maintenance.svg',
      link: '/contact',
    },
    {
      title: '(SEO / Google Ads), Identité visuelle',
      description:
        "Développez votre visibilité en ligne et votre présence sur les moteurs de recherche. Nous concevons des stratégies SEO et Google Ads pour attirer plus de trafic qualifié. Notre identité visuelle, incluant logo et charte graphique, renforce votre image de marque et votre reconnaissance.",
      icon: '/otherService.svg',
      link: '/contact',
    },
  ];

  return (
    <section className="services-detail">
      <div className="services-detail-container">
        {services.map((service, index) => (
          <div key={index} className="service-detail-card">
            <div className="service-detail-icon">
              <img src={service.icon} alt={service.title} className="service-svg" />
            </div>
            <h3 className="service-detail-title">{service.title}</h3>
            <p className="service-detail-description">{service.description}</p>
            {service.page ? (
              <button
                className="service-detail-button"
                onClick={() => setCurrentPage(service.page)}
              >
                En savoir plus
              </button>
            ) : (
              <a href={service.link} className="service-detail-button" onClick={handleContactClick}>
                En savoir plus
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
