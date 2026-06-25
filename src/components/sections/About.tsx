"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { IconArrowRight, IconLayers, IconShield, IconChart } from "@/components/icons";
import { images } from "@/lib/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: IconLayers,
    title: "Approche intégrée",
    text: "Cinq secteurs réunis sous une même exigence de qualité.",
  },
  {
    icon: IconChart,
    title: "Pilotage maîtrisé",
    text: "Coûts, délais et qualité suivis avec discipline.",
  },
  {
    icon: IconShield,
    title: "Confiance durable",
    text: "Un partenaire fiable, transparent et engagé.",
  },
];

export function About() {
  return (
    <section className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Qui sommes-nous"
            title="Un partenaire stratégique pour vos projets les plus exigeants"
            description="AXIOR est un groupe multisectoriel ivoirien qui transforme les idées ambitieuses en réalisations concrètes. Nous combinons expertise technique, rigueur de gestion et connaissance fine du terrain pour accompagner entreprises, institutions et investisseurs."
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-5 max-w-xl text-base leading-relaxed text-graphite-600 dark:text-graphite-300"
          >
            De la première étude jusqu’à la livraison, nous portons chaque
            projet avec la même ambition : créer de la valeur durable, dans le
            respect des délais et du budget.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8"
          >
            <Button href="/qui-sommes-nous" variant="outline">
              En savoir plus sur AXIOR
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="relative col-span-full h-52 overflow-hidden rounded-2xl shadow-card ring-1 ring-graphite-900/5 sm:h-60"
          >
            <ParallaxImage
              src={images.reunionPlans.src}
              alt={images.reunionPlans.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0"
              strength={8}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-graphite-950/55 to-transparent"
            />
            <span className="absolute bottom-4 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Une équipe, cinq expertises
            </span>
          </motion.div>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`card-surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                i === 0 ? "sm:translate-y-6" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-graphite-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                {p.text}
              </p>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center rounded-2xl bg-brand p-6 text-white shadow-glow"
          >
            <p className="font-display text-4xl font-semibold">360°</p>
            <p className="mt-2 text-sm text-brand-50">
              Un accompagnement complet, de la conception à la livraison.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
