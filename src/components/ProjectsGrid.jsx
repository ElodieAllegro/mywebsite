import './ProjectsGrid.css';

export default function ProjectsGrid() {
  const projects = [
      {
      title: 'RACINES D\'ALGERIE',
      description:
        "Développement d'un site vitrine pour Racines d'Algérie, spécialisée dans l'accompagnement et la reconnexion avec l'Algérie. Le site propose une expérience utilisateur fluide, un design authentique et une navigation intuitive pour découvrir les services proposés par Karim Hanni.",
      image: '/racinesAlgerie.webp',
      link: 'https://racinesdalgerie.com/',
    },
    {
      title: 'TREIZELEC',
      description:
        "Refonte du site vitrine de Treizelec, entreprise spécialisée dans l'installation électrique pour les particuliers et les professionnels. Le nouveau site met en avant les services proposés, les réalisations et facilite la prise de contact avec une interface moderne et responsive.",
      image: '/treizelec.webp',
      link: 'https://www.treizelec.fr/',
    },
    {
      title: 'LE RÉPERTOIRE DIGITAL',
      description:
      "Développement d'une plateforme web pour Le Répertoire Digital, visant à connecter les professionnels du digital avec des clients potentiels. Le site propose une interface conviviale, des profils détaillés et un système de recherche efficace pour faciliter les mises en relation.",
      image: '/lerepertoiredigital.webp',
      link: 'https://lerepertoiredigital.fr',
    },
    {
      title:'207 VICTOIRES',
      description:' Création d\'une one-page web protégée par un mot de passe autorisant l\'accès qu\'aux producteurs pour le projet 207 Victoires,roman publié par Youcef Ressam en 2025 . Le site a un design épuré et la navigation est intuitive offrant une expérience utilisateur optimale.',
      image:'/207victoires.webp',
    },
    {
      title: 'UNIVERSE TECHNICAL TRANSLATION',
      description:
        "Refonte complète du site de l'agence de traduction Américaine Univers technical translation avec Sihem Fekhi content designer chez UTT. Intégration des maquettes, optimisation mobile et amélioration des performances.",
      image: '/Universe.webp',
      link: 'https://universetranslation.com/',
    },
    {
      title: 'FISHEYE',
      description:
        "Conception d'un site dédié aux photographes et à leurs œuvres. L'objectif : offrir une vitrine élégante et fonctionnelle à chaque artiste, tout en facilitant la découverte visuelle. Chaque photographe dispose de sa propre galerie,",
      image: '/FisheyeMockup.webp',
      link: 'https://elodieallegro.github.io/Front-End-Fisheye/index.html',
    },
    {
      title: 'LES PETITS PLATS',
      description:
        "Conception d'une application web intuitive pour rechercher facilement des recettes en fonction des ingrédients, ustensiles ou appareils disponibles. Navigation rapide, interface responsive, et résultats affichés en temps réel pour améliorer l'expérience",
      image: '/AppPetitPlats-Mockup.webp',
      link: 'https://elodieallegro.github.io/PetitsPlatsElodie/',
    },
    {
      title: 'HALAL DÉLICES',
      description:
        "Création d'un site e-commerce pour Halal Délice marque spécialisée dans la vente de produits alimentaires halal de qualité. Le site offre une navigation fluide, un design moderne et chaleureux, ainsi qu'un catalogue clair et attractif.",
      image: '/HalalDeliceMockup.webp',
      link: '#',
    },
  ];

  return (
    <section className="projects-grid">
      <div className="projects-grid-container">
        <h2 className="projects-grid-title">NOS RÉALISATIONS WEB</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
                ACCÉDER AU SITE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
