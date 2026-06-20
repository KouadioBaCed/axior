"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrowRight, IconCalendar, IconMapPin } from "@/components/icons";
import { projects } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type ProjectsProps = {
  /** Limit the number of projects shown (teaser mode). */
  limit?: number;
  /** Show the section heading. */
  showHeading?: boolean;
  /** Show the "see all" button (teaser mode). */
  showCta?: boolean;
  /** Section background tint. */
  tint?: boolean;
};

export function Projects({
  limit,
  showHeading = true,
  showCta = true,
  tint = false,
}: ProjectsProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className={`section${tint ? " section-tint" : ""}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Projets réalisés"
            title="Un aperçu de notre savoir-faire"
            description="Quelques projets représentatifs que nous avons conçus, pilotés et livrés à travers nos cinq pôles d’expertise."
            className="mb-14"
          />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((p) => (
            <motion.article
              key={p.slug}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
            >
              <div
                className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${p.gradient} p-6`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid-light [background-size:28px_28px] opacity-20"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-2xl"
                />
                <div className="relative flex w-full items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {p.sector}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-white/85">
                    <IconCalendar className="h-3.5 w-3.5" />
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-graphite-500 dark:text-graphite-400">
                  <IconMapPin className="h-3.5 w-3.5 text-brand" />
                  {p.location}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-graphite-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-white/5 dark:text-brand-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
            <Button href="/nos-realisations" variant="outline">
              Voir toutes nos réalisations
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
