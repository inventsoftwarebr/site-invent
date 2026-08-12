import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { ContactBand } from "@/components/shared/ContactBand";
import { Section, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { solutions, getSolution } from "@/content/solutions";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMeta,
  softwareJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return pageMeta({
    title: `${solution.name} — ${solution.category} para SAP Business One`,
    description: solution.pitch,
    path: `/solucoes/${solution.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <JsonLd
        data={softwareJsonLd({
          name: solution.name,
          description: solution.pitch,
          path: `/solucoes/${solution.slug}`,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={faqJsonLd([...solution.faq])} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Soluções", path: "/solucoes" },
          { name: solution.name, path: `/solucoes/${solution.slug}` },
        ])}
      />

      <PageHero
        eyebrow={solution.category}
        title={solution.name}
        description={solution.intro}
        accentColor={solution.color}
        breadcrumb={[
          { label: "Soluções", href: "/solucoes" },
          { label: solution.name, href: `/solucoes/${solution.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/contato" size="lg">
            Solicitar demonstração
            <Icon name="arrow-right" size={17} />
          </ButtonLink>
          <div className="flex flex-wrap gap-2">
            {solution.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-white/60"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* O problema — antes de falar de funcionalidade, nomear a dor. */}
      <Section spacing="tight">
        <Reveal>
          <div className="rounded-3xl border-l-2 bg-white/[0.025] p-8 md:p-12"
            style={{ borderLeftColor: solution.color }}
          >
            <Eyebrow className="text-white/40">O problema</Eyebrow>
            <p className="max-w-3xl font-display text-xl leading-relaxed font-medium text-white/90 md:text-2xl">
              {solution.problem}
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="funcionalidades">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>O que o {solution.name} faz</Eyebrow>
            <SectionTitle>
              Funcionalidades que resolvem o dia a dia.
            </SectionTitle>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solution.features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05 * i}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-7">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: solution.color }}
                >
                  <Icon name="check" size={17} strokeWidth={2.6} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light spacing="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Resultado</Eyebrow>
            <SectionTitle>O que muda depois da implantação.</SectionTitle>
            <ul className="mt-8 flex flex-col gap-4">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: solution.color }}
                  >
                    <Icon name="check" size={13} strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-ink">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {solution.faq.length > 0 && (
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-2">
                {solution.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group border-b border-[var(--border)] last:border-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-bold text-ink">
                      {item.question}
                      <Icon
                        name="chevron-down"
                        size={18}
                        className="shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-700">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white/40 uppercase">
            Outras soluções
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/solucoes/${other.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <span
                  aria-hidden
                  className="block h-1.5 w-8 rounded-full"
                  style={{ backgroundColor: other.color }}
                />
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {other.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  {other.category}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <ContactBand
        title={`Quer ver o ${solution.name} rodando no seu SAP?`}
        secondaryLabel="Ver todas as soluções"
        secondaryHref="/solucoes"
      />
    </>
  );
}
