import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Combien coûte un site web pro ?',
      answer:
        "Le tarif d'un site web professionnel varie selon vos besoins : une landing page commence généralement à 999€, un site vitrine autour de 2 500€, tandis qu'un site e-commerce se situe entre 3 000€ et 5 000€. Pour un développement sur mesure avec des fonctionnalités spécifiques, le budget peut être plus élevé. Nous proposons des devis personnalisés gratuits pour adapter nos solutions à votre budget. Le prix inclut le design responsive, l'optimisation SEO de base, et la formation à la gestion de votre site.",
    },
    {
      question: "Comment créer un site web pas cher ?",
      answer:
        "Pour créer un site web pas cher sans sacrifier la qualité, nous recommandons de commencer par une landing page avec les fonctionnalités essentielles. Utilisez un CMS comme WordPress qui réduit les coûts de développement tout en offrant une grande flexibilité. Notre pack starter permet d'avoir un site professionnel, responsive et SEO-friendly à partir de 90€/ mois. Nous proposons également des solutions par étapes : démarrez avec les pages principales, puis ajoutez des fonctionnalités au fur et à mesure de votre croissance.",
    },
    {
      question: 'Quel CMS choisir pour un site professionnel ?',
      answer:
        "WordPress est le CMS le plus populaire et adapté à 90% des sites professionnels : flexible, SEO-friendly, et facile à gérer au quotidien. Pour un site e-commerce, WooCommerce (extension WordPress) ou Shopify sont d'excellents choix selon votre budget et vos besoins. Si vous avez des besoins très spécifiques, un développement sur mesure avec des frameworks modernes peut être envisagé. Notre équipe vous conseille le CMS le plus adapté à votre projet lors de l'audit gratuit.",
    },
    {
      question: 'Comment augmenter les ventes avec mon site web ?',
      answer:
        "Pour augmenter vos ventes, votre site doit être optimisé SEO pour attirer du trafic qualifié, avoir un design responsive pour convertir sur mobile et tablette, et offrir une expérience utilisateur fluide. Nous recommandons : des pages produits optimisées avec des visuels de qualité, un processus de commande simplifié, l'intégration d'avis clients, et des call-to-action efficaces. Notre approche combine web design professionnel, optimisation SEO, et stratégie de conversion pour maximiser vos résultats. En moyenne, nos clients constatent une augmentation de 20% de leur chiffre d'affaires.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Questions Fréquentes sur la Création de Sites Web</h2>
        <p className="faq-subtitle">Tout ce que vous devez savoir avant de démarrer votre projet digital</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
              >
                <span className="faq-icon">{openIndex === index ? '—' : '+'}</span>
                <span className="faq-question-text">{faq.question}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
