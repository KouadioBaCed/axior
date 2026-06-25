"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodology } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Methodology({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Notre méthodologie"
            title="Une démarche structurée, du diagnostic à la livraison"
            description="Quatre étapes claires pour sécuriser chaque projet et garantir un résultat à la hauteur de vos attentes."
            className="mb-16"
          />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {methodology.map((m) => (
            <motion.div
              key={m.step}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-graphite-950/45 to-transparent"
                />
                <span className="absolute left-4 top-4 font-display text-sm font-bold text-white/90">
                  {m.step}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 pt-0">
                <div className="relative z-10 -mt-7 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-2xl border border-graphite-100 bg-white shadow-soft transition-colors group-hover:border-brand dark:border-white/10 dark:bg-graphite-900">
                  <m.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-graphite-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
