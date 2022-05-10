const offerTemplate = [
  {
    id: 1,
    title: "Développeur Full-Stack 1",
    contract: "CDI",
    workingHours: "35h",
    Company: "Microsoft",
    prevExperience: "+10ans",
    Description:
      "Nous recherchons un Lead Dévseloppeur Javascript francophone Senior pour rejoindre la fusée ADDAXA afin développer et améliorer nos plateformes e-commerces.",
    isFavorite: false,
    isPostule: false,
    isRelaunch: false,
    isCancel: false,
    inFeedback: false,
  },
  {
    id: 2,
    title: "Développeur Full-Stack 2",
    contract: "CDI",
    workingHours: "48h",
    Company: "Apple",
    prevExperience: "+15ans",
    Description:
      "Global P.O.S est un éditeur de plateformes SaaS dédiées aux points de vente. Née en 2004 de l’association de professionnels de l’encaissement, nous sommes aujourd’hui le leader français des solutions software d’encaissement et de gestion des titres prépayés (chèques cadeaux, cartes cadeaux etc.) à destination des grands comptes du Retail comme des plus petites enseignes.",
    isFavorite: false,
    isPostule: false,
    isRelaunch: false,
    isCancel: false,
    inFeedback: false,
  },
  {
    id: 3,
    title: "Développeur  3",
    contract: "CDI",
    workingHours: "48h",
    Company: "Apple",
    prevExperience: "+15ans",
    Description:
      "Global P.O.S est un éditeur de plateformes SaaS dédiées aux points de vente. Née en 2004 de l’association de professionnels de l’encaissement, nous sommes aujourd’hui le leader français des solutions software d’encaissement et de gestion des titres prépayés (chèques cadeaux, cartes cadeaux etc.) à destination des grands comptes du Retail comme des plus petites enseignes.",
    isFavorite: false,
    isPostule: false,
    isRelaunch: false,
    isCancel: false,
    inFeedback: false,
  },
  {
    id: 4,
    title: "Data Analyst 4",
    contract: "CDD",
    workingHours: "24",
    Company: "Withings",
    prevExperience: "5ans",
    Description:
      "Chez Withings, nous souhaitons redonner aux individus le contrôle de leur santé. Nous avons l’obsession de créer des produits beaux et intuitifs, afin que chacun puisse les utiliser facilement au quotidien; nos balances connectées, montres hybrides, tensiomètres, moniteurs de sommeil et tous les dispositifs de notre gamme sont aujourd’hui utilisés par des millions d’utilisateurs.",
    isFavorite: false,
    isPostule: false,
  },
  {
    id: 5,
    title: " Full-Stack 5",
    contract: "CDI",
    workingHours: "48h",
    Company: "Apple",
    prevExperience: "+15ans",
    Description:
      "Global P.O.S est un éditeur de plateformes SaaS dédiées aux points de vente. Née en 2004 de l’association de professionnels de l’encaissement, nous sommes aujourd’hui le leader français des solutions software d’encaissement et de gestion des titres prépayés (chèques cadeaux, cartes cadeaux etc.) à destination des grands comptes du Retail comme des plus petites enseignes.",
    isFavorite: false,
    isPostule: false,
    isFavorite: false,
    isPostule: false,
    isRelaunch: false,
    isCancel: false,
    inFeedback: false,
  },
];

