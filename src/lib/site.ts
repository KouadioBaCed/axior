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
  // Opening hours, surfaced on the contact page and footer.
  hours: [
    { days: "Lundi – Vendredi", time: "8h – 18h" },
    { days: "Samedi", time: "8h – 12h30" },
    { days: "Dimanche", time: "Fermé" },
  ],
  locale: "fr_FR",
} as const;

import type { ComponentType, SVGProps } from "react";
import { expertises } from "./data";
import {
  IconSparkle,
  IconShield,
  IconBuilding,
  IconMail,
} from "@/components/icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavChild = { label: string; href: string; icon?: IconComponent };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** Rendering style for the desktop dropdown. */
  menu?: "expertises" | "axior";
};

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
    menu: "expertises",
    children: expertiseChildren,
  },
  { label: "Actualités", href: "/actualites" },
  {
    label: "AXIOR",
    href: "/pourquoi-axior",
    menu: "axior",
    children: [
      { label: "Pourquoi AXIOR", href: "/pourquoi-axior", icon: IconSparkle },
      { label: "Nos valeurs", href: "/valeurs", icon: IconShield },
      { label: "Nos réalisations", href: "/nos-realisations", icon: IconBuilding },
      { label: "Contact", href: "/contact", icon: IconMail },
    ],
  },
];
