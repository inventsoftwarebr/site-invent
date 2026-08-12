import { Section, SectionTitle } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** Fechamento reaproveitado nas páginas internas. */
export function ContactBand({
  title = "Quer ver funcionando no seu cenário?",
  description = "Agende uma conversa com nossos especialistas. Sem script de vendas — começamos entendendo o seu processo.",
  primaryLabel = "Solicitar demonstração",
  primaryHref = "/contato",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section spacing="tight">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center md:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(247,166,0,0.14),transparent_66%)] blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <SectionTitle className="text-3xl md:text-4xl">{title}</SectionTitle>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
                <Icon name="arrow-right" size={17} />
              </ButtonLink>
              {secondaryLabel && secondaryHref && (
                <ButtonLink href={secondaryHref} variant="outline" size="lg">
                  {secondaryLabel}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
