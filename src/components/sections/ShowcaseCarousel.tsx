"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { images, type Slide } from "@/lib/images";
import { fadeUp, viewportOnce } from "@/lib/motion";

// Curated showcase of the group in action, shown right under the hero.
const showcaseSlides: Slide[] = [
  {
    ...images.equipePoles,
    title: "Cinq pôles, une seule exigence",
    text: "BTP, énergie, immobilier, agro-industrie et commerce international réunis sous un même toit.",
  },
  {
    ...images.comitePilotage,
    title: "Un pilotage rigoureux",
    text: "Coûts, délais et qualité maîtrisés à chaque étape de vos projets.",
  },
  {
    ...images.analyse,
    title: "Des études sur mesure",
    text: "Chaque projet est conçu, chiffré et optimisé avant le premier coup de pioche.",
  },
  {
    ...images.suiviAvancement,
    title: "Présents sur le terrain",
    text: "Nous suivons l’avancement de chaque chantier au plus près de vos équipes.",
  },
  {
    ...images.signature,
    title: "Des partenariats de confiance",
    text: "Nous engageons notre responsabilité, de l’idée jusqu’à la livraison.",
  },
  {
    ...images.succes,
    title: "Des projets livrés",
    text: "Des ouvrages durables et des clients accompagnés dans la réussite.",
  },
];

export function ShowcaseCarousel() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="AXIOR en images"
          title="Le groupe en action"
          description="Un aperçu de nos équipes, de nos chantiers et de notre manière de travailler, au plus près du terrain."
          className="mb-10"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <Carousel
            slides={showcaseSlides}
            autoPlayMs={5000}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          />
        </motion.div>
      </div>
    </section>
  );
}
