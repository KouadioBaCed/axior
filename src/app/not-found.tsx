import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000,transparent)]"
      />
      <div className="container relative text-center">
        <p className="font-display text-7xl font-semibold text-brand sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 font-display text-3xl font-semibold text-graphite-900 sm:text-4xl dark:text-white">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
          La page que vous recherchez n’existe pas ou a été déplacée. Revenons
          sur la bonne voie.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Retour à l’accueil
            <IconArrowRight className="h-5 w-5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
