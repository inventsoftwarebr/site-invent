import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  IconTarget, IconRocket, IconTrendingUp, IconAward, IconZap, IconShield,
} from './Icons'

const cards = [
  {
    Icon: IconTarget,
    title: 'Diagnóstico especializado',
    desc: 'Analisamos a sua operação e identificamos gargalos nos processos fiscais, financeiros, contratuais e de RH.',
  },
  {
    Icon: IconRocket,
    title: 'Implementação ágil',
    desc: 'Instalamos e configuramos nossas soluções integradas ao SAP® Business One sem parar a sua operação.',
  },
  {
    Icon: IconTrendingUp,
    title: 'Performance contínua',
    desc: 'Acompanhamos resultados e otimizamos continuamente. Suporte dedicado e atualizações constantes.',
  },
  {
    Icon: IconAward,
    title: 'Expertise reconhecida',
    desc: 'Tricampeã SAP Partner of the Year, com +14 anos de experiência e +200 profissionais dedicados.',
  },
  {
    Icon: IconZap,
    title: 'Alta disponibilidade',
    desc: 'Infraestrutura robusta com uptime garantido e suporte técnico especializado para sua operação.',
  },
  {
    Icon: IconShield,
    title: 'Segurança e compliance',
    desc: 'Todas as soluções em conformidade com legislação vigente, garantindo tranquilidade para o seu negócio.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="why-section" id="how" ref={ref}>
      <div className="sap-dots" />
      <div className="container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Por que a Invent?</div>
          <h2 className="heading-lg" style={{ color: 'var(--black)' }}>
            Sabemos o caminho para<br />evoluir o seu negócio
          </h2>
          <p className="text-muted">
            Da análise à performance, cuidamos de tudo para que você foque no crescimento.
          </p>
        </motion.div>

        <div className="why-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="why-icon">
                <c.Icon size={22} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