// const offerExample = [
//   {
//     id: "131HJTS",
//     intitule: "Lead Dev JAVA Senior   (H/F)",
//     description:
//       "Dans le cadre des projets de nos clients, nous recrutons 2 LEAD DEV JAVA en CDI, justifiant de 7 ans d'expérience dont 3 ans sur un poste similaire.\n\nDe formation BAC +3 minimum, vous faites preuve de curiosité technique et technologie, d'esprit d'équipe et d'entraide. Vous êtes rigoureux et autonome et à l'écoute.\n\nVos savoir-faire :\n- Esprit d'analyse et de synthèse\n- Veille technique pour garantir un haut niveau d'expertise\n- Aptitude rédactionnelle et relationnelle forte\n- Capacité d'organisation et gestion des priorités\n\nVos missions :\n- Coaching et encadrement technique de l'équipe de developpement\n- Recherche et mise en place de solutions techniques innovantes pour l'évolution du produit en place dans le respect des normes de qualité et sécurité\n- Garant de la fiabilité et de la performance du produit en environnement en production\n- Mise en place de méthodes/outils, ainsi que la documentation et l'industrialisation des projets\n\nEnvironnement technique : JAVA, SPRINGBOOT, Angular 12, APiRest, SQL, MySQL, GitLAB, JQuery, Maven, Jenkins,IntelliJ",
//     dateCreation: "2022-04-07T10:46:06.000Z",
//     dateActualisation: "2022-04-07T10:46:08.000Z",
//     lieuTravail: {
//       libelle: "69 - LYON 07",
//       latitude: 45.733631,
//       longitude: 4.840586,
//       codePostal: "69007",
//       commune: "69387",
//     },
//     romeCode: "M1805",
//     romeLibelle: "Études et développement informatique",
//     appellationlibelle: "Développeur / Développeuse informatique",
//     entreprise: {
//       nom: "APSAROKE",
//       entrepriseAdaptee: false,
//     },
//     typeContrat: "CDI",
//     typeContratLibelle: "Contrat à durée indéterminée",
//     natureContrat: "Contrat travail",
//     experienceExige: "E",
//     experienceLibelle: "7 ans",
//     formations: [
//       {
//         niveauLibelle: "Bac+5 et plus ou équivalents",
//         exigence: "S",
//       },
//     ],
//     competences: [
//       {
//         code: "109846",
//         libelle:
//           "Concevoir et développer les programmes et applications informatiques",
//         exigence: "S",
//       },
//       {
//         code: "117309",
//         libelle: "Établir un cahier des charges",
//         exigence: "S",
//       },
//       {
//         code: "118637",
//         libelle: "Analyser les besoins du client",
//         exigence: "S",
//       },
//       {
//         code: "121055",
//         libelle: "Déterminer des mesures correctives",
//         exigence: "S",
//       },
//     ],
//     salaire: {
//       libelle: "Annuel de 45000,00 Euros sur 12 mois",
//     },
//     dureeTravailLibelle: "37H30 Horaires normaux",
//     dureeTravailLibelleConverti: "Temps plein",
//     alternance: false,
//     contact: {
//       nom: "APSAROKE - M. Aurélien PEYRIN",
//       coordonnees1:
//         "Pour postuler, utiliser le lien suivant : https://candidat.pole-emploi.fr/offres/recherche/detail/131HJTS",
//       courriel:
//         "Pour postuler, utiliser le lien suivant : https://candidat.pole-emploi.fr/offres/recherche/detail/131HJTS",
//     },
//     nombrePostes: 1,
//     accessibleTH: false,
//     qualificationCode: "9",
//     qualificationLibelle: "Cadre",
//     secteurActivite: "62",
//     secteurActiviteLibelle: "Conseil en systèmes et logiciels informatiques",
//     qualitesProfessionnelles: [
//       {
//         libelle: "Force de proposition",
//         description:
//           "Capacité à être proactif, à initier, à imaginer des propositions nouvelles pour résoudre les problèmes identifiés ou pour améliorer une situation. Exemple : proposer des améliorations, être positif et constructif",
//       },
//       {
//         libelle: "Autonomie",
//         description:
//           "Capacité à prendre en charge son activité sans devoir être encadré de façon continue. Exemple : travailler efficacement sans responsable",
//       },
//       {
//         libelle: "Capacité de décision",
//         description:
//           "Capacité à faire des choix pour agir, à prendre en charge son activité et à rendre compte, sans devoir être encadré de façon continue. Exemple : savoir faire des choix",
//       },
//     ],
//     origineOffre: {
//       origine: "1",
//       urlOrigine:
//         "https://candidat.pole-emploi.fr/offres/recherche/detail/131HJTS",
//     },
//     offresManqueCandidats: false,
//   },
// ];

export default offerTemplate;
