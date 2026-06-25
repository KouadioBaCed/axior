import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  IconPhone,
  IconMail,
  IconPin,
  IconGlobe,
  IconClock,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AXIOR : siège à Grand-Bassam (Abidjan), téléphone +225 0545705244, email contact@axiorci.com. Parlons de votre projet.",
  alternates: { canonical: "/contact" },
};

const infos = [
  {
    icon: IconPin,
    label: "Siège social",
    value: siteConfig.address.line,
    href: siteConfig.map.replace("&output=embed", ""),
    sub: "Côte d’Ivoire",
  },
  {
    icon: IconPhone,
    label: "Téléphone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    sub: "Du lundi au samedi",
  },
  {
    icon: IconMail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    sub: "Réponse sous 24–48h",
  },
  {
    icon: IconGlobe,
    label: "Site web",
    value: siteConfig.domain,
    href: siteConfig.url,
    sub: "En ligne 24/7",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question, un besoin, une ambition ? Écrivez-nous ou appelez-nous : nos équipes vous répondent rapidement et avec attention."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
        image="/images/accompagnement-personnalise.png"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-graphite-900 sm:text-3xl dark:text-white">
                  Nos coordonnées
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite-600 dark:text-graphite-300">
                  Retrouvez toutes les informations pour nous joindre. Nous
                  serons ravis d’échanger avec vous.
                </p>
              </Reveal>

              <Reveal delay={0.05} className="mt-8">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-graphite-100 shadow-soft sm:h-56 dark:border-white/10">
                  <Image
                    src="/images/visite-terrain.png"
                    alt="Les équipes AXIOR à l’écoute de leurs clients"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/65 via-brand-900/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white">
                    <IconPin className="h-5 w-5" />
                    <span className="text-sm font-semibold">
                      Siège · {siteConfig.address.line}
                    </span>
                  </div>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {infos.map((info, i) => (
                  <Reveal key={info.label} delay={i * 0.05}>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex h-full flex-col rounded-2xl border border-graphite-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card dark:border-white/10 dark:bg-graphite-900"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <span className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-graphite-500">
                        {info.label}
                      </span>
                      <span className="mt-1 font-medium text-graphite-900 dark:text-white">
                        {info.value}
                      </span>
                      <span className="mt-0.5 text-xs text-graphite-500">
                        {info.sub}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="mt-6">
                <div className="rounded-2xl border border-graphite-100 bg-white p-6 dark:border-white/10 dark:bg-graphite-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                      <IconClock className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-graphite-900 dark:text-white">
                      Horaires d’ouverture
                    </h3>
                  </div>
                  <ul className="mt-5 divide-y divide-graphite-100 dark:divide-white/10">
                    {siteConfig.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex items-center justify-between py-2.5 text-sm"
                      >
                        <span className="text-graphite-600 dark:text-graphite-300">
                          {h.days}
                        </span>
                        <span
                          className={
                            h.time === "Fermé"
                              ? "font-medium text-graphite-400"
                              : "font-semibold text-graphite-900 dark:text-white"
                          }
                        >
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="mt-6">
                <div className="overflow-hidden rounded-2xl border border-graphite-100 shadow-soft dark:border-white/10">
                  <iframe
                    title="Localisation AXIOR — Grand-Bassam, Abidjan"
                    src={siteConfig.map}
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h2 className="mb-6 font-display text-2xl font-semibold text-graphite-900 sm:text-3xl dark:text-white">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
