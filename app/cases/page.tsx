import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { cases } from "@/content/cases";
import { clients } from "@/content/clients";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cases de clientes",
  description:
    "Empresas que automatizaram gestão fiscal, bancária e contratual no SAP Business One com as soluções da Invent Software.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Cases", path: "/cases" }])} />

      <PageHero
        eyebrow="Cases"
        title="Quem já resolveu isso com a gente."
        description="Mais de 27 mil empresas operam com soluções Invent — de startup a companhia de capital aberto, em praticamente todos os setores da economia brasileira."
        breadcrumb={[{ label: "Cases", href: "/cases" }]}
      />

      {cases.length > 0 ? (
        <Section spacing="tight">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((study, i) => (
              <Reveal key={study.slug} delay={0.06 * i}>
                <Link
                  href={`/cases/${study.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
                    {study.segment}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-white">
                    {study.headline}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {study.challenge}
                  </p>
                  <dl className="mt-7 flex flex-wrap gap-8">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <dt className="sr-only">{result.label}</dt>
                        <dd>
                          <span className="block font-display text-3xl font-extrabold text-gold-500">
                            {result.metric}
                          </span>
                          <span className="mt-1 block text-xs text-white/50">
                            {result.label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : (
        /*
         * Estado alternativo enquanto não há cases publicados com autorização
         * do cliente. Prova social real (logos) + oferta de referência sob
         * demanda — em vez de cards de resultado inventados.
         */
        <Section spacing="tight">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <Eyebrow>Prova sob demanda</Eyebrow>
              <SectionTitle>
                Referências você fala direto com elas.
              </SectionTitle>
              <Lead className="mt-6">
                Estamos preparando os cases detalhados com números auditados e
                autorização de uso de marca. Enquanto isso, se você quer saber
                como funciona na prática, colocamos você em contato com uma
                empresa do seu porte e do seu segmento que já usa a solução.
              </Lead>

              <ul className="mt-8 flex flex-col gap-3.5">
                {[
                  "Conversa direta com um cliente do seu segmento",
                  "Demonstração no cenário fiscal da sua operação",
                  "Referência técnica com o parceiro SAP que implantou",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      size={16}
                      className="mt-1 shrink-0 text-gold-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-relaxed text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                {clients.slice(0, 12).map((client) => (
                  <div
                    key={client.name}
                    className="flex aspect-3/2 items-center justify-center rounded-xl bg-white/[0.03] p-3"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={110}
                      height={38}
                      sizes="110px"
                      className="h-7 w-auto object-contain opacity-55 grayscale"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      <ContactBand
        title="Quer falar com um cliente antes de decidir?"
        description="É o pedido mais justo que existe. Diga o seu segmento e o seu porte, e conectamos você a uma referência."
        primaryLabel="Pedir uma referência"
      />
    </>
  );
}
