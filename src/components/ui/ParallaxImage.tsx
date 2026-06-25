"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** Eager-load (above-the-fold visuals only). */
  priority?: boolean;
  /** Wrapper classes — set the box size / aspect-ratio / rounding here. */
  className?: string;
  /** Extra classes for the <Image> (e.g. opacity, blend modes). */
  imgClassName?: string;
  /** Parallax travel as a % of the element height. Keep it subtle (4–10). */
  strength?: number;
  /** Optional darkening / gradient overlay above the image. */
  overlayClassName?: string;
};

/**
 * A premium, performance-friendly parallax image.
 * The photo drifts slightly slower than the scroll, adding depth without
 * jank (transform-only animation, GPU-composited) and with no edge gaps
 * thanks to a small safety zoom. Falls back to a static image when the
 * user prefers reduced motion.
 */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  imgClassName,
  strength = 7,
  overlayClassName,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );

  // Avoid the same Tailwind position-conflict as the carousel: only add
  // `relative` when the caller hasn't positioned the wrapper itself.
  const isAbsolute = className?.includes("absolute");

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", !isAbsolute && "relative", className)}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? { scale: 1.16 } : { y, scale: 1.16 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
      {overlayClassName && (
        <div aria-hidden className={cn("absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}
