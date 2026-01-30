import { Globe, ShoppingCart, Code, Search, TrendingUp, Palette } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './Expertise.css';

export default function Expertise() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const expertises = [
    {
      icon: Globe,
      title: 'Site vitrine',
      color: '#D946A6',
      row: 1,
      animation: 'scale'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      color: '#D946A6',
      row: 2,
      animation: 'translateX-left'
    },
    {
      icon: Code,
      title: 'Micro-services',
      color: '#D946A6',
      row: 2,
      animation: 'translateX-right'
    },
    {
      icon: Search,
      title: 'Référencement',
      color: '#D946A6',
      row: 3,
      animation: 'translateX-left'
    },
    {
      icon: TrendingUp,
      title: 'Marketing digital',
      color: '#D946A6',
      row: 3,
      animation: 'translateY'
    },
    {
      icon: Palette,
      title: 'UI/UX design',
      color: '#D946A6',
      row: 3,
      animation: 'translateX-right'
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

        const expertise = expertises[index];

        if (expertise.animation === 'scale') {
          const scale = 1 + (scrollProgress * 0.15);
          card.style.setProperty('--scale', scale);
          card.style.transform = `scale(var(--scale))`;
        } else if (expertise.animation === 'translateX-left') {
          const translateX = -scrollProgress * 22;
          card.style.setProperty('--translateX', `${translateX}px`);
          card.style.transform = `translateX(var(--translateX))`;
        } else if (expertise.animation === 'translateX-right') {
          const translateX = scrollProgress * 22;
          card.style.setProperty('--translateX', `${translateX}px`);
          card.style.transform = `translateX(var(--translateX))`;
        } else if (expertise.animation === 'translateY') {
          const translateY = scrollProgress * 50;
          card.style.setProperty('--translateY', `${translateY}px`);
          card.style.transform = `translateY(var(--translateY))`;
        }

        card.style.setProperty('--e-transform-transition-duration', '100ms');
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <section className="expertise">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">NOS EXPERTISES</h2>
        </div>

        <div className="expertise-pyramid">
          <div className="expertise-row expertise-row-1">
            {expertises.filter(e => e.row === 1).map((item, index) => {
              const Icon = item.icon;
              const globalIndex = expertises.findIndex(e => e === item);
              return (
                <div
                  key={index}
                  className="expertise-card"
                  ref={el => cardsRef.current[globalIndex] = el}
                >
                  <div className="expertise-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="expertise-card-title">{item.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="expertise-row expertise-row-2">
            {expertises.filter(e => e.row === 2).map((item, index) => {
              const Icon = item.icon;
              const globalIndex = expertises.findIndex(e => e === item);
              return (
                <div
                  key={index}
                  className="expertise-card"
                  ref={el => cardsRef.current[globalIndex] = el}
                >
                  <div className="expertise-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="expertise-card-title">{item.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="expertise-row expertise-row-3">
            {expertises.filter(e => e.row === 3).map((item, index) => {
              const Icon = item.icon;
              const globalIndex = expertises.findIndex(e => e === item);
              return (
                <div
                  key={index}
                  className="expertise-card"
                  ref={el => cardsRef.current[globalIndex] = el}
                >
                  <div className="expertise-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="expertise-card-title">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
