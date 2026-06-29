import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { VisionMission } from "@/components/sections/VisionMission";
import { Objectives } from "@/components/sections/Objectives";
import { Methodology } from "@/components/sections/Methodology";
import { CTASection } from "@/components/sections/CTASection";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { images, type Slide } from "@/lib/images";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// Four photos that speak to the multisectoral, end-to-end profile of AXIOR.
const profileSlides: Slide[] = [
  { ...images.equipePoles, title: "", text: "" },
  { ...images.signature, title: "", text: "" },
  { ...images.accompagnement, title: "", text: "" },
  { ...images.equipeMultidisciplinaire, title: "", text: "" },
];

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez AXIOR : vision, mission, objectifs stratégiques et méthodologie. Un groupe multisectoriel ivoirien dédié à la réussite de vos projets.",
  alternates: { canonical: "/qui-sommes-nous" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Qui sommes-nous", url: "/qui-sommes-nous" },
        ]}
      />
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="L’expertise multisectorielle au service de vos ambitions"
        description="AXIOR est un groupe ivoirien qui rassemble, sous une même bannière, des compétences complémentaires pour concevoir, financer, réaliser et livrer des projets d’envergure."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Qui sommes-nous" },
        ]}
        image="/images/equipe-poles.png"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl dark:text-white">
                Une entreprise née d’une conviction
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
                <p>
                  AXIOR est née d’une conviction simple : les projets les plus
                  ambitieux méritent un partenaire capable de les porter de bout
                  en bout, sans rupture ni cloisonnement. Trop souvent, la
                  multiplicité des intervenants fragilise les délais, les coûts
                  et la qualité.
                </p>
                <p>
                  En réunissant le BTP, l’énergie, l’immobilier, l’agro-industrie
                  et le commerce international au sein d’un même groupe, nous
                  offrons à nos clients un interlocuteur unique, responsable et
                  engagé. Cette intégration est notre force : elle fluidifie la
                  coordination et garantit une cohérence totale.
                </p>
                <p>
                  Implantés à Grand-Bassam, dans la région d’Abidjan, nous
                  conjuguons une connaissance intime du marché ivoirien à des
                  standards d’exécution internationaux. C’est ce mariage entre
                  ancrage local et exigence globale qui définit AXIOR.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="relative isolate h-full min-h-[26rem] overflow-hidden rounded-2xl shadow-card">
                {/* Animated photo carousel behind the facts card */}
                <Carousel
                  slides={profileSlides}
                  bare
                  showCaptions={false}
                  showArrows={false}
                  autoPlayMs={4500}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="absolute inset-0"
                  overlayClassName="bg-gradient-to-t from-graphite-950/92 via-graphite-950/70 to-graphite-950/45"
                />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <h3 className="text-lg font-semibold text-white">En bref</h3>
                  <dl className="mt-6 space-y-4">
                    {[
                      { k: "Secteur", v: "Groupe multisectoriel" },
                      { k: "Siège", v: "Grand-Bassam, Abidjan" },
                      { k: "Implantation", v: "Côte d’Ivoire" },
                      { k: "Approche", v: "Conception → Livraison" },
                      { k: "Promesse", v: "L’Expert de vos projets" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 last:border-0 last:pb-0"
                      >
                        <dt className="text-sm text-white/65">{row.k}</dt>
                        <dd className="text-right text-sm font-semibold text-white">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <VisionMission />
      <Objectives />
      <Methodology />
      <CTASection />
    </>
  );
}
