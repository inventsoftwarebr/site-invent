import type { Metadata, Viewport } from "next";
import { Barlow, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { company } from "@/content/company";
import { IS_PRODUCTION_SITE, organizationJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  applicationName: company.name,
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.legalName,
  keywords: [
    "SAP Business One",
    "add-on fiscal SAP",
    "gestão fiscal SAP Business One",
    "SPED",
    "NF-e",
    "NFS-e",
    "conciliação bancária SAP",
    "gestão de contratos SAP",
    "S/4HANA Cloud",
    "reforma tributária",
    "Invent Software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.shortDescription,
  },
  // Fora de produção o site inteiro sai com noindex — ver IS_PRODUCTION_SITE.
  robots: IS_PRODUCTION_SITE
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      }
    : { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    apple: "/brand/v-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {/*
          Sem JavaScript o framer-motion nunca reverte o `opacity: 0` inline dos
          blocos de entrada e a página fica em branco. Este bloco só é aplicado
          quando o script está desligado, então não há custo no caso normal.
        */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <JsonLd data={organizationJsonLd()} />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
