"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
  /** Optional background photo — switches the header to the premium photo variant. */
  image?: string;
}) {
  const hasImage = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20",
        hasImage
          ? "bg-graphite-950"
          : "border-b border-graphite-100 bg-white dark:border-white/10 dark:bg-graphite-950",
      )}
    >
      {hasImage ? (
        <>
          <ParallaxImage
            src={image as string}
            alt=""
            priority
            sizes="100vw"
            className="absolute inset-0"
            imgClassName="opacity-40"
            strength={9}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/85 to-graphite-950/55"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.07] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-light [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-5%] h-96 w-96 rounded-full bg-brand/10 blur-3xl"
          />
        </>
      )}

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
              className={cn(
                "mb-5 flex items-center gap-2 text-sm",
                hasImage ? "text-white/60" : "text-graphite-500",
              )}
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={cn(
                        "transition-colors",
                        hasImage ? "hover:text-white" : "hover:text-brand",
                      )}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        hasImage
                          ? "text-white/90"
                          : "text-graphite-700 dark:text-graphite-300"
                      }
                    >
                      {c.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span
                      className={hasImage ? "text-white/30" : "text-graphite-300"}
                    >
                      /
                    </span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.span
            variants={fadeUp}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
              hasImage
                ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                : "bg-brand-50 text-brand-700",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                hasImage ? "bg-brand-300" : "bg-brand",
              )}
            />
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className={cn(
              "mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]",
              hasImage ? "text-white" : "text-graphite-900 dark:text-white",
            )}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed",
                hasImage ? "text-white/80" : "text-graphite-600 dark:text-graphite-300",
              )}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
