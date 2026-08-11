import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const numbers = [
  { value: 14, suffix: '', prefix: '', label: 'Anos de mercado' },
  { value: 200, suffix: '', prefix: '', label: 'Colaboradores' },
  { value: 24, suffix: 'k', prefix: '', label: 'CNPJs gerenciados' },
  { value: 26, suffix: '', prefix: '', label: 'Parceiros SAP®' },
  { value: 140, suffix: '', prefix: '', label: 'Canais de revenda' },
]

function Counter({ end, duration = 2200 }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    const start = performance.now()
    function tick(now) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * end))
      if (p < 1) frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [end, duration])

  return <>{count}</>
}

export default function Numbers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="numbers-section" ref={ref}>
      <div className="container">
        <div className="numbers-row">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="number-val">
                {inView ? <Counter end={n.value} /> : '0'}
                {n.suffix}
                <span className="plus">+</span>
              </div>
              <div className="number-lbl">{n.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
