import { useState, useEffect, useRef } from 'react';
import './Process.css';

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);
  const [rocketProgress, setRocketProgress] = useState(0);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: 'PRÉPARATION AU DÉCOLLAGE',
      description: 'Vous nous contactez via le formulaire pour nous exposer vos besoins. On échange ensemble sur votre projet, vos objectifs et vos contraintes.',
    },
    {
      number: 2,
      title: 'BRIEF & DEVIS PERSONNALISÉ',
      description: 'Nous vous envoyons un questionnaire de brief pour bien cadrer votre demande. Puis, Nous vous proposons un devis clair et détaillé, sans surprise.',
    },
    {
      number: 3,
      title: 'CADRAGE & PLAN DE VOL',
      description: 'Une fois le devis validé, on structure le projet ensemble : sitemap, fonctionnalités, design souhaité. C\'est notre feuille de route.',
    },
    {
      number: 4,
      title: 'CONCEPTION UX & DESIGN',
      description:'Nous créons les maquettes (wireframes ou maquette graphique selon le besoin) et vous les soumettons pour validation. L\'ergonomie et l\'expérience utilisateur sont au cœur du design.',
    },
    {
      number: 5,
      title: 'DÉVELOPPEMENT & INTÉGRATION',
      description:'Nous passons au développement de votre site, optimisé pour le SEO et 100 % responsive. Vous suivez l\'avancement via un lien de prévisualisation.',
    },
    {
      number: 6,
      title: 'RECETTE & AJUSTEMENTS',
      description:'Vous testez le site et faites vos retours. Nous réalisons les derniers ajustements avant la mise en ligne.',
    },
    {
      number: 7,
      title: 'MISE EN LIGNE & DÉCOLLAGE',
      description: 'Votre site est mis en ligne. Nous vous accompagnons pour la prise en main, et si vous le souhaitez, nous restons à vos côtés via une formule de maintenance.',
    },
  ];

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const scrollStart = windowHeight - 100;
      const scrollEnd = -sectionHeight + 200;

      if (sectionTop <= scrollStart && sectionTop >= scrollEnd) {
        const progress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
        setRocketProgress(Math.min(Math.max(progress, 0), 1));
      } else if (sectionTop > scrollStart) {
        setRocketProgress(0);
      } else {
        setRocketProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="process" ref={sectionRef}>
      <div className="process-container">
        <div className="process-content-wrapper">
          <div className="process-left">
            <h2 className="process-title">LES ÉTAPES D'UN PROJET</h2>
            <div className="process-steps">
              {steps.map((step, index) => (
                <div key={step.number} className="process-step">
                  <button
                    onClick={() => toggleStep(index)}
                    className={`process-step-header ${openIndex === index ? 'active' : ''}`}
                  >
                    <span className="process-step-icon">
                      {openIndex === index ? '—' : '›'}
                    </span>
                    <h3 className="process-step-title">
                      ÉTAPE {step.number} – {step.title}
                    </h3>
                  </button>
                  {openIndex === index && (
                    <p className="process-step-description">{step.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="process-right">
            <div
              className="rocket-wrapper"
              style={{
                transform: `translateY(${-rocketProgress * 300}px) rotate(${rocketProgress * 5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img src="/rocket.webp" alt="Fusée" className="rocket-image" loading="lazy" />

              <div
                className="rocket-trail"
                style={{
                  height: `${rocketProgress * 150}px`,
                  opacity: rocketProgress * 0.6
                }}
              >
              </div>
            </div>
            <img src="/b9a4ba78-base-2.webp" alt="Base de décollage" className="launch-base" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
