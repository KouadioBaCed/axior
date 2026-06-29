import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { expertises, news, projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-20");

  const staticRoutes = [
    "/",
    "/qui-sommes-nous",
    "/domaines-expertise",
    "/nos-realisations",
    "/actualites",
    "/pourquoi-axior",
    "/valeurs",
    "/contact",
  ];

  const expertiseRoutes = expertises.map((e) => `/domaines-expertise/${e.slug}`);
  const newsRoutes = news.map((a) => `/actualites/${a.slug}`);
  const realisationRoutes = projects.map((p) => `/nos-realisations/${p.slug}`);

  return [
    ...staticRoutes,
    ...expertiseRoutes,
    ...newsRoutes,
    ...realisationRoutes,
  ].map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
