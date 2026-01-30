import './Footer.css';

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Conditions générales de ventes', page: 'cgv' },
    { name: 'Politique de confidentialité', page: 'privacy' },
    { name: 'Mentions légales', page: 'legal' },
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-links-section">
          {legalLinks.map((link, index) => (
            <span key={link.name}>
              {link.page ? (
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(link.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              )}
              {index < legalLinks.length - 1 && ' | '}
            </span>
          ))}
        </div>

        <div className="footer-copyright">
          © Copyright {currentYear}–AE–WEBAGENCY
        </div>

        <div className="footer-social">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
