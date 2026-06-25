"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { expertises } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ExpertiseDetail({ slug }: { slug: string }) {
  const expertise = expertises.find((e) => e.slug === slug);
  if (!expertise) return null;

  const Icon = expertise.icon;
  const others = expertises.filter((e) => e.slug !== slug);

  return (
    <>
      {/* Coloured hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${expertise.gradient} pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-24`}
      >
        <ParallaxImage
          src={expertise.image}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="opacity-25 mix-blend-overlay"
          strength={9}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.12] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />
        <div className="container relative">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Fil d’Ariane"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/domaines-expertise"
              className="transition-colors hover:text-white"
            >
              Expertises
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{expertise.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {expertise.tagline}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {expertise.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {expertise.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-brand-700 shadow-soft transition-all hover:shadow-glow sm:w-auto"
              >
                Discuter de votre projet
                <IconArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/nos-realisations"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow bg-brand-50 text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Nos services
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl dark:text-white">
              Ce que nous faisons en {expertise.title}
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {expertise.services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-graphite-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
              >
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${expertise.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                />
                <span className="font-display text-2xl font-semibold text-graphite-200 dark:text-white/10">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-graphite-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key points + other sectors */}
      <section className="section section-tint">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow bg-brand-50 text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Points clés
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl dark:text-white">
              Notre savoir-faire
            </h2>
            <ul className="mt-8 space-y-4">
              {expertise.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-graphite-100 bg-white p-4 text-base text-graphite-800 shadow-soft dark:border-white/10 dark:bg-graphite-900 dark:text-graphite-100"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand text-white">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow bg-brand-50 text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Autres pôles
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl dark:text-white">
              Explorer nos expertises
            </h2>
            <div className="mt-8 space-y-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/domaines-expertise/${o.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-graphite-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
                >
                  <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${o.chip}`}>
                    <o.icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-graphite-900 dark:text-white">
                      {o.title}
                    </span>
                    <span className="block truncate text-sm text-graphite-500 dark:text-graphite-400">
                      {o.tagline}
                    </span>
                  </span>
                  <IconArrowRight className="h-5 w-5 flex-none text-graphite-300 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
