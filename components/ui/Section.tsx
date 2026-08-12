import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  className,
  children,
  light = false,
  wide = false,
  spacing = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Inverte para a paleta clara (tokens semânticos trocam via `.section-light`). */
  light?: boolean;
  wide?: boolean;
  spacing?: "default" | "tight" | "loose" | "none";
}) {
  const spacingClass = {
    none: "",
    tight: "py-12 md:py-16",
    default: "py-20 md:py-28",
    loose: "py-24 md:py-36",
  }[spacing];

  return (
    <section
      id={id}
      className={cn(
        "relative",
        light && "section-light",
        spacingClass,
        className,
      )}
    >
      <Container wide={wide}>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-gold-500" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-3xl leading-[1.08] font-extrabold tracking-[-0.03em] md:text-5xl",
        className,
      )}
      style={{ color: "var(--fg)" }}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("text-lg leading-relaxed md:text-xl", className)}
      style={{ color: "var(--fg-secondary)" }}
    >
      {children}
    </p>
  );
}
