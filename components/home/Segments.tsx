import Link from "next/link";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { segments } from "@/content/segments";

export function Segments() {
  return (
    <Section id="segmentos">
      <div className="grid gap-8 md:grid-cols-2 md:items-end">
        <Reveal>
          <Eyebrow>Segmentos</Eyebrow>
          <SectionTitle>
            Cada setor quebra de um jeito diferente.
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <Lead>
            Varejo sofre com volume de NFC-e; logística, com ICMS interestadual;
            construção, com retenção e custo por obra. Conhecemos a dor de cada
            um porque já resolvemos todas elas.
          </Lead>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {segments.map((segment, i) => (
          <Reveal key={segment.slug} delay={0.03 * i}>
            <Link
              href={`/segmentos#${segment.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gold-500 transition-colors group-hover:border-gold-500/40">
                <Icon name={segment.icon} size={21} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-white">
                {segment.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                {segment.pain}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
