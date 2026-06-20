import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Projects } from "@/components/sections/Projects";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez une sélection de projets conçus, pilotés et livrés par AXIOR à travers ses cinq pôles : BTP, énergie, immobilier, agro-industrie et commerce international.",
  alternates: { canonical: "/nos-realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos Réalisations", url: "/nos-realisations" },
        ]}
      />
      <PageHeader
        eyebrow="Nos Réalisations"
        title="Des projets livrés, des résultats concrets"
        description="Chaque réalisation témoigne de notre capacité à piloter des projets complexes, dans les délais et au niveau de qualité attendu. Voici un aperçu de notre savoir-faire."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos Réalisations" },
        ]}
      />
      <Projects showHeading={false} showCta={false} />
      <CTASection />
    </>
  );
}
