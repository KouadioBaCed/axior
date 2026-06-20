"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { objectives } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Objectives() {
  return (
    <section className="section bg-graphite-50/50 dark:bg-graphite-900/30">
      <div className="container">
        <SectionHeading
          eyebrow="Objectifs stratégiques"
          title="Quatre priorités qui orientent notre croissance"
          className="mb-14"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {objectives.map((o) => (
            <motion.div
              key={o.title}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:bg-graphite-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-graphite-900 dark:text-white">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                {o.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
