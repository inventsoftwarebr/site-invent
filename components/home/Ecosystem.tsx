import Link from "next/link";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/content/solutions";

/**
 * O bloco que sustenta o posicionamento de "one-stop shop": mostra a camada
 * Invent inteira sobre o ERP, em vez de cinco cards soltos.
 */
export function Ecosystem() {
  return (
    <Section id="solucoes">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>O ecossistema Invent</Eyebrow>
          <SectionTitle>
            Uma camada completa sobre o seu ERP — não cinco fornecedores.
          </SectionTitle>
          <Lead className="mt-6">
            Fiscal, bancário, contratual e RH resolvidos pelo mesmo time, com o
            mesmo padrão e um único contrato. É o que significa ser a primeira
            one-stop shop de soluções complementares para SAP na América Latina.
          </Lead>
        </Reveal>
      </div>

      {/* Camada base: onde tudo roda. */}
      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/40 uppercase">
            <Icon name="layers" size={15} />
            Roda sobre
          </span>
          <span className="rounded-full border border-white/12 px-4 py-1.5 text-sm font-medium text-white/80">
            SAP® Business One
          </span>
          <span className="rounded-full border border-white/12 px-4 py-1.5 text-sm font-medium text-white/80">
            SAP S/4HANA Cloud Public Edition
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, i) => (
          <Reveal key={solution.slug} delay={0.06 * i}>
            <Link
              href={`/solucoes/${solution.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Glow na cor do produto, revelado no hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle, ${solution.color}, transparent 68%)`,
                }}
              />

              <div className="relative flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: solution.color }}
                />
                <span className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
                  {solution.category}
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-2xl font-bold text-white">
                {solution.name}
              </h3>

              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {solution.pitch}
              </p>

              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors group-hover:text-gold-500">
                Conhecer {solution.name}
                <Icon
                  name="arrow-right"
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        ))}

        <Reveal delay={0.06 * solutions.length}>
          <Link
            href="/solucoes"
            className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-white/15 p-7 transition-colors hover:border-gold-500/50"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Não sabe por onde começar?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Compare as soluções lado a lado e descubra qual resolve a sua
                dor primeiro.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500">
              Comparar soluções
              <Icon
                name="arrow-right"
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
