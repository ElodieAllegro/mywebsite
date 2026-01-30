import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Intro = lazy(() => import('../components/Intro'));
const Offers = lazy(() => import('../components/Offers'));
const CTA = lazy(() => import('../components/CTA'));
const Expertise = lazy(() => import('../components/Expertise'));
const Audit = lazy(() => import('../components/Audit'));
const FAQ = lazy(() => import('../components/FAQ'));

export default function Home({ setCurrentPage }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EA Web Agency",
    "url": "https://ea-webagency.fr",
    "logo": "https://ea-webagency.fr/logo.png",
    "favicon": "https://ea-webagency.fr/favicon.svg",
    "description": "Agence web spécialisée en création site vitrine, e-commerce et développement sur mesure en France",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Service client",
      "availableLanguage": "French"
    },
    "sameAs": []
  };

  return (
    <div>
     <SEO
      title="Création & Refonte de Site Web (Vitrine, Landing, E-commerce)"
      description="EA Web Agency crée et refond des sites vitrines, landing pages et e-commerce rapides, sur mesure et optimisés conversion. À partir de 90€/mois. Devis gratuit."
      canonicalUrl="https://www.ea-webagency.fr/"
      ogImage="https://www.ea-webagency.fr/og-cover.jpg"
      structuredData={structuredData}
    />

      <Hero setCurrentPage={setCurrentPage} />
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Intro setCurrentPage={setCurrentPage} />
        <Offers setCurrentPage={setCurrentPage} />
        <CTA setCurrentPage={setCurrentPage} />
        <Expertise />
        <Audit setCurrentPage={setCurrentPage} />
        <FAQ />
      </Suspense>
    </div>
  );
}
