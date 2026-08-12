import type { MetadataRoute } from "next";
import { solutions } from "@/content/solutions";
import { cases } from "@/content/cases";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/solucoes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solucoes/s4hana-cloud", priority: 0.8, changeFrequency: "monthly" },
    { path: "/reforma-tributaria", priority: 0.9, changeFrequency: "weekly" },
    { path: "/segmentos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/cases", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.7, changeFrequency: "yearly" },
    { path: "/parceiros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/universidade", priority: 0.6, changeFrequency: "monthly" },
    { path: "/carreiras", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.8, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...solutions.map((solution) => ({
      url: `${SITE_URL}/solucoes/${solution.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...cases.map((study) => ({
      url: `${SITE_URL}/cases/${study.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
