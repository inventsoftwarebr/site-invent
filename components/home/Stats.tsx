"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/company";

function Counter({ to, active }: { to: number; active: boolean }) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Com movimento reduzido não há animação: o valor final é derivado abaixo.
    if (!active || reduced) return;

    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== undefined) cancelAnimationFrame(frame.current);
    };
  }, [active, to, reduced]);

  const display = !active ? 0 : reduced ? to : value;

  return <>{display}</>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing="tight">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-x-6 gap-y-12 border-y border-white/10 py-14 md:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              <Counter to={stat.value} active={inView} />
              {stat.suffix}
              {stat.plus && <span className="text-gold-500">+</span>}
            </p>
            <p className="mt-2.5 font-display text-sm font-bold text-white/85">
              {stat.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/45">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
