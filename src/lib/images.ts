// Central registry for the photographic assets in /public/images.
// Keep alt text meaningful here so it stays consistent across the site.

export type ImageAsset = { src: string; alt: string };
export type Slide = ImageAsset & { title: string; text: string };

const dir = "/images";

export const images = {
  equipePoles: {
    src: `${dir}/equipe-poles.png`,
    alt: "L’équipe AXIOR réunie autour de ses cinq pôles d’expertise",
  },
  reunionPlans: {
    src: `${dir}/reunion-plans.png`,
    alt: "Équipe AXIOR en réunion de travail autour des plans d’un projet",
  },
  conseilStrategie: {
    src: `${dir}/conseil-strategie.png`,
    alt: "Comité exécutif AXIOR lors d’une réunion stratégique",
  },
  collaboration: {
    src: `${dir}/collaboration-multisectorielle.png`,
    alt: "Collaboration multisectorielle devant un tableau de pilotage de projet",
  },
  comitePilotage: {
    src: `${dir}/comite-pilotage.png`,
    alt: "Comité de pilotage d’un projet AXIOR",
  },
  conseilExecutif: {
    src: `${dir}/conseil-executif.png`,
    alt: "Conseil exécutif d’AXIOR en séance de travail",
  },
  leadership: {
    src: `${dir}/leadership-vision.png`,
    alt: "Direction d’AXIOR : leadership et vision stratégique",
  },
  opportunite: {
    src: `${dir}/opportunite.png`,
    alt: "Étude d’une nouvelle opportunité de projet",
  },
  presentationClient: {
    src: `${dir}/presentation-client.png`,
    alt: "Présentation d’un projet AXIOR à un client",
  },
  reunionStrategique: {
    src: `${dir}/reunion-strategique.png`,
    alt: "Réunion stratégique de la direction d’AXIOR",
  },
  signature: {
    src: `${dir}/signature-partenariat.png`,
    alt: "Responsables AXIOR sur un site en construction, plans à la main",
  },
  succes: {
    src: `${dir}/succes-projet.png`,
    alt: "Succès d’un projet AXIOR livré",
  },
  suiviAvancement: {
    src: `${dir}/suivi-avancement.png`,
    alt: "Suivi de l’avancement d’un chantier AXIOR",
  },
  suivi: {
    src: `${dir}/suivi.png`,
    alt: "Suivi d’un projet AXIOR sur le terrain",
  },
  visiteTerrain: {
    src: `${dir}/visite-terrain.png`,
    alt: "Visite de terrain des équipes AXIOR avec le client",
  },
  accompagnement: {
    src: `${dir}/accompagnement-realisation.png`,
    alt: "Accompagnement AXIOR, de l’idée à la réalisation",
  },
  accompagnementPerso: {
    src: `${dir}/accompagnement-personnalise.png`,
    alt: "Accompagnement personnalisé d’un client par AXIOR",
  },
  analyse: {
    src: `${dir}/analyse-planification.png`,
    alt: "Analyse et planification d’un projet AXIOR",
  },
  equipeCoordination: {
    src: `${dir}/equipe-coordination.png`,
    alt: "Équipe de coordination d’un projet AXIOR",
  },
  equipeMultidisciplinaire: {
    src: `${dir}/equipe-multidisciplinaire.png`,
    alt: "Équipe multidisciplinaire AXIOR au travail",
  },
} as const satisfies Record<string, ImageAsset>;

// Slides used by the hero carousel on the home page.
export const heroSlides: Slide[] = [
  {
    ...images.equipePoles,
    title: "Cinq pôles, une seule exigence",
    text: "BTP, énergie, immobilier, agro-industrie et commerce international réunis sous un même toit.",
  },
  {
    ...images.signature,
    title: "À vos côtés, jusque sur le terrain",
    text: "De l’étude initiale au suivi de chantier, nous pilotons chaque étape de vos projets.",
  },
  {
    ...images.reunionPlans,
    title: "De l’idée à la réalisation",
    text: "Des équipes pluridisciplinaires pour transformer vos ambitions en ouvrages concrets.",
  },
  {
    ...images.collaboration,
    title: "Un pilotage rigoureux",
    text: "Coûts, délais et qualité maîtrisés grâce à une gestion de projet exigeante.",
  },
];
