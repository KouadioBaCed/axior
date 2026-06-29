import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
  IconArrowRight,
} from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site";
import { expertises } from "@/lib/data";

const navColumn = navLinks.flatMap((link) =>
  link.menu === "axior"
    ? link.children ?? []
    : [{ label: link.label, href: link.href }],
);

const contact = [
  {
    icon: IconPhone,
    label: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: IconMail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: IconPin,
    label: `Siège : ${siteConfig.address.line}`,
    href: siteConfig.map.replace("&output=embed", ""),
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-graphite-400 transition-colors hover:text-white"
    >
      <span
        aria-hidden
        className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-4"
      />
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </span>
    </Link>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {children}
    </h3>
  );
}

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative isolate overflow-hidden bg-graphite-950 text-graphite-300">
      {/* Premium gradient cap */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
      />
      {/* Layered ambient decoration for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-[-8%] h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-6%] h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-dots-light [background-size:22px_22px] opacity-[0.35] [mask-image:radial-gradient(ellipse_85%_60%_at_50%_0%,#000,transparent_75%)]" />
      </div>

      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-xl bg-white px-3.5 py-2.5 shadow-soft ring-1 ring-white/10">
              <Logo />
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-graphite-400">
              {siteConfig.slogan}. AXIOR accompagne vos projets, de la conception
              à la livraison, avec exigence et proximité.
            </p>

            <ul className="mt-7 space-y-3">
              {contact.map((c) => {
                const external = c.href.startsWith("http");
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-sm text-graphite-300 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/5 text-brand-300 ring-1 ring-white/10 transition-colors group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                        <c.icon className="h-4 w-4" />
                      </span>
                      {c.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-2" aria-label="Navigation du pied de page">
            <ColumnHeading>Navigation</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {navColumn.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Expertises */}
          <nav className="lg:col-span-3" aria-label="Nos expertises">
            <ColumnHeading>Expertises</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {expertises.map((e) => (
                <li key={e.slug}>
                  <FooterLink
                    href={`/domaines-expertise/${e.slug}`}
                    label={e.title}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours + contact CTA */}
          <div className="lg:col-span-3">
            <ColumnHeading>Horaires &amp; contact</ColumnHeading>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                <IconClock className="h-4 w-4" />
                Ouverture
              </div>
              <ul className="mt-4 space-y-2.5">
                {siteConfig.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-graphite-400">{h.days}</span>
                    <span
                      className={
                        h.time === "Fermé"
                          ? "font-medium text-graphite-500"
                          : "font-semibold text-white"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Nous contacter
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-graphite-500 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="text-graphite-500">
            {siteConfig.domain} · Abidjan, Côte d’Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
