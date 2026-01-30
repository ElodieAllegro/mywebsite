import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'devis',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch("https://usebasin.com/f/555f0117bc05", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formDataToSend,
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: 'devis',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">
              CONTACTEZ
              <br />
              NOUS
            </h2>
            <p className="contact-description">
              Vous avez un projet web en tête ? Besoin d'un <strong>site vitrine</strong>,{' '}
              <strong>e-commerce</strong> ou d'une <strong>refonte</strong> ? Nous sommes là pour vous accompagner.
            </p>
            <p className="contact-description">
              Remplissez le formulaire ci-contre et nous reviendrons vers vous rapidement pour discuter de vos{' '}
              <strong>besoins</strong> et <strong>objectifs</strong>.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contact@ea-webagency.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Téléphone</h4>
                  <p>+33 6 36 26 41 55</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Localisation</h4>
                  <p>France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="contact-form-title">Envoyez-nous un message</h3>

              <div className="form-group">
                <label htmlFor="name">
                  Nom complet <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label>
                  Sujet <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value="devis"
                      checked={formData.subject === 'devis'}
                      onChange={handleChange}
                    />
                    <span>Devis gratuit</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value="audit"
                      checked={formData.subject === 'audit'}
                      onChange={handleChange}
                    />
                    <span>Audit gratuit</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value="autre"
                      checked={formData.subject === 'autre'}
                      onChange={handleChange}
                    />
                    <span>Autre</span>
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    ENVOI EN COURS...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    ENVOYER LE MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {(success || error) && (
        <div className="modal-overlay" onClick={() => success && setSuccess(false)}>
          <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setSuccess(false); setError(''); }}>
              <i className="fas fa-times"></i>
            </button>
            {success && (
              <div className="modal-content modal-success">
                <i className="fas fa-check-circle"></i>
                <h3>Succès!</h3>
                <p>Votre message a été envoyé avec succès ! Nous vous recontacterons bientôt.</p>
              </div>
            )}
            {error && (
              <div className="modal-content modal-error">
                <i className="fas fa-exclamation-circle"></i>
                <h3>Erreur</h3>
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
