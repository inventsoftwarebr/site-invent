import type { MetadataRoute } from "next";
import { IS_PRODUCTION_SITE, SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Ambiente de preview: bloqueio total. Um subdomínio de homologação indexado
  // canibaliza o site oficial com conteúdo duplicado.
  if (!IS_PRODUCTION_SITE) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
