import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckIcon, IconAward } from './Icons'

const features = ['Inovação', 'Qualidade', 'Vendas', 'Atendimento', 'Suporte', 'Agilidade']

export default function SapAward() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="sap-section" id="about" ref={ref}>
      <div className="sap-dots" />
      <div className="container">
        <div className="sap-grid">
          <motion.div
            className="sap-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sap-image-wrap">
              <img
                src="https://inventsoftware.com.br/wp-content/uploads/2024/08/SAP-Invent-Software.webp"
                alt="SAP Partner of the Year"
                loading="lazy"
              />
            </div>
            <div className="sap-badge-float">
              <div className="sap-badge-icon"><IconAward size={22} /></div>
              <div>
              <div className="sap-badge-text">3× Partner of the Year</div>
                <div className="sap-badge-sub">Melhor ISV da América Latina</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="sap-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Reconhecimento</div>
            <h2 className="heading-lg" style={{ color: 'var(--black)' }}>
              Tricampeã <em>Partner Of The Year</em> da SAP®
            </h2>
            <p className="text-muted" style={{ marginTop: '1.25rem' }}>
              Reconhecidas como as melhores soluções da América Latina em
              inovação, qualidade, atendimento e agilidade na evolução dos
              produtos.
            </p>

            <div className="sap-chips">
              {features.map((f) => (
                <div key={f} className="chip">
                  <CheckIcon />
                  {f}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a href="#contact" className="btn btn-pill">
                Solicite uma demonstração
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
