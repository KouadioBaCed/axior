import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpertiseDetail } from "@/components/sections/ExpertiseDetail";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { expertises } from "@/lib/data";

export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const expertise = expertises.find((e) => e.slug === params.slug);
  if (!expertise) return {};
  return {
    title: expertise.title,
    description: expertise.description,
    alternates: { canonical: `/domaines-expertise/${expertise.slug}` },
  };
}

export default function ExpertiseSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const expertise = expertises.find((e) => e.slug === params.slug);
  if (!expertise) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Domaines d’expertise", url: "/domaines-expertise" },
          {
            name: expertise.title,
            url: `/domaines-expertise/${expertise.slug}`,
          },
        ]}
      />
      <ExpertiseDetail slug={params.slug} />
      <CTASection />
    </>
  );
}
