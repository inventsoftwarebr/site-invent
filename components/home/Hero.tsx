"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ButtonLink, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { company } from "@/content/company";

const fadeUp = (delay: number, reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0.25 : 0.85,
      delay: reduced ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
});

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Fundo: malha de pontos + dois glows da paleta.
          Puro CSS de propósito — o LCP do site é o H1, não um vídeo de 8 MB. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(247,166,0,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute top-24 -right-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(216,30,45,0.14),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-carbon" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp(0, !!reduced)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-gold-500/[0.07] py-2 pr-5 pl-3 text-xs font-semibold tracking-wide text-gold-300"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-dot" />
            Tricampeã SAP Partner of the Year — América Latina
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1, !!reduced)}
            initial="hidden"
            animate="visible"
            className="mt-8 font-display text-[clamp(2.6rem,7.5vw,5.4rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-white"
          >
            A complexidade fiscal brasileira,
            <br />
            <span className="text-v-gradient">resolvida dentro do seu SAP.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.22, !!reduced)}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl"
          >
            Há 15 anos a Invent constrói as soluções fiscais, bancárias,
            contratuais e de RH que o SAP® Business One não traz de fábrica.
            Você cuida do negócio; a legislação é problema nosso.
          </motion.p>

          <motion.div
            variants={fadeUp(0.34, !!reduced)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/contato" size="lg">
              Solicitar demonstração
              <Icon name="arrow-right" size={17} />
            </ButtonLink>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVideoOpen(true)}
            >
              <Icon name="play" size={15} />
              Vídeo institucional
            </Button>
          </motion.div>
        </div>
      </Container>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Vídeo institucional da Invent Software"
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: reduced ? 1 : 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: reduced ? 1 : 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                <Icon name="close" size={18} />
              </button>
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${company.institutionalVideoId}?autoplay=1&rel=0`}
                  title="Vídeo institucional da Invent Software"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
