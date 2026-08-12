import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(247,166,0,0.12),transparent_66%)] blur-3xl" />
      </div>

      <Container className="relative text-center">
        <p className="font-mono text-sm tracking-widest text-gold-500">404</p>
        <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
          Esta página não existe.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60">
          O endereço pode ter mudado, ou o link que te trouxe até aqui está
          desatualizado.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg">
            Voltar para o início
            <Icon name="arrow-right" size={17} />
          </ButtonLink>
          <ButtonLink href="/solucoes" variant="outline" size="lg">
            Ver as soluções
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
