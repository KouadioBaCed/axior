"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Values({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section bg-graphite-50/50 dark:bg-graphite-900/30">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Les principes qui nous engagent"
            description="Trois valeurs fondamentales structurent notre culture et notre manière de travailler avec vous."
            className="mb-14"
          />
        )}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="group relative flex flex-col rounded-2xl border border-graphite-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
            >
              <span className="font-display text-5xl font-semibold text-graphite-100 transition-colors group-hover:text-brand-100 dark:text-white/10">
                0{i + 1}
              </span>
              <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-graphite-900 dark:text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
