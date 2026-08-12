import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  accentColor,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumb?: { label: string; href: string }[];
  /** Cor do glow — usada nas páginas de produto. */
  accentColor?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div
          className="absolute -top-40 left-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(ellipse, ${
              accentColor ?? "rgba(247,166,0,1)"
            }26, transparent 66%)`,
          }}
        />
      </div>

      <Container className="relative">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Trilha de navegação" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/45">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-500">
                  Início
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Icon name="chevron-down" size={12} className="-rotate-90" />
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-gold-500"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p
          className={cn(
            "mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase",
          )}
          style={{ color: accentColor ?? "var(--brand)" }}
        >
          <span
            aria-hidden
            className="h-px w-8"
            style={{ backgroundColor: accentColor ?? "var(--brand)" }}
          />
          {eyebrow}
        </p>

        <h1 className="max-w-4xl font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-white">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
          {description}
        </p>

        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
