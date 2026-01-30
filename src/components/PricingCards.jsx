import './PricingCards.css';

export default function PricingCards({ setCurrentPage }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pricingPlans = [
    {
      category: 'Votre landing Page',
      title: 'Landing Page - 3 Sections',
      badge: 'Idéal pour démarrer',
      price: '90€',
      period: '/mois',
      duration: '12 mois',
      totalPrice: '999€ TTC',
      features: [
        '1 page / 3 sections',
        'Template basique',
        'Formulaire de contact',
        'Référencement naturel',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Votre landing Page',
      title: 'Landing Page - 5 Sections',
      badge: 'Plus de contenu',
      price: '100€',
      period: '/mois',
      duration: '12 mois',
      totalPrice: '1 100€ TTC',
      features: [
        '1 page / 5 sections',
        'Template basique',
        'Formulaire de contact',
        'Référencement naturel',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Votre landing Page',
      title: 'Landing Page Personnalisée',
      badge: 'Sur-mesure',
      price: '120€',
      period: '/mois',
      duration: '12 mois',
      totalPrice: '1 320€ TTC',
      features: [
        'Jusqu\'à 5 sections',
        'Template 100% personnalisé',
        'Formulaire de contact',
        'Référencement naturel',
        'Animations',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Votre Site Vitrine',
      title: 'Site Vitrine - 3 Pages',
      badge: 'Pour votre présence',
      price: '100€',
      period: '/mois',
      duration: '24 mois',
      totalPrice: '2 300€ TTC',
      features: [
        '3 pages',
        'Template basique',
        'Formulaire de contact',
        'Référencement naturel',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Votre Site Vitrine',
      title: 'Site Vitrine - 5 Pages',
      badge: 'Vitrine complète',
      price: '100€',
      period: '/mois',
      duration: '36 mois',
      totalPrice: '3 500€ TTC',
      features: [
        '5 pages',
        'Template basique',
        'Formulaire de contact',
        'Référencement naturel',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Votre Site Vitrine',
      title: 'Site Vitrine Personnalisé',
      badge: 'Sur-mesure avancé',
      price: '120€',
      period: 'TTC/mois',
      duration: '36 mois',
      totalPrice: '4 200€ TTC',
      features: [
        'Jusqu\'à 5 pages',
        'Template 100% personnalisé',
        'Formulaire de contact',
        'Référencement naturel',
        'Animations',
        'CGV & infos utiles'
      ]
    },
    {
      category: 'Maintenance hebdomadaire',
      title: 'Maintenance - Option 1',
      badge: 'Essentiel',
      price: '50€',
      period: 'TTC/mois',
      duration: 'Sans engagement',
      totalPrice: null,
      features: [
        'Mises à jour des plugins',
        'Mises à jour des sauvegardes',
        'Ajout, modification de texte',
        'Ajout, modification d\'images'
      ]
    },
    {
      category: 'Maintenance hebdomadaire',
      title: 'Maintenance - Option 2',
      badge: 'Intermédiaire',
      price: '100€',
      period: 'TTC/mois',
      duration: 'Sans engagement',
      totalPrice: null,
      features: [
        'Mises à jour des plugins',
        'Mises à jour des sauvegardes',
        'Surveillance de la sécurité',
        'Ajout, modification de texte',
        'Ajout, modification d\'images',
        'Ajout, modification du formulaire'
      ]
    },
    {
      category: 'Maintenance hebdomadaire',
      title: 'Maintenance - Option 3',
      badge: 'Complète',
      price: '150€',
      period: 'TTC/mois',
      duration: 'Sans engagement',
      totalPrice: null,
      features: [
        'Mises à jour des plugins',
        'Mises à jour des sauvegardes',
        'Surveillance de la sécurité',
        'Ajout, modification du contenu',
        'Ajout, modification du formulaire',
        'Modification de la structure'
      ]
    }
  ];

  const categories = ['Votre landing Page', 'Votre Site Vitrine', 'Maintenance hebdomadaire'];

  const categoryDescriptions = {
    'Votre landing Page': 'Une page optimisée pour convertir vos visiteurs en clients potentiels.',
    'Votre Site Vitrine': 'Un site web complet pour présenter votre entreprise et vos services en ligne.',
    'Maintenance hebdomadaire': 'Un service de maintenance régulier pour garder votre site à jour et sécurisé.'
  };

  return (
    <section className="pricing-cards">
      <div className="pricing-cards-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Nos Offres de Tarification</h2>
          <p className="pricing-subtitle">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        {categories.map((category) => {
          const plans = pricingPlans.filter((plan) => plan.category === category);
          return (
            <div key={category} className="pricing-category">
              <h3 className="pricing-category-title">{category}</h3>
              <p className="pricing-category-description">{categoryDescriptions[category]}</p>
              <div className="pricing-grid">
                {plans.map((plan, index) => (
                  <div key={index} className="pricing-card">
                    <span className="pricing-badge">{plan.badge}</span>
                    <h3 className="pricing-card-title">{plan.title}</h3>
                    
                    <div className="pricing-price">
                      <div className="pricing-amount">
                        {plan.price} <span>{plan.period}</span>
                      </div>
                      <div className="pricing-duration">{plan.duration}</div>
                    </div>

                    {plan.totalPrice && (
                      <div className="pricing-total">
                        ou {plan.totalPrice}
                      </div>
                    )}

                    <ul className="pricing-features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="pricing-feature">
                          <div className="pricing-feature-icon"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="#contact" 
                      className="pricing-cta" 
                      onClick={handleContactClick}
                    >
                      Acheter
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
