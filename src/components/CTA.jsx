import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="cta-section" id="contact" ref={ref}>
      <div className="cta-dots" />
      <div className="cta-lines" />

      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Tem um projeto?</div>
          <h2 className="heading-xl">
            Vamos<br />conversar.
          </h2>
          <p className="text-muted">
            Converse com nossos especialistas e descubra como podemos
            transformar a eficiência da sua operação.
          </p>
          <div className="cta-actions">
            <a href="https://inventsoftware.com.br" className="btn btn-pill" target="_blank" rel="noopener noreferrer">
              Fale com a Invent
            </a>
            <a href="#solutions" className="btn btn-pill-outline">
              Ver soluções
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
