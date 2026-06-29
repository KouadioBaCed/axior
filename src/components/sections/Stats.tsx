"use client";

import { motion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { stats } from "@/lib/data";
import { images } from "@/lib/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-graphite-950 py-16 sm:py-20">
      {/* Contextual background photo with gentle parallax, kept discreet */}
      <ParallaxImage
        src={images.equipeMultidisciplinaire.src}
        alt=""
        sizes="100vw"
        className="absolute inset-0"
        imgClassName="opacity-25"
        strength={9}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/85 to-graphite-950/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-[0.07] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="container relative">
        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <dt className="font-display text-5xl font-semibold tracking-tight text-brand-300 sm:text-6xl">
                {s.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-white/75">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
