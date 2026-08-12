import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Programa de parceiros e canais",
  description:
    "Integradores SAP Business One: complete o seu portfólio com as soluções fiscais, bancárias e contratuais da Invent Software.",
  path: "/parceiros",
});

const benefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "layers",
    title: "Portfólio completo, um só fornecedor",
    description:
      "Fiscal, bancário, contratual, consolidação e folha. Você fecha o projeto inteiro sem montar um quebra-cabeça de fornecedores.",
  },
  {
    icon: "book-open",
    title: "Capacitação da sua equipe",
    description:
      "Formação técnica e comercial pela Universidade Invent, para que o seu time implante e sustente com autonomia.",
  },
  {
    icon: "users",
    title: "Apoio na pré-venda",
    description:
      "Nossos especialistas entram junto na conversa técnica com o seu cliente quando o cenário exige.",
  },
  {
    icon: "shield",
    title: "Suporte de segundo nível",
    description:
      "Chamados que fogem do escopo do canal sobem para o time que escreveu o produto.",
  },
];

const steps = [
  {
    title: "Conversa inicial",
    description:
      "Entendemos o seu portfólio atual, a sua base instalada e onde as soluções Invent se encaixam.",
  },
  {
    title: "Habilitação",
    description:
      "Capacitação técnica e comercial, com acesso a ambiente de demonstração e material de apoio.",
  },
  {
    title: "Primeiro projeto",
    description:
      "Acompanhamos a primeira implantação de perto, para que o seu time ganhe confiança com rede.",
  },
  {
    title: "Operação autônoma",
    description:
      "Seu canal passa a vender, implantar e sustentar, com o nosso segundo nível como retaguarda.",
  },
];

export default function ParceirosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Parceiros", path: "/parceiros" }])}
      />

      <PageHero
        eyebrow="Programa de parceiros"
        title="O add-on que faz o seu projeto SAP fechar."
        description="Mais de 140 canais de revenda e 26 parceiros SAP já usam as soluções Invent para completar o escopo dos seus projetos de SAP Business One no Brasil."
        breadcrumb={[{ label: "Parceiros", href: "/parceiros" }]}
      />

      <Section spacing="tight">
        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={0.06 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v-gradient text-white">
                  <Icon name={benefit.icon} size={20} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Como funciona</Eyebrow>
            <SectionTitle>Da conversa ao primeiro projeto.</SectionTitle>
            <Lead className="mt-6">
              O processo é o mesmo para integrador grande e pequeno — o que muda
              é o ritmo.
            </Lead>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.06 * i}>
              <li className="h-full rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm">
                <span className="font-mono text-xs font-medium tracking-wider text-red-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <ContactBand
        title="Quero ser um canal Invent"
        description="Conte sobre a sua operação SAP e conversamos sobre como as nossas soluções entram no seu portfólio."
        primaryLabel="Falar com o time de canais"
        secondaryLabel="Conhecer as soluções"
        secondaryHref="/solucoes"
      />
    </>
  );
}
