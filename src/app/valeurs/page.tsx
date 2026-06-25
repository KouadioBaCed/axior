import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Values } from "@/components/sections/Values";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos valeurs",
  description:
    "Excellence & rigueur, innovation & maîtrise des coûts, intégrité & partenariat : les valeurs fondamentales qui guident AXIOR au quotidien.",
  alternates: { canonical: "/valeurs" },
};

export default function ValuesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos valeurs", url: "/valeurs" },
        ]}
      />
      <PageHeader
        eyebrow="Nos valeurs"
        title="Ce en quoi nous croyons profondément"
        description="Nos valeurs ne sont pas des mots affichés : elles structurent nos décisions, nos relations et notre exigence sur chaque projet."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos valeurs" },
        ]}
        image="/images/collaboration-multisectorielle.png"
      />

      <section className="section">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-medium leading-relaxed text-graphite-800 sm:text-[1.7rem] sm:leading-relaxed dark:text-graphite-100">
              «&nbsp;Nous croyons qu’un projet réussi naît de la rencontre entre
              une <span className="text-brand">exigence sans compromis</span>,
              une <span className="text-brand">innovation maîtrisée</span> et une{" "}
              <span className="text-brand">relation de confiance</span>.&nbsp;»
            </p>
          </Reveal>
        </div>
      </section>

      <Values withHeading={false} />
      <CTASection />
    </>
  );
}
