import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  InventVMark, ChevronDown, ArrowRight,
  IconChart, IconBank, IconFileText, IconShuffle, IconUsers,
  IconTrophy, IconGrid, IconZap,
} from './Icons'

/* ── Data ──────────────────────────────────────────────────── */
const products = [
  {
    key: 'tax', name: 'TaxPlus', color: '#6C4FE0', tag: 'Fiscal',
    desc: 'Automatize a apuração de impostos e obrigações acessórias integradas ao SAP® Business One.',
    href: '/taxplus',
    Icon: IconChart,
  },
  {
    key: 'bank', name: 'BankPlus', color: '#FFD055', tag: 'Financeiro',
    desc: 'Conciliação bancária, cobranças e pagamentos com segurança e alta performance.',
    href: 'https://inventsoftware.com.br/bankplus',
    Icon: IconBank,
  },
  {
    key: 'contract', name: 'ContractPlus', color: '#E41216', tag: 'Contratos',
    desc: 'Gerencie o ciclo de vida dos seus contratos com faturamento recorrente e alertas automáticos.',
    href: 'https://inventsoftware.com.br/contractplus',
    Icon: IconFileText,
  },
  {
    key: 'ic', name: 'Intercompany', color: '#FB9D27', tag: 'Consolidação',
    desc: 'Gerencie transações entre empresas do grupo dentro do SAP® de forma automatizada.',
    href: 'https://inventsoftware.com.br/intercompany',
    Icon: IconShuffle,
  },
  {
    key: 'rhello', name: 'Rhello', color: '#00C9A7', tag: 'RH & Folha',
    desc: 'Plataforma completa de folha de pagamento com cálculos automáticos e integrações inteligentes.',
    href: 'https://rhello.com.br/site/',
    Icon: IconUsers,
  },
]

const quickLinks = [
  { label: 'SAP Partner of the Year', href: '#about', Icon: IconTrophy },
  { label: 'Segmentos atendidos', href: '#segments', Icon: IconGrid },
  { label: 'Por que a Invent?', href: '#how', Icon: IconZap },
]

/* ── Animations ────────────────────────────────────────────── */
const megaMenuVariants = {
  hidden: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
}

const previewVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const closeTimer = useRef(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') { setMegaOpen(false); setMenuOpen(false) }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  /* ── Hover handlers: keep menu open while cursor is on trigger OR menu ── */
  const openMega = useCallback(() => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }, [])

  const scheduleMegaClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false)
      setActiveProduct(null)
    }, 300)
  }, [])

  const closeMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(false)
    setActiveProduct(null)
  }

  const closeAll = () => {
    setMenuOpen(false); closeMega(); setMobileExpanded(false)
  }

  const currentPreview = activeProduct ? products.find(p => p.key === activeProduct) : null

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${megaOpen ? 'mega-active' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Invent Software" onClick={closeAll}>
          in<span className="logo-v"><InventVMark /></span>ent
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="nav-links">
          {/* Trigger + mega menu share the same hover zone */}
          <div
            className="nav-mega-zone"
            onMouseEnter={openMega}
            onMouseLeave={scheduleMegaClose}
          >
            <button
              className={`nav-trigger ${megaOpen ? 'active' : ''}`}
              onClick={() => setMegaOpen(o => !o)}
              aria-expanded={megaOpen}
            >
              Soluções <ChevronDown />
            </button>

            {/* ═══ MEGA MENU ═══ */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  className="mega-menu"
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="mega-inner">
                    {/* Left: Products */}
                    <motion.div className="mega-products" variants={stagger} initial="hidden" animate="visible">
                      <div className="mega-section-label">Nossas soluções</div>
                      {products.map((p) => {
                        const isInternal = p.href.startsWith('/')
                        const LinkTag = isInternal ? Link : 'a'
                        
                        return (
                          <motion.div
                            key={p.key}
                            variants={itemVariant}
                            onMouseEnter={() => setActiveProduct(p.key)}
                            onClick={closeMega}
                          >
                            <LinkTag
                              to={isInternal ? p.href : undefined}
                              href={!isInternal ? p.href : undefined}
                              target={!isInternal ? "_blank" : undefined}
                              rel={!isInternal ? "noopener noreferrer" : undefined}
                              className={`mega-product-item ${activeProduct === p.key ? 'active' : ''}`}
                            >
                              <span className="mega-product-dot" style={{ background: p.color }} />
                              <div className="mega-product-info">
                                <div className="mega-product-name">{p.name}</div>
                                <div className="mega-product-tag">{p.tag}</div>
                              </div>
                              <span className="mega-product-arrow"><ArrowRight size={12} /></span>
                            </LinkTag>
                          </motion.div>
                        )
                      })}
                    </motion.div>

                    {/* Center: Preview */}
                    <div className="mega-preview">
                      <AnimatePresence mode="wait">
                        {currentPreview ? (
                          <motion.div
                            key={currentPreview.key}
                            className="mega-preview-card"
                            variants={previewVariant}
                            initial="hidden" animate="visible" exit="hidden"
                          >
                            <div className="mega-preview-orb" style={{ background: `radial-gradient(circle, ${currentPreview.color} 0%, transparent 70%)` }} />
                            <span className="mega-preview-icon" style={{ color: currentPreview.color }}>
                              <currentPreview.Icon size={36} />
                            </span>
                            <h3 className="mega-preview-title">{currentPreview.name}</h3>
                            <p className="mega-preview-desc">{currentPreview.desc}</p>
                            <span className="mega-preview-link" style={{ color: currentPreview.color }}>
                              Saiba mais <ArrowRight size={13} />
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            className="mega-preview-default"
                            variants={previewVariant}
                            initial="hidden" animate="visible" exit="hidden"
                          >
                            <div className="mega-preview-icon-default"><InventVMark variant="light" /></div>
                            <p className="mega-preview-hint">Passe o mouse sobre uma solução para ver mais detalhes</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right: Quick links */}
                    <motion.div className="mega-quick" variants={stagger} initial="hidden" animate="visible">
                      <div className="mega-section-label">Navegação rápida</div>
                      {quickLinks.map((l) => (
                        <motion.a
                          key={l.label}
                          href={l.href}
                          className="mega-quick-link"
                          variants={itemVariant}
                          onClick={closeMega}
                        >
                          <span className="mega-quick-icon"><l.Icon size={18} /></span>
                          <span>{l.label}</span>
                        </motion.a>
                      ))}
                      <div className="mega-quick-cta">
                        <div className="mega-section-label" style={{ marginTop: '1.5rem' }}>Pronto para começar?</div>
                        <a href="#contact" className="btn btn-pill mega-cta-btn" onClick={closeMega}>Solicite uma demo</a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" onClick={closeMega}>Sobre nós</a>
          <a href="#segments" onClick={closeMega}>Segmentos</a>
          <a href="#how" onClick={closeMega}>Como funciona</a>
          <a href="#contact" onClick={closeMega}>Contato</a>
        </nav>

        <div className="nav-cta-wrap">
          <a href="#contact" className="btn btn-pill" onClick={closeMega}>Fale com a Invent</a>
        </div>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* ═══ MOBILE MENU ═══ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <button className="mobile-accordion-trigger" onClick={() => setMobileExpanded(!mobileExpanded)}>
              <span>Soluções</span>
              <span className={`mobile-chevron ${mobileExpanded ? 'open' : ''}`}><ChevronDown size={16} /></span>
            </button>
            <AnimatePresence>
              {mobileExpanded && (
                <motion.div className="mobile-solutions" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                  {products.map((p) => (
                    <a key={p.key} href={p.href} target="_blank" rel="noopener noreferrer" className="mobile-product-link" onClick={closeAll}>
                      <span className="mega-product-dot" style={{ background: p.color }} />
                      <div>
                        <div className="mobile-product-name">{p.name}</div>
                        <div className="mobile-product-tag">{p.tag}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <a href="#about" onClick={closeAll}>Sobre nós</a>
            <a href="#segments" onClick={closeAll}>Segmentos</a>
            <a href="#how" onClick={closeAll}>Como funciona</a>
            <a href="#contact" onClick={closeAll}>Contato</a>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <a href="#contact" className="btn btn-pill" style={{ width: '100%', justifyContent: 'center' }} onClick={closeAll}>Fale com a Invent</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div className="mega-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={closeMega} />
        )}
      </AnimatePresence>
    </header>
  )
}
