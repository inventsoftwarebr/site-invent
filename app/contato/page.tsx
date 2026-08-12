import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/content/company";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Fale com a Invent Software",
  description:
    "Solicite uma demonstração das soluções fiscais, bancárias e contratuais da Invent para SAP Business One e S/4HANA Cloud.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contato", path: "/contato" }])} />

      <PageHero
        eyebrow="Contato"
        title="Conte o seu problema. A gente diz se sabe resolver."
        description="Sem script de vendas. Começamos entendendo o seu processo, e se a resposta não for uma solução nossa, dizemos isso também."
        breadcrumb={[{ label: "Contato", href: "/contato" }]}
      />

      <Section spacing="tight">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
                <h2 className="font-display text-lg font-bold text-white">
                  Canais diretos
                </h2>
                <div className="mt-5 flex flex-col gap-4 text-sm">
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="inline-flex items-center gap-3 text-white/70 transition-colors hover:text-gold-500"
                  >
                    <Icon name="mail" size={16} />
                    {company.contact.email}
                  </a>
                  <a
                    href={`tel:${company.contact.phoneHref}`}
                    className="inline-flex items-center gap-3 text-white/70 transition-colors hover:text-gold-500"
                  >
                    <Icon name="phone" size={16} />
                    {company.contact.phone}
                  </a>
                  {company.locations.map((location) => (
                    <span
                      key={location.label}
                      className="inline-flex items-center gap-3 text-white/70"
                    >
                      <Icon name="map-pin" size={16} />
                      {location.label}
                      <span className="text-white/35">· {location.role}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
                <h2 className="font-display text-lg font-bold text-white">
                  Já é cliente?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Chamados técnicos e dúvidas de uso são atendidos nos nossos
                  canais dedicados — é mais rápido que passar pelo comercial.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={company.externalSystems.support}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
                  >
                    Central de atendimento
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                  <a
                    href={company.externalSystems.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
                  >
                    Documentação técnica
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
