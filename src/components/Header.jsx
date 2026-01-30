import { useState } from 'react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', page: 'home' },
    { name: 'Tarifs', page: 'agency' },
    { name: 'Services', page: 'services' },
    { name: 'Réalisations', page: 'projects' },
    { name: 'Contact', page: 'contact' },
    { name: 'Nos articles', href: '#', isPlaceholder: true },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();

    if (item.isPlaceholder) {
      setMobileMenuOpen(false);
      return;
    }

    setCurrentPage(item.page);
    setMobileMenuOpen(false);

    if (item.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="nav-content">
            <div className="logo-wrapper">
              <a
                href="#home"
                className="logo"
                onClick={(e) => handleNavClick(e, { page: 'home' })}
              >
                <i className="fas fa-globe"></i>
                <span className="logo-text">
                  <span className="logo-ea">EA</span>
                  <span className="logo-web">WEB AGENCY</span>
                </span>
              </a>
            </div>

            <div className="nav-menu desktop-menu">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href || `#${item.scrollTo || item.page}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-link ${currentPage === item.page && !item.scrollTo && !item.isPlaceholder ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button"
            >
              <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href || `#${item.scrollTo || item.page}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`mobile-nav-link ${currentPage === item.page && !item.scrollTo && !item.isPlaceholder ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
