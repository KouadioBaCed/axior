import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos Actualités",
  description:
    "Projets, partenariats et temps forts : suivez les dernières actualités du groupe AXIOR et de ses cinq pôles d’expertise.",
  alternates: { canonical: "/actualites" },
};

export default function ActualitesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos Actualités", url: "/actualites" },
        ]}
      />
      <PageHeader
        eyebrow="Nos Actualités"
        title="L’actualité du Groupe AXIOR"
        description="Restez informé de la vie du groupe : nouveaux projets, réalisations marquantes, partenariats et temps forts de nos cinq pôles d’expertise."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos Actualités" },
        ]}
      />
      <NewsSection showHeading={false} showCta={false} />
      <CTASection />
    </>
  );
}
