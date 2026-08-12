import type { Metadata } from "next";
import { company } from "@/content/company";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? company.url;

/**
 * Só o ambiente marcado explicitamente como produção pode ser indexado.
 *
 * Isto não é preciosismo: um subdomínio de preview indexado pelo Google vira
 * conteúdo duplicado competindo com o site oficial, e tirar do índice depois é
 * bem mais trabalhoso do que impedir a entrada. O default é "não indexar" —
 * esquecer de setar a variável causa um site invisível, não um vazamento.
 */
export const IS_PRODUCTION_SITE =
  process.env.NEXT_PUBLIC_SITE_ENV === "production";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Deixe `false` em páginas que não devem ser indexadas. */
  index?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots:
      index && IS_PRODUCTION_SITE ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
    },
  };
}

/** JSON-LD da organização — aparece uma vez, no layout raiz. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/invent-cinza.png`,
    foundingDate: String(company.foundedYear),
    description: company.shortDescription,
    sameAs: [
      company.social.linkedin,
      company.social.instagram,
      company.social.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.contact.email,
      telephone: company.contact.phoneHref,
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  };
}

type SoftwareJsonLdInput = {
  name: string;
  description: string;
  path: string;
  category: string;
};

export function softwareJsonLd({
  name,
  description,
  path,
  category,
}: SoftwareJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: category,
    applicationSubCategory: "SAP Business One Add-on",
    operatingSystem: "SAP Business One",
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
