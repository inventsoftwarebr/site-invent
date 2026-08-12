import { Section, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * O assunto nº 1 de todo cliente SAP B1 brasileiro em 2026. Estar do lado
 * certo dessa conversa é o que separa fornecedor de referência de mercado.
 */
export function TaxReformBanner() {
  return (
    <Section spacing="tight">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-red-500/25 bg-gradient-to-br from-red-500/[0.12] via-transparent to-gold-500/[0.08] p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(216,30,45,0.22),transparent_68%)] blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <Eyebrow className="text-red-300">
                <span className="sr-only">Assunto em destaque: </span>
                Reforma Tributária
              </Eyebrow>
              <SectionTitle className="max-w-2xl">
                IBS e CBS estão chegando. Seu SAP está pronto?
              </SectionTitle>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                A maior mudança tributária em quarenta anos vai reescrever
                apuração, cadastro e documento fiscal. Reunimos o que muda, o
                cronograma de transição e o que precisa ser feito no seu SAP
                Business One — em linguagem de quem vai executar.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/reforma-tributaria" variant="accent" size="lg">
                  Acessar o guia
                  <Icon name="arrow-right" size={17} />
                </ButtonLink>
                <ButtonLink href="/contato" variant="outline" size="lg">
                  Falar com um especialista
                </ButtonLink>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                "O que muda em cada etapa da transição",
                "Impacto prático no cadastro e na apuração",
                "Checklist de preparação do seu ambiente SAP",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <Icon
                    name="check"
                    size={17}
                    className="mt-0.5 text-gold-500"
                    strokeWidth={2.4}
                  />
                  <span className="text-sm leading-relaxed text-white/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
