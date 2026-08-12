import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { company } from "@/content/company";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Carreiras na Invent Software",
  description:
    "Trabalhe com quem resolve a complexidade fiscal brasileira dentro do SAP. Conheça a Invent Software e as oportunidades abertas.",
  path: "/carreiras",
});

const reasons = [
  {
    title: "Problema difícil de verdade",
    description:
      "Transformar a legislação tributária brasileira em software que funciona é um dos desafios técnicos mais subestimados do país.",
  },
  {
    title: "Escala que se sente",
    description:
      "O que você escreve aqui passa a rodar na operação de dezenas de milhares de empresas. O impacto não é hipotético.",
  },
  {
    title: "Referência reconhecida",
    description:
      "Três anos consecutivos como melhor ISV da América Latina pela SAP. Você entra num time que já provou o que faz.",
  },
];

export default function CarreirasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Carreiras", path: "/carreiras" }])}
      />

      <PageHero
        eyebrow="Carreiras"
        title="Venha resolver o problema fiscal mais difícil do Brasil."
        description="Somos mais de 200 pessoas entre produto, engenharia, fiscal, suporte e comercial — construindo a camada que faz o SAP funcionar na realidade brasileira."
        breadcrumb={[{ label: "Carreiras", href: "/carreiras" }]}
      />

      <Section spacing="tight">
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={0.06 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <h2 className="font-display text-xl font-bold text-white">
                  {reason.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Vagas</Eyebrow>
            <SectionTitle>Não encontrou uma vaga aberta?</SectionTitle>
            <Lead className="mt-6">
              O nosso banco de talentos é revisado sempre que abrimos uma
              posição. Mande o seu currículo contando o que você faz de melhor.
            </Lead>
            <a
              href={`mailto:${company.contact.email}?subject=Banco de talentos`}
              className="mt-9 inline-flex h-13 items-center gap-2 rounded-full bg-red-500 px-8 font-semibold text-white transition-colors hover:bg-red-400"
            >
              Enviar currículo
              <Icon name="arrow-up-right" size={17} />
            </a>
          </Reveal>
        </div>
      </Section>

      <ContactBand
        title="Quer saber mais sobre trabalhar aqui?"
        description="Acompanhe as nossas vagas e o dia a dia do time no LinkedIn."
        primaryLabel="Falar com a Invent"
      />
    </>
  );
}
