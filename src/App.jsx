import { useState, lazy, Suspense } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const Agency = lazy(() => import('./pages/Agency'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CGV = lazy(() => import('./pages/CGV'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Legal = lazy(() => import('./pages/Legal'));
const CreationSiteVitrine = lazy(() => import('./pages/CreationSiteVitrine'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const CreationSiteEcommerce = lazy(() => import('./pages/CreationSiteEcommerce'));
const RefonteSiteWeb = lazy(() => import('./pages/RefonteSiteWeb'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'agency':
        return <PricingPage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      case 'cgv':
        return <CGV />;
      case 'privacy':
        return <Privacy />;
      case 'legal':
        return <Legal />;
      case 'creation-site-vitrine':
        return <CreationSiteVitrine setCurrentPage={setCurrentPage} />;
      case 'landing-page':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'creation-site-ecommerce':
        return <CreationSiteEcommerce setCurrentPage={setCurrentPage} />;
      case 'refonte-site-web':
        return <RefonteSiteWeb setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        {renderPage()}
      </Suspense>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
