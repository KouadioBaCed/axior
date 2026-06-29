"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
                className="card-surface group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
              >
                {/* Contextual image header — full 3:2 sector photo */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Coloured accent bar per sector */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${e.gradient}`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 via-graphite-950/10 to-transparent"
                  />
                  {/* Icon overlapping the image */}
                  <div
                    className={`absolute -bottom-6 left-7 flex h-14 w-14 items-center justify-center rounded-2xl ${e.chip} shadow-soft ring-4 ring-white transition-transform duration-300 group-hover:scale-105 dark:ring-graphite-900`}
                  >
                    <e.icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 pt-10">
                  <h3 className="text-xl font-semibold text-graphite-900 dark:text-white">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                    {e.short}
                  </p>

                  {detailed && (
                    <ul className="mt-5 space-y-2.5 border-t border-graphite-100 pt-5 dark:border-white/10">
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

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-brand transition-all group-hover:gap-2.5">
                    En savoir plus
                    <IconArrowRight className="h-4 w-4" />
                  </span>
                </div>
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
