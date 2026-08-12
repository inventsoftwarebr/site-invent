import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { segments } from "@/content/segments";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Segmentos atendidos",
  description:
    "Varejo, logística, construção, agro, saúde, serviços e mais. Conheça a dor fiscal e financeira de cada setor e como a Invent resolve dentro do SAP.",
  path: "/segmentos",
});

export default function SegmentosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Segmentos", path: "/segmentos" }])}
      />

      <PageHero
        eyebrow="Segmentos"
        title="A legislação é a mesma. A dor, não."
        description="Cada setor encontra um gargalo diferente na mesma complexidade tributária. Conhecemos o de cada um porque já implantamos em todos eles."
        breadcrumb={[{ label: "Segmentos", href: "/segmentos" }]}
      />

      <Section spacing="tight">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, i) => (
            <Reveal key={segment.slug} delay={0.04 * i}>
              <article
                id={segment.slug}
                className="h-full scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-colors duration-300 hover:border-gold-500/35"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gold-500">
                  <Icon name={segment.icon} size={22} />
                </span>
                <h2 className="mt-6 font-display text-xl font-bold text-white">
                  {segment.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {segment.pain}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactBand
        title="Seu setor não está na lista?"
        description="A complexidade fiscal brasileira não escolhe segmento. Conte o seu processo e avaliamos juntos."
        primaryLabel="Falar com um especialista"
      />
    </>
  );
}
