"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { InventLogoLink } from "@/components/brand/InventLogo";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/content/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar — sem isso o overlay fica preso sobre a nova página.
  // Ajuste durante a renderização (e não em efeito): o React descarta o render
  // em andamento e refaz com o estado novo, sem pintar o menu aberto na tela.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only rounded-full bg-gold-500 px-5 py-2 font-semibold text-carbon focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "border-b border-white/10 bg-carbon/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <Container>
          <div className="flex h-18 items-center justify-between gap-6">
            <InventLogoLink width={116} priority />

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-1 lg:flex"
            >
              {mainNav.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenMenu(item.href)}
                    onMouseLeave={() => hasChildren && setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={hasChildren ? openMenu === item.href : undefined}
                      className={cn(
                        "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-gold-500"
                          : "text-white/70 hover:text-white",
                      )}
                    >
                      {item.label}
                      {hasChildren && (
                        <Icon
                          name="chevron-down"
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            openMenu === item.href && "rotate-180",
                          )}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {hasChildren && openMenu === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: reduced ? 0 : 8 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 w-[340px] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101014] p-2 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.7)]">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group block rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.06]"
                              >
                                <span className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-gold-500">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="mt-1 block text-xs leading-relaxed text-white/50">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ButtonLink href="/contato" variant="primary" size="md">
                Falar com especialista
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="menu-mobile"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="menu-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-carbon lg:hidden"
            >
              <Container>
                <nav
                  aria-label="Navegação principal"
                  className="max-h-[calc(100vh-4.5rem)] overflow-y-auto py-6"
                >
                  {mainNav.map((item) => (
                    <div key={item.href} className="border-b border-white/8 py-3">
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-1.5 font-display text-lg font-bold",
                          isActive(item.href) ? "text-gold-500" : "text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="mt-2 flex flex-col gap-1 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="py-1.5 text-sm text-white/60"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="pt-6">
                    <ButtonLink
                      href="/contato"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Falar com especialista
                    </ButtonLink>
                  </div>
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
