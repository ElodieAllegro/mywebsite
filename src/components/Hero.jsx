import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero({ setCurrentPage }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div
        className="hero-aura"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      <div className="relative h-full w-full">
        <div className="particles-container">
          {[...Array(30)].map((_, i) => {
            const startX = Math.random() * 100;
            const centerOffset = (startX - 50) * -0.5;
            return (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${startX}%`,
                  '--center-offset': `${centerOffset}vw`,
                  animationDelay: `${-Math.random() * 12}s, ${-Math.random() * 3}s`,
                }}
              />
            );
          })}
        </div>
        {videoLoaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="rotate-100 absolute"
            aria-label="Animation de fond futuriste pour l'agence web"
          >
            <source src="/fusion.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-container relative z-10">
          <h1 className="hero-title">
            Agence spécialisée<br />
            <span>dans la création de sites web</span> 
          </h1>
          <h2 className="hero-subtitle">
            Web design responsive, SEO & développement sur mesure
          </h2>
          <p className="hero-description">
            Transformez votre présence en ligne en véritable levier de croissance  🚀
          </p>
          <div className="hero-buttons">
            <a 
              href="#services" 
              className="hero-cta-primary"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Découvrir nos services
            </a>
            <a 
              href="#contact" 
              className="hero-cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
