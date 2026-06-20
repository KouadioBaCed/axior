export const siteConfig = {
  name: "AXIOR",
  legalName: "AXIOR",
  slogan: "L’Expert de vos projets",
  description:
    "AXIOR est un groupe multisectoriel ivoirien qui accompagne les projets complexes de la conception à la livraison : BTP & génie civil, énergie, immobilier, agro-industrie et commerce international.",
  url: "https://www.axiorci.com",
  domain: "www.axiorci.com",
  email: "contact@axiorci.com",
  phone: "+225 0545705244",
  phoneHref: "+2250545705244",
  address: {
    line: "Grand-Bassam, Abidjan",
    city: "Abidjan",
    region: "Grand-Bassam",
    country: "Côte d’Ivoire",
  },
  // Approx. coordinates for Grand-Bassam, used for the map embed.
  map: "https://www.google.com/maps?q=Grand-Bassam,+C%C3%B4te+d%27Ivoire&output=embed",
  locale: "fr_FR",
} as const;

import { expertises } from "./data";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

const expertiseChildren: NavChild[] = expertises.map((e) => ({
  label: e.title,
  href: `/domaines-expertise/${e.slug}`,
}));

export const navLinks: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  {
    label: "Expertises",
    href: "/domaines-expertise",
    children: expertiseChildren,
  },
  { label: "Réalisations", href: "/nos-realisations" },
  { label: "Actualités", href: "/actualites" },
  { label: "Pourquoi AXIOR", href: "/pourquoi-axior" },
  { label: "Valeurs", href: "/valeurs" },
  { label: "Contact", href: "/contact" },
];
