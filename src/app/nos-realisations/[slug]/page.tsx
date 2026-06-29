import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { IconArrowRight, IconCalendar, IconMapPin, IconCheck } from "@/components/icons";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/nos-realisations/${project.slug}` },
  };
}

export default function RealisationPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos Réalisations", url: "/nos-realisations" },
          { name: project.title, url: `/nos-realisations/${project.slug}` },
        ]}
      />

      {/* Coloured project header */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20`}
      >
        <ParallaxImage
          src={project.image}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="opacity-30 mix-blend-overlay"
          strength={9}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-graphite-950/50 via-transparent to-graphite-950/40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dots-light [background-size:22px_22px] opacity-25 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000,transparent)]"
        />
        <div className="container relative">
          <nav
            aria-label="Fil d’Ariane"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/nos-realisations"
              className="transition-colors hover:text-white"
            >
              Nos Réalisations
            </Link>
          </nav>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {project.sector}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <IconMapPin className="h-4 w-4" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <IconCalendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Overview — the photo gets its own dedicated column next to the key facts */}
      <section className="section">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <figure className="overflow-hidden rounded-3xl shadow-card ring-1 ring-graphite-900/5 lg:sticky lg:top-28">
              <Image
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                sizes="(min-width: 1024px) 38rem, 100vw"
                priority
                className="h-auto w-full"
              />
              <figcaption className="flex items-center gap-2 bg-graphite-950 px-5 py-3 text-sm font-medium text-white/90">
                <IconMapPin className="h-4 w-4 text-brand-300" />
                {project.title} · {project.location}
              </figcaption>
            </figure>

            <div>
              <span className="eyebrow bg-brand-50 text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                La réalisation
              </span>
              <p className="mt-4 text-lg font-medium leading-relaxed text-graphite-800 dark:text-graphite-100">
                {project.description}
              </p>

              {"facts" in project && project.facts && (
                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-graphite-100 bg-graphite-100 dark:border-white/10 dark:bg-white/10">
                  {project.facts.map((f) => (
                    <div
                      key={f.label}
                      className="bg-white p-4 dark:bg-graphite-900"
                    >
                      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-graphite-500">
                        {f.label}
                      </dt>
                      <dd className="mt-1 font-display text-lg font-semibold text-graphite-900 dark:text-white">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-white/5 dark:text-brand-200"
                  >
                    <IconCheck className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-5 border-t border-graphite-100 pt-8 text-base leading-relaxed text-graphite-600 dark:border-white/10 dark:text-graphite-300">
                {project.body.map((paragraph, i) =>
                  paragraph.startsWith("## ") ? (
                    <h2
                      key={i}
                      className="pt-3 font-display text-xl font-semibold text-graphite-900 dark:text-white"
                    >
                      {paragraph.slice(3)}
                    </h2>
                  ) : (
                    <p key={i}>{paragraph}</p>
                  ),
                )}
              </div>

              <div className="mt-10 border-t border-graphite-100 pt-8 dark:border-white/10">
                <Link
                  href="/nos-realisations"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-all hover:gap-3"
                >
                  <IconArrowRight className="h-4 w-4 rotate-180" />
                  Retour aux réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
