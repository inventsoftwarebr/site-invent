import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo oficial da Invent. Usa os PNGs do manual de marca em `public/brand/` —
 * nunca reconstruir o wordmark com texto e um "V" desenhado à mão.
 */
export function InventLogo({
  variant = "dark-bg",
  className,
  width = 132,
  priority = false,
}: {
  /** `dark-bg` = logo branca (fundo escuro). `light-bg` = logo cinza. */
  variant?: "dark-bg" | "light-bg";
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  const src =
    variant === "dark-bg" ? "/brand/invent-branca.png" : "/brand/invent-cinza.png";

  return (
    <Image
      src={src}
      alt="Invent Software"
      width={width}
      height={Math.round(width * 0.32)}
      className={cn("h-auto w-auto object-contain", className)}
      priority={priority}
      sizes={`${width}px`}
    />
  );
}

export function InventLogoLink({
  variant = "dark-bg",
  className,
  width,
  priority,
}: {
  variant?: "dark-bg" | "light-bg";
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Invent Software — página inicial"
    >
      <InventLogo variant={variant} width={width} priority={priority} />
    </Link>
  );
}

export function VMark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/brand/v-mark.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  );
}
