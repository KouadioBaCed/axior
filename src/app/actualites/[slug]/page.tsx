import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { IconArrowRight, IconCalendar } from "@/components/icons";
import { news } from "@/lib/data";

export function generateStaticParams() {
  return news.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = news.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/actualites/${article.slug}` },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = news.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const others = news.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos Actualités", url: "/actualites" },
          { name: article.title, url: `/actualites/${article.slug}` },
        ]}
      />

      {/* Coloured article header */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${article.gradient} pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20`}
      >
        <ParallaxImage
          src={article.image}
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
            <Link href="/actualites" className="transition-colors hover:text-white">
              Actualités
            </Link>
          </nav>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <IconCalendar className="h-4 w-4" />
                {article.dateLabel}
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured visual bridging the header into the article */}
      <div className="container relative z-10 -mt-10 sm:-mt-14">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl shadow-card ring-1 ring-graphite-900/5">
          {"imageWidth" in article ? (
            <Image
              src={article.image}
              alt={article.title}
              width={article.imageWidth}
              height={article.imageHeight}
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="h-auto w-full"
            />
          ) : (
            <ParallaxImage
              src={article.image}
              alt={article.title}
              sizes="(min-width: 896px) 896px, 100vw"
              className="aspect-[16/9] sm:aspect-[2/1]"
              strength={10}
              overlayClassName="bg-gradient-to-t from-graphite-950/25 via-transparent to-transparent"
            />
          )}
        </div>
      </div>

      {/* Body */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <p className="text-lg font-medium leading-relaxed text-graphite-800 dark:text-graphite-100">
              {article.excerpt}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
              {article.body.map((paragraph, i) =>
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
                href="/actualites"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-all hover:gap-3"
              >
                <IconArrowRight className="h-4 w-4 rotate-180" />
                Retour aux actualités
              </Link>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mx-auto mt-16 max-w-2xl">
              <h2 className="font-display text-xl font-semibold text-graphite-900 dark:text-white">
                À lire également
              </h2>
              <div className="mt-5 space-y-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/actualites/${o.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-graphite-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
                  >
                    <span className="relative h-12 w-12 flex-none overflow-hidden rounded-xl">
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-graphite-500 dark:text-graphite-400">
                        {o.dateLabel} · {o.category}
                      </span>
                      <span className="mt-0.5 block truncate font-semibold text-graphite-900 dark:text-white">
                        {o.title}
                      </span>
                    </span>
                    <IconArrowRight className="h-5 w-5 flex-none text-graphite-300 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
