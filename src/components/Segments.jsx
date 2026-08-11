import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  IconMonitor, IconHeart, IconHardHat, IconBuilding, IconCoffee,
  IconHome, IconSettings, IconShoppingCart, IconTruck, IconSprout,
  IconActivity, IconFilm,
} from './Icons'

const segments = [
  { Icon: IconMonitor,      name: 'TI / Telecom' },
  { Icon: IconHeart,        name: 'Hospitalar' },
  { Icon: IconHardHat,      name: 'Construtora' },
  { Icon: IconBuilding,     name: 'Incorporadora' },
  { Icon: IconCoffee,       name: 'Alimentos' },
  { Icon: IconHome,         name: 'Imobiliárias' },
  { Icon: IconSettings,     name: 'Serviço' },
  { Icon: IconShoppingCart,  name: 'Varejo' },
  { Icon: IconTruck,        name: 'Logística' },
  { Icon: IconSprout,       name: 'Agro' },
  { Icon: IconActivity,     name: 'Esporte' },
  { Icon: IconFilm,         name: 'Entretenimento' },
]

export default function Segments() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="segments-section" id="segments" ref={ref}>
      <div className="container">
        <motion.div
          className="segments-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="section-label">Segmentos</div>
            <h2 className="heading-lg">
              Atendemos todos<br />os segmentos
            </h2>
          </div>
          <p className="text-muted">
            Simplifique e automatize processos independente do setor em que você atua.
          </p>
        </motion.div>

        <div className="segments-grid">
          {segments.map((s, i) => (
            <motion.div
              key={s.name}
              className="segment-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <span className="segment-icon">
                <s.Icon size={28} />
              </span>
              <div className="segment-name">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
