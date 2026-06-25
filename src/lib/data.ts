import {
  IconBuilding,
  IconBolt,
  IconHome,
  IconLeaf,
  IconGlobe,
  IconTarget,
  IconCompass,
  IconShield,
  IconLayers,
  IconChart,
  IconPin,
  IconSparkle,
  IconHandshake,
  IconSearch,
  IconPencil,
  IconCog,
  IconTruck,
} from "@/components/icons";

export const expertises = [
  {
    slug: "btp-genie-civil",
    icon: IconBuilding,
    image: "/Cinq%20secteurs/btp-genie-civil.png",
    title: "BTP & Génie Civil",
    tagline: "Bâtir des ouvrages durables",
    short:
      "Conception et réalisation d’ouvrages bâtiment et infrastructures, du gros œuvre aux finitions.",
    description:
      "AXIOR conçoit et réalise des bâtiments et des infrastructures qui durent. De l’étude technique au gros œuvre, des VRD aux finitions, nous pilotons chaque chantier avec une exigence absolue sur la qualité, les délais et la sécurité.",
    points: [
      "Bâtiments résidentiels & tertiaires",
      "Voiries et réseaux divers (VRD)",
      "Ouvrages d’art & génie civil",
    ],
    services: [
      {
        title: "Conception & études techniques",
        text: "Études de faisabilité, plans d’exécution et chiffrage détaillé avant le premier coup de pioche.",
      },
      {
        title: "Gros œuvre & structure",
        text: "Fondations, structures béton et maçonnerie réalisées aux normes les plus strictes.",
      },
      {
        title: "VRD & infrastructures",
        text: "Voiries, réseaux divers et aménagements pour viabiliser durablement vos sites.",
      },
      {
        title: "Second œuvre & finitions",
        text: "Corps d’état techniques et finitions soignées pour des ouvrages prêts à l’emploi.",
      },
    ],
    gradient: "from-brand-600 to-brand-900",
    chip: "bg-brand-50 text-brand",
  },
  {
    slug: "electricite-energie",
    icon: IconBolt,
    image: "/Cinq%20secteurs/electricite-energie.png",
    title: "Électricité & Énergie",
    tagline: "Une énergie fiable et maîtrisée",
    short:
      "Installations électriques, solutions énergétiques et solaires fiables pour sites industriels et tertiaires.",
    description:
      "Nous concevons et déployons des installations électriques sûres et des solutions énergétiques performantes. De la basse tension au photovoltaïque, nous aidons nos clients à sécuriser leur alimentation et à réduire durablement leur facture.",
    points: [
      "Installations basse & moyenne tension",
      "Énergie solaire & efficacité énergétique",
      "Maintenance & dépannage",
    ],
    services: [
      {
        title: "Installations électriques",
        text: "Réseaux basse et moyenne tension conçus pour la fiabilité et la conformité.",
      },
      {
        title: "Énergie solaire",
        text: "Centrales photovoltaïques et solutions hybrides pour une énergie propre et économique.",
      },
      {
        title: "Efficacité énergétique",
        text: "Audits et optimisations pour réduire la consommation et les coûts d’exploitation.",
      },
      {
        title: "Maintenance & dépannage",
        text: "Contrats de maintenance préventive et interventions rapides en cas de panne.",
      },
    ],
    gradient: "from-accent-500 to-accent-700",
    chip: "bg-accent-50 text-accent-600",
  },
  {
    slug: "immobilier",
    icon: IconHome,
    image: "/Cinq%20secteurs/immobilier.png",
    title: "Immobilier",
    tagline: "Donner de la valeur à l’espace",
    short:
      "Promotion, développement et gestion de programmes immobiliers à forte valeur ajoutée.",
    description:
      "De l’acquisition foncière à la commercialisation, AXIOR développe des programmes immobiliers à forte valeur ajoutée. Nous maîtrisons toute la chaîne pour livrer des biens de qualité et valoriser durablement votre patrimoine.",
    points: [
      "Promotion & développement foncier",
      "Programmes résidentiels clés en main",
      "Gestion & valorisation d’actifs",
    ],
    services: [
      {
        title: "Promotion immobilière",
        text: "Montage et développement de programmes résidentiels et tertiaires de A à Z.",
      },
      {
        title: "Développement foncier",
        text: "Identification, sécurisation et viabilisation de réserves foncières stratégiques.",
      },
      {
        title: "Programmes clés en main",
        text: "Des logements et bureaux livrés finis, prêts à habiter ou à exploiter.",
      },
      {
        title: "Gestion d’actifs",
        text: "Valorisation, location et administration de votre patrimoine immobilier.",
      },
    ],
    gradient: "from-brand-500 to-brand-800",
    chip: "bg-brand-50 text-brand",
  },
  {
    slug: "agro-industrie",
    icon: IconLeaf,
    image: "/Cinq%20secteurs/agro-industrie.png",
    title: "Agro-industrie",
    tagline: "Valoriser les filières locales",
    short:
      "Valorisation des filières agricoles, transformation et logistique au service des chaînes de valeur locales.",
    description:
      "Nous structurons et valorisons les filières agricoles, de la production à la transformation. AXIOR investit dans des chaînes de valeur locales performantes, créatrices d’emplois et de richesse pour les territoires.",
    points: [
      "Production & transformation",
      "Structuration de filières",
      "Logistique & conditionnement",
    ],
    services: [
      {
        title: "Production agricole",
        text: "Exploitations modernes et durables, pensées pour le rendement et la qualité.",
      },
      {
        title: "Transformation",
        text: "Unités de transformation qui ajoutent de la valeur aux matières premières locales.",
      },
      {
        title: "Structuration de filières",
        text: "Organisation des acteurs, de la matière première au produit fini commercialisable.",
      },
      {
        title: "Logistique & conditionnement",
        text: "Conditionnement, stockage et distribution maîtrisés de bout en bout.",
      },
    ],
    gradient: "from-brand-400 to-brand-700",
    chip: "bg-brand-50 text-brand",
  },
  {
    slug: "commerce-import-export",
    icon: IconGlobe,
    image: "/Cinq%20secteurs/commerce-import-export.png",
    title: "Commerce & Import-Export",
    tagline: "Connecter les marchés",
    short:
      "Sourcing international, distribution et négoce avec une logistique maîtrisée de bout en bout.",
    description:
      "AXIOR connecte les marchés locaux et internationaux. Sourcing, négoce, importation et distribution : nous maîtrisons toute la chaîne logistique pour approvisionner nos clients en toute fiabilité, au meilleur coût.",
    points: [
      "Sourcing & négoce international",
      "Distribution & approvisionnement",
      "Logistique & dédouanement",
    ],
    services: [
      {
        title: "Sourcing international",
        text: "Identification des meilleurs fournisseurs et négoce au juste prix.",
      },
      {
        title: "Importation",
        text: "Gestion complète des opérations d’import et des formalités douanières.",
      },
      {
        title: "Distribution",
        text: "Approvisionnement et distribution fiables sur l’ensemble du territoire.",
      },
      {
        title: "Logistique & dédouanement",
        text: "Transport, stockage et dédouanement orchestrés sans rupture de chaîne.",
      },
    ],
    gradient: "from-graphite-700 to-graphite-950",
    chip: "bg-graphite-100 text-graphite-700",
  },
] as const;

