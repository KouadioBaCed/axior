"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="border-y border-graphite-100 bg-graphite-50/60 py-12 dark:border-white/10 dark:bg-graphite-900/40">
      <div className="container">
        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <dt className="font-display text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-graphite-600 dark:text-graphite-300">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
