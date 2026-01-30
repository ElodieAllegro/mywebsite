import ServicesHero from '../components/ServicesHero';
import ServicesIntro from '../components/ServicesIntro';
import ServicesDetail from '../components/ServicesDetail';
import Process from '../components/Process';
import SEO from '../components/SEO';

export default function ServicesPage({ setCurrentPage }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Création de sites web",
    "provider": {
      "@type": "Organization",
      "name": "EA Web Agency"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Site Vitrine",
            "description": "Création de sites vitrine professionnels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce",
            "description": "Développement de boutiques en ligne performantes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement sur mesure",
            "description": "Solutions web personnalisées"
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Nos Services Web"
        description="Découvrez nos services : création site vitrine, e-commerce, développement web sur mesure, refonte de site, maintenance et SEO. Solutions adaptées à votre entreprise."
        keywords="services web, création site vitrine, e-commerce, boutique en ligne, développement web, site sur mesure, refonte site, maintenance web, SEO"
        structuredData={structuredData}
      />
      <ServicesHero />
      <ServicesIntro setCurrentPage={setCurrentPage} />
      <ServicesDetail setCurrentPage={setCurrentPage} />
      <Process />
    </div>
  );
}
