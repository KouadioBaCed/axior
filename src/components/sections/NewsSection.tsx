"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrowRight, IconCalendar } from "@/components/icons";
import { news } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type NewsSectionProps = {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
  tint?: boolean;
};

export function NewsSection({
  limit,
  showHeading = true,
  showCta = true,
  tint = false,
}: NewsSectionProps) {
  const items = limit ? news.slice(0, limit) : news;

  return (
    <section className={`section${tint ? " section-tint" : ""}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Nos Actualités"
            title="Les dernières nouvelles du Groupe"
            description="Projets, partenariats, temps forts : suivez l’actualité d’AXIOR et de ses cinq pôles d’expertise."
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
          {items.map((article) => (
            <motion.article key={article.slug} variants={fadeUp}>
              <Link
                href={`/actualites/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
              >
                <div
                  className={`relative flex h-40 items-start justify-between overflow-hidden bg-gradient-to-br ${article.gradient} p-5`}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 to-graphite-950/10"
                  />
                  <span className="relative rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-graphite-500 dark:text-graphite-400">
                    <IconCalendar className="h-3.5 w-3.5 text-brand" />
                    {article.dateLabel}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-graphite-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all group-hover:gap-2.5">
                    Lire l’article
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
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/nos-realisations">
              Voir nos réalisations
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/actualites" variant="outline">
              Toutes nos actualités
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
