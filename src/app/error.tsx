"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Root error boundary.
 * A `ChunkLoadError` means the browser asked for a JS chunk whose hash no
 * longer exists — typical right after a redeploy (or a dev recompile) while a
 * tab is still open. We recover transparently by reloading once; a short
 * timestamp guard in sessionStorage prevents any reload loop.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkError =
    error?.name === "ChunkLoadError" ||
    /loading chunk [\w./-]+ failed/i.test(error?.message ?? "") ||
    /chunkloaderror/i.test(error?.message ?? "");

  useEffect(() => {
    if (!isChunkError || typeof window === "undefined") return;
    const KEY = "axior:chunk-reload-at";
    const last = Number(window.sessionStorage.getItem(KEY) || 0);
    // Only auto-reload once per 10s window to avoid any loop.
    if (Date.now() - last > 10_000) {
      window.sessionStorage.setItem(KEY, String(Date.now()));
      window.location.reload();
    }
  }, [isChunkError]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {isChunkError ? "Mise à jour" : "Oups"}
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-graphite-900 dark:text-white">
          {isChunkError
            ? "Actualisation en cours…"
            : "Une erreur est survenue"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
          {isChunkError
            ? "Le site a été mis à jour. Nous rechargeons la page pour vous afficher la dernière version."
            : "Quelque chose s’est mal passé de notre côté. Vous pouvez réessayer ou revenir à l’accueil."}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-medium text-white shadow-soft transition-all hover:shadow-glow sm:w-auto"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-graphite-200 px-7 text-sm font-medium text-graphite-700 transition-colors hover:border-brand hover:text-brand sm:w-auto dark:border-white/15 dark:text-graphite-200"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
