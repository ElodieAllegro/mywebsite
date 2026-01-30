import './PricingHero.css';

export default function PricingHero() {
return (
    <section className="pricing-hero">
        <div className="pricing-hero-container">
            <div className="pricing-hero-content">
                <h1 className="pricing-hero-title">TARIFS TRANSPARENTS</h1>
                <p className="pricing-hero-subtitle">
                    Des solutions web adaptées à votre budget et vos besoins
                </p>
                <p className="pricing-hero-description">
                    Qu'il s'agisse d'une landing page pour promouvoir votre offre, d'un site vitrine pour présenter votre entreprise, 
                    ou d'une maintenance régulière, nous avons la solution qu'il vous faut. Tous nos tarifs incluent le référencement naturel 
                    et un accompagnement professionnel.
                </p>
                <p className="pricing-hero-subtitle">Si vous ne trouvez pas votre offre,.</p>
                <button className='cta' type='button' onClick={() => window.location.href = '/contact'}>contactez-nous</button>
            </div>
        </div>
    </section>
);
}