export const values = [
  {
    icon: IconSparkle,
    title: "Excellence & rigueur",
    description:
      "Un haut niveau d’exigence à chaque étape, des standards de qualité mesurables et un souci constant du détail.",
  },
  {
    icon: IconChart,
    title: "Innovation & maîtrise des coûts",
    description:
      "Des solutions modernes et durables, pensées pour optimiser la performance et le budget de chaque projet.",
  },
  {
    icon: IconHandshake,
    title: "Intégrité & partenariat",
    description:
      "Une relation de confiance, transparente et durable, où l’intérêt du client guide chacune de nos décisions.",
  },
] as const;

export const objectives = [
  {
    icon: IconTarget,
    title: "Excellence opérationnelle",
    description:
      "Industrialiser nos process pour livrer des projets fiables, dans les délais et au niveau de qualité attendu.",
  },
  {
    icon: IconSparkle,
    title: "Innovation durable",
    description:
      "Intégrer des solutions techniques modernes et responsables, créatrices de valeur sur le long terme.",
  },
  {
    icon: IconChart,
    title: "Expansion commerciale",
    description:
      "Élargir notre portefeuille d’activités et de partenaires sur des marchés à fort potentiel.",
  },
  {
    icon: IconGlobe,
    title: "Rayonnement national",
    description:
      "Devenir une référence multisectorielle reconnue sur l’ensemble du territoire ivoirien.",
  },
] as const;

