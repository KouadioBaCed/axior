"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-brand-mesh px-6 py-16 text-center shadow-glow sm:px-12 lg:px-16 lg:py-20"
        >
          <ParallaxImage
            src={images.signature.src}
            alt=""
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="absolute inset-0"
            imgClassName="opacity-20 mix-blend-overlay"
            strength={6}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-900/40 via-transparent to-brand-950/50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-400/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              Démarrons ensemble
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Prêt à donner vie à votre projet&nbsp;?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Échangeons sur vos ambitions. Nos équipes vous accompagnent de
              l’étude initiale jusqu’à la livraison finale.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Démarrer un projet
                <IconArrowRight className="h-5 w-5" />
              </Button>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-base font-medium text-white transition-colors hover:border-brand-400 hover:text-brand-200 sm:w-auto"
              >
                <IconPhone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
