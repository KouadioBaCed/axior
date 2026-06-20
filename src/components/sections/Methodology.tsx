"use client";

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
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          {methodology.map((m) => (
            <motion.div
              key={m.step}
              variants={fadeUp}
              className="group relative flex flex-col rounded-2xl border border-graphite-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
            >
              <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-graphite-100 bg-white shadow-soft transition-colors group-hover:border-brand dark:border-white/10 dark:bg-graphite-900">
                <m.icon className="h-7 w-7 text-brand" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {m.step}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-graphite-900 dark:text-white">
                {m.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                {m.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