export const methodology = [
  {
    step: "01",
    icon: IconSearch,
    image: "/images/presentation-client.png",
    title: "Écoute & diagnostic",
    description:
      "Nous analysons vos besoins, votre contexte et vos contraintes pour cadrer précisément le projet.",
  },
  {
    step: "02",
    icon: IconPencil,
    image: "/images/analyse-planification.png",
    title: "Études & conception",
    description:
      "Nos équipes conçoivent une solution sur mesure, chiffrée, optimisée techniquement et financièrement.",
  },
  {
    step: "03",
    icon: IconCog,
    image: "/images/suivi-avancement.png",
    title: "Réalisation & pilotage",
    description:
      "Nous exécutons et pilotons le projet avec un suivi rigoureux des coûts, des délais et de la qualité.",
  },
  {
    step: "04",
    icon: IconTruck,
    image: "/images/succes-projet.png",
    title: "Livraison & suivi",
    description:
      "Nous livrons un ouvrage conforme et assurons un accompagnement durable après la mise en service.",
  },
] as const;

export const reasons = [
  {
    icon: IconLayers,
    title: "Expertise multisectorielle intégrée",
    description:
      "Du BTP à l’énergie, de l’immobilier au négoce international, AXIOR réunit sous un même toit des compétences complémentaires. Cette intégration verticale vous offre un interlocuteur unique, capable de piloter des projets complexes et transverses sans rupture de chaîne.",
  },
  {
    icon: IconChart,
    title: "Maîtrise opérationnelle & financière",
    description:
      "Chaque projet est piloté avec une discipline budgétaire stricte et un contrôle permanent des délais. Notre rigueur de gestion transforme la complexité en résultats prévisibles, pour des investissements sécurisés et rentables.",
  },
  {
    icon: IconPin,
    title: "Agilité locale",
    description:
      "Implantés à Abidjan, en Côte d’Ivoire, nous combinons une connaissance fine du terrain à des standards internationaux. Cette proximité nous rend réactifs, adaptés aux réalités locales et proches de vos équipes.",
  },
  {
    icon: IconShield,
    title: "Engagement qualité & sécurité",
    description:
      "La sécurité des hommes et la qualité des ouvrages sont au cœur de notre culture. Nous appliquons des protocoles exigeants à chaque étape pour protéger les personnes et garantir la durabilité de nos réalisations.",
  },
] as const;

export const stats = [
  { value: "5", label: "Secteurs d’activité intégrés" },
  { value: "100%", label: "Projets pilotés de A à Z" },
  { value: "360°", label: "Accompagnement stratégique" },
  { value: "CI", label: "Ancrage local, vision internationale" },
] as const;

export const projects = [
  {
    slug: "complexe-residentiel-grand-bassam",
    image: "/images/signature-partenariat.png",
    title: "Complexe résidentiel — Grand-Bassam",
    sector: "Immobilier & BTP",
    year: "2025",
    location: "Grand-Bassam",
    description:
      "Programme résidentiel haut de gamme, de la conception à la livraison clés en main.",
    tags: ["Conception", "Gros œuvre", "Livraison clés en main"],
    gradient: "from-brand-500 to-brand-800",
  },
  {
    slug: "centrale-solaire-industrielle",
    image: "/images/analyse-planification.png",
    title: "Centrale solaire industrielle",
    sector: "Électricité & Énergie",
    year: "2025",
    location: "Abidjan",
    description:
      "Installation photovoltaïque pour réduire la facture énergétique d’un site de production.",
    tags: ["Photovoltaïque", "Efficacité énergétique"],
    gradient: "from-accent-500 to-accent-700",
  },
  {
    slug: "plateforme-logistique-import-export",
    image: "/images/equipe-coordination.png",
    title: "Plateforme logistique import-export",
    sector: "Commerce & Logistique",
    year: "2024",
    location: "Port d’Abidjan",
    description:
      "Structuration d’une chaîne d’approvisionnement internationale et de distribution locale.",
    tags: ["Sourcing", "Logistique", "Distribution"],
    gradient: "from-graphite-700 to-graphite-950",
  },
  {
    slug: "rehabilitation-voirie-urbaine",
    image: "/images/visite-terrain.png",
    title: "Réhabilitation de voirie urbaine",
    sector: "BTP & Génie Civil",
    year: "2024",
    location: "Abidjan",
    description:
      "Travaux de VRD et d’assainissement pour moderniser un axe urbain stratégique.",
    tags: ["VRD", "Assainissement", "Génie civil"],
    gradient: "from-brand-600 to-brand-900",
  },
  {
    slug: "unite-transformation-agro",
    image: "/images/suivi-avancement.png",
    title: "Unité de transformation agro-industrielle",
    sector: "Agro-industrie",
    year: "2023",
    location: "Sud Comoé",
    description:
      "Conception d’une unité de transformation valorisant une filière agricole locale.",
    tags: ["Transformation", "Filière locale"],
    gradient: "from-brand-400 to-brand-700",
  },
  {
    slug: "immeuble-tertiaire-plateau",
    image: "/images/conseil-strategie.png",
    title: "Immeuble tertiaire — Le Plateau",
    sector: "Immobilier & BTP",
    year: "2023",
    location: "Abidjan",
    description:
      "Réalisation d’un immeuble de bureaux haut standing au cœur du quartier d’affaires.",
    tags: ["Tertiaire", "Haut standing"],
    gradient: "from-brand-500 to-brand-800",
  },
] as const;

