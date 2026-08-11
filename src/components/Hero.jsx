import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="hero" id="hero">
      {/* Background Video */}
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg-video"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-dots" />
      <div className="hero-orb" />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-tag"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="dot" />
            Tricampeã SAP Partner of the Year
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="visible"
          >
            <span className="line">Soluções</span>
            <span className="line accent">complementares</span>
            <span className="line muted">ao seu ERP.</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            Construímos e evoluímos soluções integradas ao SAP® Business One,
            garantindo eficiência fiscal, financeira, contratual e de RH
            para o seu negócio.
          </motion.p>

          <motion.div
            className="hero-ctas"
            variants={fadeUp(0.45)}
            initial="hidden"
            animate="visible"
          >
            <a href="#contact" className="btn btn-pill">
              Solicite uma demonstração
            </a>
            <button onClick={() => setIsVideoOpen(true)} className="btn btn-pill-outline btn-play">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
              Vídeo Institucional
            </button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close" 
                onClick={() => setIsVideoOpen(false)}
              >
                &times;
              </button>
              <div className="video-responsive">
                <iframe 
                  src="https://www.youtube.com/embed/JJ5FJxUsR48?autoplay=1" 
                  title="Vídeo Institucional Invent" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
