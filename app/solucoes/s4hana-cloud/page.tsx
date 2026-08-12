import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Soluções Invent para SAP S/4HANA Cloud Public Edition",
  description:
    "A localização brasileira que o S/4HANA Cloud Public Edition precisa. TaxPlus NFS-e Cloud e a expansão do portfólio Invent para a nuvem pública da SAP.",
  path: "/solucoes/s4hana-cloud",
});

const highlights: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "zap",
    title: "Nativo em nuvem",
    description:
      "Entregue como serviço, sem add-on instalado em servidor e sem janela de atualização para gerenciar.",
  },
  {
    icon: "file-text",
    title: "NFS-e Cloud",
    description:
      "Emissão de nota fiscal de serviço com armazenamento centralizado de todas as NFS-e em um único lugar.",
  },
  {
    icon: "shield",
    title: "Conformidade acompanhada",
    description:
      "A mesma equipe fiscal que mantém o portfólio SAP Business One há quinze anos cuida da versão cloud.",
  },
  {
    icon: "trending-up",
    title: "Portfólio em expansão",
    description:
      "A jornada começou pelo fiscal e segue avançando para as demais áreas do portfólio Invent.",
  },
];

export default function S4HanaCloudPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Soluções", path: "/solucoes" },
          { name: "SAP S/4HANA Cloud", path: "/solucoes/s4hana-cloud" },
        ])}
      />

      <PageHero
        eyebrow="SAP S/4HANA Cloud"
        title="A localização brasileira também na nuvem pública da SAP."
        description="Desde 2024 o portfólio Invent foi estendido para o SAP S/4HANA Cloud Public Edition, começando pelo TaxPlus NFS-e Cloud. A mesma competência fiscal, agora sem servidor para administrar."
        breadcrumb={[
          { label: "Soluções", href: "/solucoes" },
          { label: "S/4HANA Cloud", href: "/solucoes/s4hana-cloud" },
        ]}
      />

      <Section spacing="tight">
        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v-gradient text-white">
                  <Icon name={item.icon} size={20} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Migração</Eyebrow>
            <SectionTitle>
              Já roda SAP Business One e avalia migrar para o S/4HANA Cloud?
            </SectionTitle>
            <Lead className="mt-6">
              A pergunta que trava a maioria dos projetos não é técnica, é
              fiscal: o que acontece com a apuração e com os documentos
              eletrônicos na nuvem pública. É exatamente a conversa que sabemos
              ter.
            </Lead>
          </Reveal>
        </div>
      </Section>

      <ContactBand
        title="Vamos avaliar o seu cenário de nuvem"
        description="Conte em que ponto está o seu projeto de S/4HANA Cloud e mostramos o que já está coberto pelo portfólio Invent."
        secondaryLabel="Ver todas as soluções"
        secondaryHref="/solucoes"
      />
    </>
  );
}
