import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ReasonsNarrative } from "@/components/sections/ReasonsNarrative";
import { Stats } from "@/components/sections/Stats";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pourquoi AXIOR",
  description:
    "Expertise multisectorielle intégrée, maîtrise opérationnelle et financière, agilité locale et engagement qualité & sécurité : pourquoi choisir AXIOR.",
  alternates: { canonical: "/pourquoi-axior" },
};

export default function WhyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Pourquoi AXIOR", url: "/pourquoi-axior" },
        ]}
      />
      <PageHeader
        eyebrow="Pourquoi AXIOR"
        title="Quatre raisons de nous confier vos projets"
        description="Au-delà des compétences techniques, c’est notre manière de travailler qui fait la différence. Voici ce qui nous distingue."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Pourquoi AXIOR" },
        ]}
      />
      <ReasonsNarrative />
      <Stats />
      <CTASection />
    </>
  );
}
