"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { IconArrowRight, IconCheck, IconShield } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { heroSlides } from "@/lib/images";
import { fadeUp, staggerContainer } from "@/lib/motion";

const highlights = ["Multisectoriel", "Partenaire stratégique", "Ancrage local"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[38rem] items-center overflow-hidden pt-28 pb-20 sm:min-h-[42rem] sm:pt-32 lg:min-h-[46rem] lg:pt-36 lg:pb-28">
      {/* Full-bleed background carousel */}
      <Carousel
        slides={heroSlides}
        priority
        bare
        showCaptions={false}
        showArrows={false}
        sizes="100vw"
        className="absolute inset-0"
        overlayClassName="bg-gradient-to-r from-graphite-950/75 via-graphite-950/45 to-graphite-950/10"
      />
      {/* Warm brand bloom for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-3xl"
      />

      {/* Floating glass accents — desktop only, decorative premium depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[7%] top-[26%]"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-glow backdrop-blur-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/30 text-white ring-1 ring-white/20">
              <IconShield className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Qualité &amp; sécurité
              </p>
              <p className="text-xs text-white/70">Protocoles exigeants</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[16%] bottom-[16%]"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-glow backdrop-blur-md"
          >
            <p className="font-display text-2xl font-semibold text-white">
              5 pôles
            </p>
            <p className="text-xs text-white/70">intégrés sous un même toit</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
              </span>
              Groupe multisectoriel · Côte d’Ivoire
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            L’Expert de <span className="text-brand-300">vos projets</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
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
              variant="glass"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-brand-300 ring-1 ring-white/20">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <span className="sr-only">{siteConfig.slogan}</span>
    </section>
  );
}
