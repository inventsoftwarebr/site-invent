import Link from "next/link";
import { InventLogo } from "@/components/brand/InventLogo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { company } from "@/content/company";
import { footerNav } from "@/content/nav";
import { solutions } from "@/content/solutions";

const socials = [
  { label: "LinkedIn", href: company.social.linkedin },
  { label: "Instagram", href: company.social.instagram },
  { label: "YouTube", href: company.social.youtube },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h2 className="font-display text-xs font-bold tracking-[0.16em] text-white/40 uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-gold-500"
              >
                {link.label}
                <Icon name="arrow-up-right" size={13} />
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-white/65 transition-colors hover:text-gold-500"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-carbon pt-20 pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <InventLogo variant="dark-bg" width={128} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              {company.shortDescription}
            </p>

            <div className="mt-7 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-flex items-center gap-2.5 text-white/65 transition-colors hover:text-gold-500"
              >
                <Icon name="mail" size={15} />
                {company.contact.email}
              </a>
              <a
                href={`tel:${company.contact.phoneHref}`}
                className="inline-flex items-center gap-2.5 text-white/65 transition-colors hover:text-gold-500"
              >
                <Icon name="phone" size={15} />
                {company.contact.phone}
              </a>
              {company.locations.map((loc) => (
                <span
                  key={loc.label}
                  className="inline-flex items-center gap-2.5 text-white/65"
                >
                  <Icon name="map-pin" size={15} />
                  {loc.label}
                  <span className="text-white/35">· {loc.role}</span>
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Soluções" links={footerNav.solucoes} />
          <FooterColumn title="Empresa" links={footerNav.empresa} />
          <FooterColumn title="Recursos" links={footerNav.recursos} />
        </div>

        {/* Faixa de produtos com as cores oficiais de cada marca. */}
        <div
          aria-hidden
          className="mt-16 flex h-1 overflow-hidden rounded-full"
        >
          {solutions.map((s) => (
            <span key={s.slug} className={`flex-1 ${s.colorClass}`} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="text-xs text-white/45">
            <p>
              © {year} {company.legalName}. Todos os direitos reservados.
            </p>
            <p className="mt-1.5">
              CNPJ {company.cnpj} · SAP® e SAP Business One® são marcas
              registradas da SAP SE.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 items-center justify-center rounded-full border border-white/12 px-4 text-xs font-medium text-white/60 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
