"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { expertises } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type ExpertiseGridProps = {
  detailed?: boolean;
  showHeading?: boolean;
  showCta?: boolean;
};

export function ExpertiseGrid({
  detailed = false,
  showHeading = true,
  showCta = true,
}: ExpertiseGridProps) {
  return (
    <section className="section section-muted">
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Domaines d’expertise"
            title="Cinq secteurs, une seule exigence"
            description="Notre intégration multisectorielle nous permet de piloter des projets transverses avec un interlocuteur unique et une qualité homogène."
            className="mb-14"
          />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertises.map((e) => (
            <motion.article key={e.slug} variants={fadeUp}>
              <Link
                href={`/domaines-expertise/${e.slug}`}
                className="card-surface group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
              >
                {/* Coloured accent bar per sector */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${e.gradient}`}
                />
                <div
                  aria-hidden
                  className={`absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${e.gradient} opacity-10 transition-transform duration-500 group-hover:scale-150`}
                />

                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${e.chip} transition-all duration-300 group-hover:scale-105`}
                >
                  <e.icon className="h-7 w-7" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-graphite-900 dark:text-white">
                  {e.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {e.short}
                </p>

                {detailed && (
                  <ul className="relative mt-5 space-y-2.5 border-t border-graphite-100 pt-5 dark:border-white/10">
                    {e.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-graphite-700 dark:text-graphite-200"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all group-hover:gap-2.5">
                  En savoir plus
                  <IconArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {showCta && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 flex justify-center"
          >
            <Button href="/domaines-expertise" variant="outline">
              Explorer tous nos domaines
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
