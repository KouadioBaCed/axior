"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-graphite-100 bg-white pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20 dark:border-white/10 dark:bg-graphite-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-5%] h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {breadcrumbs && (
            <motion.nav
              variants={fadeUp}
              aria-label="Fil d’Ariane"
              className="mb-5 flex items-center gap-2 text-sm text-graphite-500"
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-brand"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-graphite-700 dark:text-graphite-300">
                      {c.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-graphite-300">/</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-graphite-900 sm:text-5xl lg:text-[3.5rem] dark:text-white"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite-600 dark:text-graphite-300"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
