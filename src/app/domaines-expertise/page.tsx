import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { Projects } from "@/components/sections/Projects";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Domaines d’expertise",
  description:
    "BTP & génie civil, électricité & énergie, immobilier, agro-industrie, commerce & import-export : découvrez les cinq pôles d’expertise d’AXIOR.",
  alternates: { canonical: "/domaines-expertise" },
};

export default function ExpertisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Domaines d’expertise", url: "/domaines-expertise" },
        ]}
      />
      <PageHeader
        eyebrow="Domaines d’expertise"
        title="Cinq pôles d’excellence, un partenaire unique"
        description="Chaque secteur est porté par des équipes spécialisées. Ensemble, ils forment un écosystème intégré capable de répondre aux projets les plus complexes."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Domaines d’expertise" },
        ]}
        image="/images/equipe-multidisciplinaire.png"
      />
      <ExpertiseGrid detailed showHeading={false} showCta={false} />
      <Projects limit={3} tint />
      <CTASection />
    </>
  );
}
