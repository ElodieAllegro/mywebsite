import './Partners.css';

export default function Partners() {
  const partners = [
    { name: 'Google', icon: 'G' },
    { name: 'WordPress', icon: 'W' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React', icon: '⚛' },
    { name: 'PHP', icon: 'php' },
    { name: 'Symfony', icon: 'sf' },
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">NOS PARTENAIRES</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-circle">
              <span className="partner-icon">{partner.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
