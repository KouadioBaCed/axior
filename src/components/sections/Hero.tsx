"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { expertises } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

const highlights = ["Multisectoriel", "Partenaire stratégique", "Ancrage local"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sand-50 to-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28 dark:from-graphite-950 dark:via-graphite-950 dark:to-graphite-950">
      {/* Architectural motif + warm blooms to break the flat white */}
      <div
        aria-hidden
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] dark:opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent-300/25 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp}>
              <span className="eyebrow border border-brand-100 bg-brand-50 text-brand-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Groupe multisectoriel · Côte d’Ivoire
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-graphite-900 sm:text-5xl lg:text-6xl xl:text-[4.25rem] dark:text-white"
            >
              L’Expert de <span className="text-brand">vos projets</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-graphite-600 dark:text-graphite-300"
            >
              AXIOR conçoit, pilote et livre des projets complexes à travers cinq
              secteurs stratégiques. Un partenaire unique et fiable qui vous
              accompagne de l’idée à la réalisation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Contactez-nous
                <IconArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="/domaines-expertise"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Découvrir nos expertises
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {highlights.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 text-sm font-medium text-graphite-600 dark:text-graphite-300"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — colourful sector showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative lg:col-span-6"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-brand/20 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-mesh p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.12] [background-size:36px_36px]"
              />
              <div className="relative">
                <div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                  <span>Nos pôles d’expertise</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
                    5 secteurs
                  </span>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="mt-5 grid grid-cols-2 gap-3"
                >
                  {expertises.map((e) => (
                    <motion.div
                      key={e.slug}
                      variants={fadeUp}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                        <e.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-sm font-semibold leading-tight text-white">
                        {e.title}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-white/60">
                        {e.tagline}
                      </p>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col justify-center rounded-2xl bg-white p-4 shadow-soft"
                  >
                    <p className="font-display text-3xl font-semibold text-brand">
                      360°
                    </p>
                    <p className="mt-1 text-xs leading-snug text-graphite-600">
                      Accompagnement de l’idée à la réalisation
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Floating credibility badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-graphite-100 bg-white/95 px-5 py-3.5 shadow-card backdrop-blur sm:-left-6 dark:border-white/10 dark:bg-graphite-900/95"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-glow">
                <IconCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-graphite-900 dark:text-white">
                  Un partenaire unique
                </p>
                <p className="text-xs text-graphite-500 dark:text-graphite-400">
                  Fiable, de A à Z
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <span className="sr-only">{siteConfig.slogan}</span>
    </section>
  );
}
