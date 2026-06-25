"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Slide } from "@/lib/images";

type CarouselProps = {
  slides: Slide[];
  /** Auto-advance delay in ms. Set to 0 to disable autoplay. */
  autoPlayMs?: number;
  /** Extra classes for the root (use for sizing / aspect-ratio). */
  className?: string;
  /** Show the title / text caption overlay. */
  showCaptions?: boolean;
  /** Eager-load the first image (use for above-the-fold heroes). */
  priority?: boolean;
  /** Responsive `sizes` hint passed to next/image. */
  sizes?: string;
  /** Drop the rounded corners / shadow / ring (e.g. full-bleed backgrounds). */
  bare?: boolean;
  /** Show the prev/next arrows (hidden for full-bleed backgrounds). */
  showArrows?: boolean;
  /** Tailwind classes for a darkening overlay above the images (below the controls). */
  overlayClassName?: string;
};

export function Carousel({
  slides,
  autoPlayMs = 5500,
  className,
  showCaptions = true,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  bare = false,
  showArrows = true,
  overlayClassName,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoPlayMs || paused || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, paused, count]);

  // When the caller positions the carousel itself (e.g. `absolute inset-0` for a
  // full-bleed background), don't also force `relative` — Tailwind would let
  // `relative` win and collapse the box to zero height.
  const isAbsolute = className?.includes("absolute");

  return (
    <div
      className={cn(
        "group overflow-hidden bg-graphite-900",
        !isAbsolute && "relative",
        !bare && "rounded-[2rem] shadow-2xl ring-1 ring-black/5",
        className,
      )}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Galerie AXIOR"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            aria-hidden={!active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={sizes}
              priority={priority && i === 0}
              className={cn(
                "object-cover transition-transform duration-[6000ms] ease-out",
                active ? "scale-105" : "scale-100",
              )}
            />
            {showCaptions && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-graphite-950/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: active ? 1 : 0,
                      y: active ? 0 : 16,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    <h3 className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {slide.text}
                    </p>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        );
      })}

      {overlayClassName && (
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-0", overlayClassName)}
        />
      )}

      {count > 1 && (
        <>
          {/* Arrows */}
          {showArrows && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3 sm:p-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Image précédente"
                className="pointer-events-auto flex h-10 w-10 rotate-180 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/30 focus-visible:opacity-100 group-hover:opacity-100"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Image suivante"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/30 focus-visible:opacity-100 group-hover:opacity-100"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller à la diapositive ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
