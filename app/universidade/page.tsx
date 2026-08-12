import { PageHero } from "@/components/shared/PageHero";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { company } from "@/content/company";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Universidade Invent",
  description:
    "Formação oficial nas soluções da Invent Software. Cursos sobre gestão fiscal, bancária e contratual no SAP Business One e S/4HANA Cloud.",
  path: "/universidade",
});

const audiences: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "users",
    title: "Para clientes",
    description:
      "Capacite o time que usa as soluções todo dia, para que o conhecimento não fique concentrado numa pessoa só.",
  },
  {
    icon: "layers",
    title: "Para parceiros",
    description:
      "Habilitação técnica e comercial para integradores SAP que implantam e sustentam as soluções Invent.",
  },
  {
    icon: "book-open",
    title: "Para o mercado",
    description:
      "Conteúdo sobre a realidade fiscal brasileira aplicada ao SAP, de quem escreve o software que a resolve.",
  },
];

export default function UniversidadePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Universidade Invent", path: "/universidade" },
        ])}
      />

      <PageHero
        eyebrow="Universidade Invent"
        title="Quem domina a ferramenta extrai muito mais dela."
        description="A Universidade Invent é a plataforma oficial de formação nas nossas soluções — trilhas sobre gestão fiscal, bancária e contratual dentro do SAP, produzidas por quem constrói os produtos."
        breadcrumb={[{ label: "Universidade Invent", href: "/universidade" }]}
      >
        <ButtonLink
          href={company.externalSystems.university}
          size="lg"
          external
        >
          Acessar a plataforma
          <Icon name="arrow-up-right" size={17} />
        </ButtonLink>
      </PageHero>

      <Section spacing="tight">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={0.06 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v-gradient text-white">
                  <Icon name={audience.icon} size={20} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white">
                  {audience.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {audience.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Comece agora</Eyebrow>
            <SectionTitle>Formação oficial nas soluções Invent.</SectionTitle>
            <Lead className="mt-6">
              Crie a sua conta e comece pela trilha da solução que você usa
              hoje.
            </Lead>
            <div className="mt-9">
              <ButtonLink
                href={company.externalSystems.university}
                variant="accent"
                size="lg"
                external
              >
                Ir para a Universidade Invent
                <Icon name="arrow-up-right" size={17} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
