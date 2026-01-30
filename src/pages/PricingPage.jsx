import PricingHero from '../components/PricingHero';
import PricingCards from '../components/PricingCards';
import SEO from '../components/SEO';

export default function PricingPage({ setCurrentPage }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "priceCurrency": "EUR",
    "description": "Découvrez tous nos tarifs pour la création de sites web, landing pages et services de maintenance"
  };

  return (
    <div>
      <SEO
        title="Nos Tarifs - Création de Sites Web"
        description="Découvrez nos offres de tarification pour la création de landing pages, sites vitrines et services de maintenance. Des solutions adaptées à tous les budgets."
        keywords="tarifs web, prix création site, landing page prix, site vitrine prix, maintenance web"
        structuredData={structuredData}
      />
      <PricingHero />
      <PricingCards setCurrentPage={setCurrentPage} />
    </div>
  );
}
