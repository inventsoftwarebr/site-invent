import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { awards } from "@/content/company";

const pillars = [
  "Inovação",
  "Qualidade",
  "Vendas",
  "Atendimento",
  "Suporte",
  "Agilidade",
];

export function SapRecognition() {
  return (
    <Section id="reconhecimento" light>
      <div aria-hidden className="absolute inset-0 bg-dots-dark opacity-70" />

      <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>Reconhecimento</Eyebrow>
          <SectionTitle>
            Três anos seguidos como a melhor ISV da América Latina.
          </SectionTitle>
          <Lead className="mt-6">
            A SAP avalia seus parceiros de software por inovação, qualidade,
            vendas e suporte. A Invent venceu três vezes consecutivas — não é
            um prêmio, é um padrão sustentado.
          </Lead>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-ink shadow-xs"
              >
                <Icon
                  name="check"
                  size={14}
                  className="text-gold-600"
                  strokeWidth={2.6}
                />
                {pillar}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ButtonLink href="/sobre" variant="accent" size="lg">
              Conhecer a Invent
              <Icon name="arrow-right" size={17} />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ol className="relative flex flex-col gap-4">
            {awards.map((award) => (
              <li
                key={award.year}
                className="relative flex gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-v-gradient text-white">
                  <Icon name="award" size={22} />
                </span>
                <div>
                  <p className="font-mono text-xs font-medium tracking-wider text-gray-500">
                    {award.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    {award.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-red-600">
                    {award.scope}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {award.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
