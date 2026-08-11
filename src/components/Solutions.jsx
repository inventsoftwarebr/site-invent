import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const solutions = [
  {
    name: 'TaxPlus',
    tag: 'Fiscal',
    color: '#6C4FE0',
    desc: 'Automatize a apuração de impostos e obrigações acessórias integradas ao SAP® Business One.',
    href: 'https://inventsoftware.com.br/taxplus',
    featured: true,
  },
  {
    name: 'BankPlus',
    tag: 'Financeiro',
    color: '#FFD055',
    desc: 'Conciliação bancária, cobranças e pagamentos com segurança e alta performance.',
    href: 'https://inventsoftware.com.br/bankplus',
  },
  {
    name: 'ContractPlus',
    tag: 'Contratos',
    color: '#E41216',
    desc: 'Gestão do ciclo de vida dos seus contratos com faturamento recorrente.',
    href: 'https://inventsoftware.com.br/contractplus',
  },
  {
    name: 'Intercompany',
    tag: 'Consolidação',
    color: '#FB9D27',
    desc: 'Transações intercompany dentro do SAP® Business One sem lançamentos manuais.',
    href: 'https://inventsoftware.com.br/intercompany',
  },
  {
    name: 'Rhello',
    tag: 'RH & Folha',
    color: '#00C9A7',
    desc: 'Folha de pagamento automatizada com integrações inteligentes ao seu ERP.',
    href: 'https://rhello.com.br/site/',
  },
]

export default function Solutions() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="solutions-section" id="solutions" ref={ref}>
      <div className="container">
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Soluções</div>
          <h2 className="heading-lg">
            Soluções que transformam a gestão do seu negócio
          </h2>
          <p className="text-muted" style={{ marginTop: '1.5rem' }}>
            Automatize processos fiscais, financeiros, contratuais e de RH
            em um único ecossistema integrado ao SAP® Business One.
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`solution-card ${s.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Color orb */}
              <div className="card-orb" style={{ background: `radial-gradient(circle, ${s.color} 0%, transparent 70%)` }} />

              <div className="solution-card-content">
                <span className="tag" style={{ color: s.color }}>{s.tag}</span>
                <h3 className="name">{s.name}</h3>
                <p className="desc">{s.desc}</p>
                <span className="card-link" style={{ color: s.color }}>
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
