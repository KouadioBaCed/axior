import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { IconPhone, IconMail, IconPin, IconArrowRight } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site";
import { expertises } from "@/lib/data";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-graphite-100 bg-white dark:border-white/10 dark:bg-graphite-950">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
              {siteConfig.slogan}. AXIOR accompagne vos projets, de la conception
              à la livraison, avec exigence et proximité.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 text-graphite-700 transition-colors hover:text-brand dark:text-graphite-200"
              >
                <IconPhone className="h-4 w-4 text-brand" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-graphite-700 transition-colors hover:text-brand dark:text-graphite-200"
              >
                <IconMail className="h-4 w-4 text-brand" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-graphite-700 dark:text-graphite-200">
                <IconPin className="h-4 w-4 text-brand" />
                Siège : {siteConfig.address.line}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-graphite-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks
                .flatMap((link) =>
                  link.menu === "axior"
                    ? link.children ?? []
                    : [{ label: link.label, href: link.href }],
                )
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-graphite-600 transition-colors hover:text-brand dark:text-graphite-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-graphite-900 dark:text-white">
              Expertises
            </h3>
            <ul className="mt-5 space-y-3">
              {expertises.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/domaines-expertise/${e.slug}`}
                    className="text-sm text-graphite-600 transition-colors hover:text-brand dark:text-graphite-300"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-graphite-900 dark:text-white">
              Parlons de votre projet
            </h3>
            <div className="relative mt-5 h-32 overflow-hidden rounded-2xl border border-graphite-100 shadow-soft dark:border-white/10">
              <Image
                src="/images/equipe-poles.png"
                alt="L’équipe AXIOR et ses cinq pôles d’expertise"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/55 to-transparent"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
              Une idée, un besoin, un défi&nbsp;? Nos équipes vous répondent
              rapidement.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-600 hover:shadow-glow"
            >
              Nous contacter
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-graphite-100 pt-8 text-sm text-graphite-500 sm:flex-row sm:items-center dark:border-white/10">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="text-graphite-400">
            {siteConfig.domain} · Abidjan, Côte d’Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
