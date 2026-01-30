import { useState } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Treizelec',
      text: "J'ai fait appel à Élodie pour la création de mon site, et je suis très satisfait du travail réalisé. Elle a su comprendre mes besoins et les traduire en un site professionnel.",
      rating: 5,
      date: 'Décembre 2025',
    },
    {
      name: 'Sebastien Saint Louis Augustin',
      text: 'Très professionnel et pédagogue. Explications claires et service vraiment de qualité. Je recommande vivement !',
      rating: 5,
      date: 'Décembre 2025',
    },
    {
      name: 'Abdelouafi Nejme',
      text: 'Très très expérimentée je recommande vivement !!',
      rating: 5,
      date: 'Décembre 2025',
    },
    {
      name: 'Karim HANNI',
      text: "J'ai fait appel à Elodie pour faire un diagnostique de mon site internet. Elle m'a donné de très bon conseils et a été d'une grande gentillesse. Je la recommande vivement.",
      rating: 5,
      date: 'Juin 2025',
    },
    {
      name: 'Univers Technical Translation',
      text: "Elodie a su s'adapter à nos exigences, à livrer un super prototype et à permettre le lancement d'un site Web en direct pendant que des changements étaient apportés en production.",
      rating: 5,
      date: 'Janvier 2024',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          CE QUE NOS
          <br />
          CLIENTS DISENT
          <br />
          DE NOUS
        </h2>
        <div className="carousel-wrapper">
          <button className="carousel-button carousel-button-prev" onClick={prevSlide} aria-label="Avis précédents">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="carousel-container">
            <div 
              className="testimonials-track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / 1)))`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card-wrapper">
                  <div className="testimonial-card">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-footer">
                      <p className="testimonial-author">{testimonial.name}</p>
                      <p className="testimonial-date">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-button carousel-button-next" onClick={nextSlide} aria-label="Avis suivants">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

