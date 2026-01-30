import ProjectsHero from '../components/ProjectsHero';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - Nos Réalisations",
    "description": "Découvrez nos projets web : sites vitrines, e-commerce et applications sur mesure réalisés pour nos clients"
  };

  return (
    <div>
      <SEO
        title="Portfolio - Nos Réalisations Web"
        description="Découvrez notre portfolio de sites web : projets vitrines, e-commerce et applications sur mesure. Exemples concrets de nos réalisations pour nos clients satisfaits."
        keywords="portfolio agence web, réalisations web, projets sites internet, exemples sites web, références clients, études de cas"
        structuredData={structuredData}
      />
      <ProjectsHero />
      <ProjectsGrid />
      <Testimonials />
      <Partners />
    </div>
  );
}
