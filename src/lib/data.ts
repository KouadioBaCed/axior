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
    image: "/secteurs/btp-genie-civil.jpeg",
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
    image: "/secteurs/electricite-energie.jpeg",
    title: "Électricité & Énergie",
    tagline: "Une énergie fiable et maîtrisée",
    short:
      "Installations électriques, solutions énergétiques et solaires fiables pour sites industriels et tertiaires.",
    description:
      "Nous concevons et déployons des installations électriques sûres et des solutions énergétiques performantes. De la basse tension au photovoltaïque, nous aidons nos clients à sécuriser leur alimentation et à réduire durablement leur facture.",
    points: [
      "Installations basse & haute tension",
      "Énergie solaire & efficacité énergétique",
      "Maintenance & dépannage",
    ],
    services: [
      {
        title: "Installations électriques",
        text: "Réseaux basse et haute tension conçus pour la fiabilité et la conformité.",
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
    image: "/secteurs/immobilier.jpeg",
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
    image: "/secteurs/agro-industrie.jpeg",
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
    image: "/secteurs/commerce-import-export.jpeg",
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
    image: "/images/reunion-plans.png",
    title: "Écoute & diagnostic",
    description:
      "Nous analysons vos besoins, votre contexte et vos contraintes pour cadrer précisément le projet.",
  },
  {
    step: "02",
    icon: IconPencil,
    image: "/images/accompagnement-realisation.png",
    title: "Études & conception",
    description:
      "Nos équipes conçoivent une solution sur mesure, chiffrée, optimisée techniquement et financièrement.",
  },
  {
    step: "03",
    icon: IconCog,
    image: "/images/equipe-multidisciplinaire.png",
    title: "Réalisation & pilotage",
    description:
      "Nous exécutons et pilotons le projet avec un suivi rigoureux des coûts, des délais et de la qualité.",
  },
  {
    step: "04",
    icon: IconTruck,
    image: "/images/signature-partenariat.png",
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
    slug: "villa-triplex-abatta-oribat",
    image: "/images/new_battis.jpeg",
    imageWidth: 1061,
    imageHeight: 1008,
    title: "Villa Triplex de Prestige — Abatta Oribat",
    sector: "Immobilier & BTP",
    year: "2025",
    location: "Abatta Oribat, Abidjan",
    description:
      "Villa triplex haut standing de 14 pièces — 340 m² bâtis sur 468 m² : architecture contemporaine, piscine privée, sécurité connectée et vue lagune, conçue et livrée par AXIOR.",
    tags: ["Villa triplex", "Haut standing", "Livraison clés en main"],
    gradient: "from-brand-500 to-brand-800",
    facts: [
      { label: "Surface bâtie", value: "340 m²" },
      { label: "Terrain", value: "468 m²" },
      { label: "Niveaux", value: "R+3 (4 niveaux)" },
      { label: "Composition", value: "14 pièces" },
    ],
    body: [
      "Située dans le cadre exclusif de la zone résidentielle des 40 Hectares à Abatta Oribat, cette somptueuse villa triplex incarne la synergie parfaite entre audace architecturale, confort absolu et ingénierie de pointe. Conçue et réalisée de bout en bout par AXIOR, cette propriété haut standing s’impose comme une référence de la construction contemporaine en Côte d’Ivoire.",
      "Déployant une surface bâtie de 340 m² sur une parcelle optimisée de 468 m², l’ouvrage se distingue par ses lignes géométriques épurées, ses jeux de volumes bicolores et ses larges ouvertures vitrées. Chaque espace a été pensé pour maximiser la lumière naturelle tout en offrant des perspectives imprenables sur la lagune environnante.",
      "## Une distribution magistrale sur 4 niveaux",
      "L’aménagement intérieur répond aux exigences des modes de vie les plus raffinés, segmentant avec fluidité les espaces de réception, d’intimité familiale et de bien-être.",
      "## Rez-de-chaussée — Espaces de vie & utilités",
      "Passé la guérite de sécurité, le hall d’entrée mène à un vaste séjour principal et sa salle à manger attenante. Ce niveau intègre une chambre d’amis autonome, une dépendance pour le personnel (boyerie) et un garage fermé pour deux grands véhicules. L’art culinaire y est mis à l’honneur grâce à un triple concept : une cuisine européenne moderne, un cellier de rangement et une cuisine africaine, complétés à l’extérieur par une grande cuisine d’été ouverte.",
      "## R+1 — Le sanctuaire familial",
      "Entièrement dédié à l’intimité de la famille, cet étage abrite une suite parentale majestueuse dotée de son propre dressing et d’un salon privé. Trois autres chambres entièrement autonomes offrent à chaque occupant un confort indépendant et sans compromis.",
      "## R+2 — Détente & univers professionnel",
      "Ce niveau propose une suite visiteur VIP au standing hôtelier, un grand bureau d’étude propice à la concentration, ainsi qu’une salle de sport privative s’ouvrant sur une vaste terrasse suspendue.",
      "## R+3 — Le toit-terrasse panoramique",
      "Couronnement de la villa, ce dernier niveau accueille un préau abrité adossé à une immense terrasse à ciel ouvert, offrant une vue lagunaire spectaculaire et un cadre idyllique pour les réceptions privées.",
      "## Un resort privé extérieur et une sécurité connectée",
      "La cour arrière a été pensée comme une extension naturelle du confort intérieur. Une superbe piscine aux lignes épurées y côtoie un espace bar entièrement aménagé, créant un cadre parfait pour les moments de détente en plein air.",
      "Au-delà de son esthétique remarquable, la villa bénéficie d’une infrastructure technique et technologique de pointe. Pour garantir la sérénité totale de ses occupants, AXIOR a intégré un système complet de caméras de surveillance, une clôture électrique périphérique et un réseau informatique haut débit. La sécurité incendie est assurée par des détecteurs de fumée intelligents installés dans l’intégralité des pièces.",
      "## Rigueur technique et conformité administrative",
      "Fidèle à ses engagements de transparence et de rigueur, AXIOR a mené ce projet dans le strict respect des normes constructives et administratives locales. Le bien est adossé à un dossier juridique impeccable, incluant l’Arrêté de Concession Définitive (ACD) ainsi que le Permis de Construire en totale conformité.",
      "Cette réalisation d’envergure réaffirme le savoir-faire d’AXIOR dans le pilotage de projets résidentiels d’exception et sa capacité à donner vie aux ambitions architecturales les plus exigeantes.",
    ],
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
    slug: "villa-exception-abatta-oribat",
    image: "/images/new_battis.jpeg",
    imageWidth: 1061,
    imageHeight: 1008,
    date: "2026-06-20",
    dateLabel: "20 juin 2026",
    category: "Immobilier",
    title: "AXIOR signe une nouvelle réalisation d’exception à Abatta",
    excerpt:
      "Les équipes d’AXIOR sont fières de présenter leur dernière création : une magnifique villa triplex haut standing de 14 pièces livrée à Abatta Oribat (40 Ha). Architecture contemporaine, piscine privée, sécurité connectée et vue lagune : découvrez ce chantier d’exception qui incarne notre savoir-faire technique.",
    body: [
      "C’est avec une grande fierté que les équipes d’AXIOR annoncent l’achèvement et la livraison d’un projet résidentiel d’envergure : une somptueuse villa triplex de haut standing, idéalement située au cœur de la zone prisée des 40 Hectares à Abatta. Ce chantier d’exception, d’une surface bâtie de 340 m² sur un terrain de 468 m², illustre parfaitement notre maîtrise globale des corps d’état techniques, de l’ingénierie civile aux finitions de prestige.",
      "## Une prouesse architecturale et technique signée AXIOR",
      "Conçue pour offrir une expérience de vie inégalée, la villa se déploie sur quatre niveaux intelligemment agencés. Le rez-de-chaussée accueille de vastes espaces de réception, un double concept de cuisine (européenne et africaine) et un garage double. Les niveaux supérieurs distribuent une suite parentale magistrale avec dressing, quatre suites autonomes supplémentaires, un bureau indépendant, ainsi qu’une salle de sport privative ouvrant sur de grandes terrasses suspendues.",
      "Le point d’orgue de cette construction se situe au troisième étage, où un préau exclusif et une immense terrasse offrent une vue panoramique imprenable sur la lagune. À l’extérieur, la cour arrière a été aménagée comme un véritable resort privé, intégrant une piscine aux lignes épurées et un espace bar pour les réceptions en plein air.",
      "## L’innovation et la sécurité au cœur de l’ouvrage",
      "Fidèle à ses exigences de qualité, AXIOR a doté cette propriété des technologies les plus modernes en matière de confort et de sécurité connectée. L’intégralité du site bénéficie d’un réseau informatique dédié, d’un système de caméras de surveillance, d’une clôture électrique périphérique et de détecteurs de fumée intelligents installés dans chaque pièce.",
      "Sur le plan administratif, comme pour l’ensemble de nos réalisations, le projet a été mené dans une conformité totale, adossé à un Permis de Construire et un Arrêté de Concession Définitive (ACD) validés.",
      "Cette nouvelle livraison vient enrichir le portfolio d’AXIOR et réaffirme notre position de partenaire de premier plan dans l’ingénierie et la construction de bâtiments résidentiels, tertiaires et industriels en Côte d’Ivoire.",
      "Vous avez un projet de construction ou d’aménagement de haut standing ? Faites confiance à l’expertise technique d’AXIOR. Contactez nos équipes dès aujourd’hui pour donner vie à vos ambitions.",
    ],
    gradient: "from-brand-500 to-brand-800",
  },
] as const;