export const news = [
  {
    slug: "axior-structure-cinq-poles",
    image: "/images/equipe-poles.png",
    date: "2026-05-28",
    dateLabel: "28 mai 2026",
    category: "Vie du Groupe",
    title: "AXIOR structure son offre autour de cinq pôles stratégiques",
    excerpt:
      "Le groupe renforce son organisation multisectorielle pour mieux accompagner les projets complexes, de l’idée à la réalisation.",
    body: [
      "AXIOR franchit une nouvelle étape de sa croissance en structurant l’ensemble de ses activités autour de cinq pôles stratégiques : BTP & génie civil, électricité & énergie, immobilier, agro-industrie et commerce international.",
      "Cette organisation intégrée permet d’offrir à nos clients un interlocuteur unique, capable de piloter des projets transverses sans rupture de chaîne, avec une qualité homogène et une exigence constante.",
      "« Notre force, c’est de réunir sous un même toit des expertises complémentaires », rappelle la direction. « C’est ce qui nous permet de transformer des idées ambitieuses en réalisations concrètes. »",
    ],
    gradient: "from-brand-600 to-brand-900",
  },
  {
    slug: "mise-en-service-centrale-solaire",
    image: "/images/opportunite.png",
    date: "2026-04-15",
    dateLabel: "15 avril 2026",
    category: "Énergie",
    title: "Mise en service d’une centrale solaire pour un site industriel",
    excerpt:
      "Notre pôle Énergie a livré une installation photovoltaïque qui réduit significativement la facture énergétique d’un client industriel.",
    body: [
      "Le pôle Électricité & Énergie d’AXIOR a achevé l’installation d’une centrale solaire destinée à alimenter un site de production industriel de la région d’Abidjan.",
      "Le projet, mené de l’étude au raccordement, permet au client de réduire durablement sa dépendance au réseau et ses coûts d’exploitation, tout en s’inscrivant dans une démarche énergétique responsable.",
      "Cette réalisation illustre la capacité du groupe à déployer des solutions énergétiques performantes et sur mesure.",
    ],
    gradient: "from-accent-500 to-accent-700",
  },
  {
    slug: "axior-ancrage-grand-bassam",
    image: "/images/visite-terrain.png",
    date: "2026-03-02",
    dateLabel: "2 mars 2026",
    category: "Immobilier",
    title: "Un nouveau programme résidentiel prend forme à Grand-Bassam",
    excerpt:
      "AXIOR poursuit son développement immobilier avec un programme résidentiel haut de gamme à Grand-Bassam.",
    body: [
      "Le pôle Immobilier d’AXIOR développe un nouveau complexe résidentiel haut de gamme à Grand-Bassam, conçu et réalisé en interne, de la conception à la livraison clés en main.",
      "Ce programme confirme l’ancrage local du groupe et sa volonté de proposer des biens de qualité, durables et adaptés aux attentes du marché ivoirien.",
    ],
    gradient: "from-brand-500 to-brand-800",
  },
] as const;
