import { Section, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <Section id="contato" spacing="loose" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute top-1/2 left-1/2 h-[560px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(247,166,0,0.13),transparent_66%)] blur-3xl" />
      </div>

      <Reveal className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Próximo passo</Eyebrow>
          <SectionTitle className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98]">
            Vamos conversar.
          </SectionTitle>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            Conte qual processo está consumindo o tempo do seu time. Se tivermos
            a solução, mostramos funcionando no seu cenário. Se não tivermos,
            falamos isso também.
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contato" size="lg">
              Solicitar demonstração
              <Icon name="arrow-right" size={17} />
            </ButtonLink>
            <ButtonLink href="/parceiros" variant="outline" size="lg">
              Quero ser um canal
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
