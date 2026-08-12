import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  taxReformChanges,
  taxReformChecklist,
  taxReformTimeline,
} from "@/content/tax-reform";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Reforma Tributária: IBS, CBS e o impacto no seu SAP",
  description:
    "O que muda com IBS e CBS, o cronograma de transição até 2033 e o checklist de preparação do seu SAP Business One. Guia da Invent Software.",
  path: "/reforma-tributaria",
});

const statusStyles = {
  current: "border-gold-500/45 bg-gold-500/[0.08]",
  next: "border-white/15 bg-white/[0.03]",
  future: "border-white/10 bg-white/[0.02]",
} as const;

export default function ReformaTributariaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Reforma Tributária", path: "/reforma-tributaria" },
        ])}
      />

      <PageHero
        eyebrow="Reforma Tributária"
        title="IBS e CBS: o que muda, quando muda e o que fazer no seu SAP."
        description="A maior mudança tributária brasileira em quarenta anos já começou. Reunimos o cronograma, os impactos práticos e um checklist de preparação — sem juridiquês."
        accentColor="#D81E2D"
        breadcrumb={[
          { label: "Reforma Tributária", href: "/reforma-tributaria" },
        ]}
      />

      <Section spacing="tight">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Cronograma</Eyebrow>
            <SectionTitle>A transição em quatro etapas.</SectionTitle>
            <Lead className="mt-6">
              Não é uma virada de chave. São sete anos em que dois sistemas
              tributários convivem — e o seu ERP precisa dar conta dos dois ao
              mesmo tempo.
            </Lead>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {taxReformTimeline.map((phase, i) => (
            <Reveal key={phase.period} delay={0.06 * i}>
              <li
                className={`h-full rounded-2xl border p-7 ${statusStyles[phase.status]}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-sm font-medium text-white/70">
                    {phase.period}
                  </span>
                  {phase.status === "current" && (
                    <span className="rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold tracking-wide text-carbon uppercase">
                      Agora
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-lg font-bold text-white">
                  {phase.label}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {phase.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section light>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>O que muda</Eyebrow>
            <SectionTitle>Seis mudanças que atingem o seu sistema.</SectionTitle>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {taxReformChanges.map((change, i) => (
            <Reveal key={change.title} delay={0.05 * i}>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink">
                  {change.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {change.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Preparação</Eyebrow>
            <SectionTitle>Checklist para começar hoje.</SectionTitle>
            <Lead className="mt-6">
              Nenhum destes itens depende de norma nova para ser iniciado. Todos
              levam meses. É por isso que começar agora não é exagero.
            </Lead>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="flex flex-col gap-3">
              {taxReformChecklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <span className="mt-0.5 font-mono text-xs text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Icon
              name="file-text"
              size={18}
              className="mt-0.5 shrink-0 text-white/40"
            />
            <p className="text-xs leading-relaxed text-white/45">
              Este material tem finalidade informativa e reflete a Emenda
              Constitucional 132/2023 e sua regulamentação. A matéria segue em
              evolução: prazos, alíquotas e regras específicas podem mudar a
              cada norma complementar publicada. Não substitui a orientação do
              seu assessor tributário.
            </p>
          </div>
        </Reveal>
      </Section>

      <ContactBand
        title="Seu SAP está preparado para o IBS e a CBS?"
        description="Nosso time fiscal acompanha a regulamentação desde o primeiro texto. Vamos avaliar juntos o que a sua operação precisa ajustar."
        primaryLabel="Falar com o time fiscal"
        secondaryLabel="Conhecer o TaxPlus"
        secondaryHref="/solucoes/taxplus"
      />
    </>
  );
}
