import AgencyHero from '../components/AgencyHero';
import Values from '../components/Values';
import FAQ from '../components/FAQ';
import Process from '../components/Process';
import SEO from '../components/SEO';

export default function Agency({ setCurrentPage }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de EA Web Agency",
    "description": "Découvrez EA Web Agency, agence digitale experte en création de sites web professionnels et solutions e-commerce sur mesure"
    
  };

  return (
    <div>
      <SEO
        title="À propos de l'agence"
        description="Découvrez EA Web Agency, agence digitale experte en création de sites web professionnels et solutions e-commerce sur mesure. Notre équipe vous accompagne dans votre transformation digitale."
        keywords="agence web France, équipe web, expertise digitale, création site internet, agence digitale"
        structuredData={structuredData}
      />
      <AgencyHero />
      <Values setCurrentPage={setCurrentPage} />
      <Process />
    </div>
  );
}
