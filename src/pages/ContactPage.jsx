import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contactez EA Web Agency",
    "description": "Contactez notre agence web pour votre projet. Devis gratuit et sans engagement."
  };

  return (
    <div>
      <SEO
        title="Contact - Devis Gratuit"
        description="Contactez EA Web Agency pour votre projet web. Devis gratuit et sans engagement. Notre équipe répond rapidement à toutes vos demandes de création de site internet."
        keywords="contact agence web, devis site internet, demande de devis web, contact création site, agence web France contact"
        structuredData={structuredData}
      />
      <Contact />
    </div>
  );
}
