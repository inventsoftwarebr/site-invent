import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { awards, company, stats } from "@/content/company";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sobre a Invent Software",
  description:
    "Fundada em 2010, a Invent Software é a primeira one-stop shop de soluções fiscais, bancárias e contratuais para SAP Business One na América Latina.",
  path: "/sobre",
});

const values = [
  {
    title: "Profundidade antes de amplitude",
    description:
      "Preferimos resolver o fiscal brasileiro melhor do que qualquer um a resolver dez assuntos pela metade.",
  },
  {
    title: "A norma é nosso trabalho, não o seu",
    description:
      "Interpretar legislação e transformar em software é o que fazemos para que o cliente não precise fazer.",
  },
  {
    title: "Parceria com o ecossistema",
    description:
      "Crescemos junto com os integradores SAP. O canal não é meio de distribuição, é parte do produto.",
  },
  {
    title: "Suporte é produto",
    description:
      "Um add-on fiscal vale o que vale o atendimento no dia em que a obrigação vence.",
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Sobre", path: "/sobre" }])} />

      <PageHero
        eyebrow="A Invent"
        title="Quinze anos resolvendo a parte do SAP que o Brasil complicou."
        description="A Invent Software nasceu em 2010 e se tornou a primeira one-stop shop de soluções fiscais, bancárias e contratuais para SAP Business One na América Latina. Hoje somos mais de 200 pessoas dedicadas a isso."
        breadcrumb={[{ label: "Sobre", href: "/sobre" }]}
      />

      <Section spacing="tight">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-white/10 py-12 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-extrabold text-white">
                  {stat.value}
                  {stat.suffix}
                  {stat.plus && <span className="text-gold-500">+</span>}
                </p>
                <p className="mt-2 font-display text-sm font-bold text-white/85">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow>Nossa história</Eyebrow>
            <SectionTitle>De Goiás para toda a América Latina.</SectionTitle>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-white/70">
              <p>
                A Invent Software foi fundada em {company.foundedYear} com uma
                aposta específica: o SAP Business One era um ERP excelente, mas
                operar no Brasil exigia uma camada de localização que ninguém
                estava construindo com a profundidade necessária.
              </p>
              <p>
                Quinze anos depois, essa camada virou um portfólio completo —
                fiscal, bancário, contratual, consolidação e folha — que sustenta
                a operação de mais de 27 mil empresas. Pelo caminho, viramos a
                primeira one-stop shop de soluções complementares para SAP na
                América Latina e fomos reconhecidos pela SAP como a melhor ISV
                da região por três anos consecutivos.
              </p>
              <p>
                Em 2024 estendemos o portfólio para o SAP S/4HANA Cloud Public
                Edition, levando a mesma competência fiscal para a nuvem
                pública. É a mesma tese de sempre: onde o SAP chega, a
                complexidade brasileira chega junto — e alguém precisa resolvê-la
                bem.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section light>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Reconhecimento</Eyebrow>
            <SectionTitle>Tricampeã Partner of the Year da SAP.</SectionTitle>
            <Lead className="mt-6">
              Três anos consecutivos avaliados por inovação, qualidade, vendas,
              atendimento e suporte.
            </Lead>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal key={award.year} delay={0.08 * i}>
              <li className="h-full rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v-gradient text-white">
                  <Icon name="award" size={20} />
                </span>
                <p className="mt-5 font-mono text-xs font-medium tracking-wider text-gray-500">
                  {award.year}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-ink">
                  {award.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-red-600">
                  {award.scope}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {award.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Como trabalhamos</Eyebrow>
            <SectionTitle>O que orienta as nossas decisões.</SectionTitle>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={0.06 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <h3 className="font-display text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactBand
        title="Quer trabalhar com a gente?"
        description="Seja como cliente, como canal de revenda ou como parte do time — a conversa começa do mesmo jeito."
        primaryLabel="Falar com a Invent"
        secondaryLabel="Ver vagas abertas"
        secondaryHref="/carreiras"
      />
    </>
  );
}
