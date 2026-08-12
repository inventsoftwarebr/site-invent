import { Section, Eyebrow, SectionTitle, Lead } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "target",
    title: "Diagnóstico antes da venda",
    description:
      "Mapeamos a sua operação e mostramos onde estão os gargalos fiscais, financeiros e contratuais — mesmo quando a resposta não é comprar tudo.",
  },
  {
    icon: "rocket",
    title: "Implantação sem parar a operação",
    description:
      "Instalação e configuração integradas ao SAP Business One, com plano de virada e ambiente de homologação antes do go-live.",
  },
  {
    icon: "file-text",
    title: "Legislação acompanhada por nós",
    description:
      "Uma equipe dedicada lê a norma, interpreta e entrega a atualização. Você não precisa manter especialista fiscal para manter o sistema em dia.",
  },
  {
    icon: "users",
    title: "Suporte que conhece SAP",
    description:
      "Atendimento por quem opera SAP Business One todos os dias — sem repassar chamado para três níveis até alguém entender a pergunta.",
  },
  {
    icon: "shield",
    title: "Conformidade como padrão",
    description:
      "Soluções aderentes à legislação vigente, com trilha de auditoria e rastreabilidade em cada operação.",
  },
  {
    icon: "book-open",
    title: "Time do cliente capacitado",
    description:
      "A Universidade Invent forma os usuários nas nossas soluções, para que o conhecimento não fique concentrado em uma pessoa só.",
  },
];

export function WhyInvent() {
  return (
    <Section id="por-que">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>Por que a Invent</Eyebrow>
          <SectionTitle>
            Software é metade do trabalho. A outra metade é quem está atrás dele.
          </SectionTitle>
          <Lead className="mt-6">
            Um add-on fiscal só vale o que vale o time que o mantém quando a
            legislação muda numa sexta-feira à noite.
          </Lead>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={0.05 * i}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/20">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v-gradient text-white">
                <Icon name={reason.icon} size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {reason.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
