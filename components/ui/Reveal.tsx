"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Entrada por scroll.
 *
 * Dois cuidados que não são opcionais num site institucional:
 *
 * 1. `useReducedMotion` desliga o deslocamento para quem configurou o sistema
 *    para menos movimento — o conteúdo aparece, sem viagem.
 * 2. O estado inicial `opacity: 0` é um estilo inline. Sem JavaScript ele nunca
 *    é revertido e a página inteira fica em branco. A regra `noscript` em
 *    `globals.css` força a visibilidade nesse cenário.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("reveal", className)}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0.2 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
