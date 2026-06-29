"use client";

import { motion } from "framer-motion";
import { IconCompass, IconTarget } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const blocks = [
  {
    icon: IconCompass,
    label: "Notre vision",
    title: "Devenir la référence multisectorielle de l’excellence",
    text: "Bâtir un groupe de référence en Côte d’Ivoire et en Afrique de l’Ouest, reconnu pour la qualité de ses réalisations, sa capacité à mener des projets complexes et son impact durable sur les territoires.",
  },
  {
    icon: IconTarget,
    label: "Notre mission",
    title: "Transformer chaque projet en réussite mesurable",
    text: "Accompagner nos clients à chaque étape — conception, financement, réalisation et suivi — en apportant rigueur, innovation et maîtrise des coûts, pour créer de la valeur partagée et pérenne.",
  },
];

export function VisionMission({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Vision & Mission"
            title="Une ambition claire, une mission concrète"
            description="Ce qui nous guide au quotidien et oriente chacune de nos décisions."
            className="mb-14"
          />
        )}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-2"
        >
          {blocks.map((b) => (
            <motion.div
              key={b.label}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-soft transition-all duration-300 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-800"
              />
              <div className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <b.icon className="h-7 w-7" />
                </div>
                <span className="mt-7 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {b.label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-graphite-900 dark:text-white">
                  {b.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {b.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
