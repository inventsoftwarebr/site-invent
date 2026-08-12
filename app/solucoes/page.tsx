import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { solutions } from "@/content/solutions";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Soluções para SAP Business One e S/4HANA Cloud",
  description:
    "Gestão fiscal, bancária, contratual e de RH integrada ao SAP® Business One. Conheça TaxPlus, BankPlus, ContractPlus, Intercompany e Invent Payroll.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Soluções", path: "/solucoes" }])}
      />

      <PageHero
        eyebrow="Soluções"
        title="Tudo o que o SAP não traz de fábrica para operar no Brasil."
        description="Cinco soluções que cobrem fiscal, bancário, contratual, consolidação e folha — desenvolvidas e mantidas pelo mesmo time, sob um único contrato."
        breadcrumb={[{ label: "Soluções", href: "/solucoes" }]}
      />

      <Section spacing="tight">
        <div className="flex flex-col gap-6">
          {solutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={0.05 * i}>
              <Link
                href={`/solucoes/${solution.slug}`}
                className="group relative grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] md:grid-cols-[1fr_1.4fr] md:p-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: solution.color }}
                />

                <div>
                  <span className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
                    {solution.category}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white">
                    {solution.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {solution.pitch}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-medium text-white/55"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {solution.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-2.5 text-sm text-white/70"
                      >
                        <Icon
                          name="check"
                          size={15}
                          className="mt-0.5 shrink-0"
                          strokeWidth={2.4}
                          // Cor do produto marca o benefício — reforça a identidade
                          // de cada solução sem precisar de logo em cada card.
                        />
                        {feature.title}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors group-hover:text-gold-500">
                    Ver a solução completa
                    <Icon
                      name="arrow-right"
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <Eyebrow>Comparativo</Eyebrow>
            <SectionTitle>Qual delas resolve a sua dor primeiro?</SectionTitle>
            <Lead className="mt-6">
              Na prática, quase toda empresa começa por uma e adota as demais
              conforme o gargalo se desloca. Não é preciso comprar tudo de uma
              vez.
            </Lead>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-white">
              <table className="w-full min-w-[520px] text-left text-sm">
                <caption className="sr-only">
                  Comparativo entre as soluções da Invent Software: a dor que
                  cada uma resolve e onde ela é sentida.
                </caption>
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th scope="col" className="p-4 font-display text-ink">
                      Solução
                    </th>
                    <th scope="col" className="p-4 font-display text-ink">
                      Se a sua dor é…
                    </th>
                    <th scope="col" className="p-4 font-display text-ink">
                      Sentida por
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      s: "TaxPlus",
                      pain: "Apuração, SPED e nota fiscal eletrônica",
                      who: "Fiscal e Contabilidade",
                    },
                    {
                      s: "BankPlus",
                      pain: "Conciliação e pagamentos manuais",
                      who: "Financeiro e Tesouraria",
                    },
                    {
                      s: "ContractPlus",
                      pain: "Contratos, reajuste e faturamento recorrente",
                      who: "Comercial e Jurídico",
                    },
                    {
                      s: "Intercompany",
                      pain: "Lançamento duplicado entre empresas do grupo",
                      who: "Controladoria",
                    },
                    {
                      s: "Invent Payroll",
                      pain: "Cálculo de folha e rotinas de DP",
                      who: "Recursos Humanos",
                    },
                  ].map((row) => (
                    <tr
                      key={row.s}
                      className="border-b border-[var(--border)] last:border-0"
                    >
                      <th
                        scope="row"
                        className="p-4 font-display font-bold text-ink"
                      >
                        {row.s}
                      </th>
                      <td className="p-4 text-gray-700">{row.pain}</td>
                      <td className="p-4 text-gray-700">{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      <ContactBand
        title="Não sabe por onde começar?"
        description="Em uma conversa de trinta minutos conseguimos apontar qual processo está custando mais caro hoje — e se somos nós que devemos resolvê-lo."
        primaryLabel="Agendar diagnóstico"
      />
    </>
  );
}
