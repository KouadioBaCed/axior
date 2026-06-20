"use client";

import { motion } from "framer-motion";
import { reasons } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ReasonsNarrative() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-200 to-transparent sm:left-7"
          />

          <div className="space-y-12 sm:space-y-16">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative pl-16 sm:pl-24"
              >
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-graphite-100 bg-white text-brand shadow-soft sm:h-14 sm:w-14 dark:border-white/10 dark:bg-graphite-900">
                  <r.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-graphite-900 sm:text-[1.7rem] dark:text-white">
                  {r.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
