import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconFileText, IconClipboardList, IconAlertCircle, IconTruck, IconChart, 
  IconShuffle, IconZap, IconSettings, IconShield, IconMonitor, IconBuilding, IconBook
} from './Icons'

// Cores fieis da mandala enviada
const cDark = '#210C61' // Roxo escuro
const cMid = '#3A1391' // Roxo médio
const cLight = '#6031D8' // Roxo claro (acento)
const cYellow = '#F0B12F'

// Helper Matemático para arcos de anel
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

// Helper para desenhar a Path String de um slice (fatia do donut)
const describeDonutSlice = (x, y, innerRadius, outerRadius, startAngle, endAngle) => {
  const startOuter = polarToCartesian(x, y, outerRadius, endAngle)
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle)
  const startInner = polarToCartesian(x, y, innerRadius, endAngle)
  const endInner = polarToCartesian(x, y, innerRadius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ")
}

// Text Path Arc (desenha uma linha invisível pelo centro do arco pra alinhar texto)
const describeTextArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, startAngle)
  const end = polarToCartesian(x, y, radius, endAngle)
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, 0, 1, end.x, end.y
  ].join(" ")
}

// Text Path Arc Reverso (escreve da dir pra esq nas metades inferiores pra não ficar de ponta cabeça)
const describeTextArcReverse = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, startAngle)
  const end = polarToCartesian(x, y, radius, endAngle)
  return [
    "M", end.x, end.y,
    "A", radius, radius, 0, 0, 0, start.x, start.y
  ].join(" ")
}

// Configuração matemática das 4 regiões da roda: Inbound, Compliance, Obrigs, Simulador
const segments = [
  { id: 'inbound', title: 'INBOUND E OUTBOUND', startA: -87, endA: 38, innerC: cMid, outerC: cDark, textR: false },
  { id: 'compliance', title: 'COMPLIANCE', startA: 42, endA: 100, innerC: cMid, outerC: cDark, textR: false },
  { id: 'obrigs', title: 'OBRIGAÇÕES ACESSÓRIAS', startA: 104, endA: 220, innerC: cMid, outerC: cDark, textR: true },
  { id: 'simulador', title: 'SIMULADOR DA REFORMA', startA: 224, endA: 269, innerC: cMid, outerC: cDark, textR: true }
]

const nodes = [
  // INBOUND E OUTBOUND ( -87 to 38 )
  { id: 'ic1', group: 'Inbound e Outbound', label: 'CT-e OS', icon: IconTruck, angle: -80, desc: 'Gestão de transporte e serviços de fretamento.' },
  { id: 'ic2', group: 'Inbound e Outbound', label: 'GNRE', icon: IconZap, angle: -63, desc: 'Guias de recolhimento estaduais geradas em lote.' },
  { id: 'ic3', group: 'Inbound e Outbound', label: 'CT-e', icon: IconTruck, angle: -46, desc: 'Emissão ágil do conhecimento eletrônico.' },
  { id: 'ic4', group: 'Inbound e Outbound', label: 'NFCom', icon: IconMonitor, angle: -28, desc: 'Notas fiscais para operadoras de telecomunicação.' },
  { id: 'ic5', group: 'Inbound e Outbound', label: 'MDF-e', icon: IconFileText, angle: -12, desc: 'Manifesto de documentos fiscais gerado facilmente.' },
  { id: 'ic6', group: 'Inbound e Outbound', label: 'NFC-e', icon: IconClipboardList, angle: 4, desc: 'Emissão e gestão de cupons fiscais ao consumidor.' },
  { id: 'ic7', group: 'Inbound e Outbound', label: 'NFS-e', icon: IconBuilding, angle: 20, desc: 'Notas de serviço integradas a prefeituras no país.' },
  { id: 'ic8', group: 'Inbound e Outbound', label: 'NF-e', icon: IconFileText, angle: 36, desc: 'Emissão rápida e robusta de notas fiscais eletrônicas.' },
  
  // COMPLIANCE ( 42 to 100 )
  { id: 'cp1', group: 'Compliance', label: 'DF-e', icon: IconShuffle, angle: 52, desc: 'Baixa XMLs direto da SEFAZ.' },
  { id: 'cp2', group: 'Compliance', label: 'Controles\ncontábeis', icon: IconSettings, angle: 66, desc: 'Parametrize e controle obrigações na matriz SAP.' },
  { id: 'cp3', group: 'Compliance', label: 'Motor de\ncálculo', icon: IconZap, angle: 80, desc: 'Recupera taxa e valor com precisão das leis em vigor.' },
  { id: 'cp4', group: 'Compliance', label: 'Validador', icon: IconShield, angle: 94, desc: 'Garante a coerência antes da transmissão.' },

  // OBRIGAÇÕES ( 104 to 220 )
  { id: 'ob1', group: 'Obrigações Acessórias', label: 'Gestão rotinas', icon: IconClipboardList, angle: 109, desc: 'Otimização nas entregas mensais sem atrasos.' },
  { id: 'ob2', group: 'Obrigações Acessórias', label: 'SPED\nFiscal', icon: IconBook, angle: 124, desc: 'Geração automática validada no PVA.' },
  { id: 'ob3', group: 'Obrigações Acessórias', label: 'SPED\nContábil', icon: IconBook, angle: 139, desc: 'Escrituração pronta para importação e envio.' },
  { id: 'ob4', group: 'Obrigações Acessórias', label: 'SPED\nContrib.', icon: IconBook, angle: 154, desc: 'Apuração e registros baseados no faturamento.' },
  { id: 'ob5', group: 'Obrigações Acessórias', label: 'Reinf', icon: IconShuffle, angle: 169, desc: 'Integração transparente com EFD-Reinf e e-Social.' },
  { id: 'ob6', group: 'Obrigações Acessórias', label: 'Livros\nfiscais', icon: IconBook, angle: 184, desc: 'Conferências de entradas e saídas de notas.' },
  { id: 'ob7', group: 'Obrigações Acessórias', label: 'LCDPR', icon: IconFileText, angle: 199, desc: 'Livro caixa digital para agronegócios.' },
  { id: 'ob8', group: 'Obrigações Acessórias', label: 'FCI', icon: IconAlertCircle, angle: 216, desc: 'Controle contínuo em processos de industrialização.' },

  // SIMULADOR ( 224 to 269 )
  { id: 'sm1', group: 'Simulador da Reforma', label: 'DECRED', icon: IconChart, angle: 232, desc: 'Declarações de operações com cartão de crédito.' },
  { id: 'sm2', group: 'Simulador da Reforma', label: 'Cenários', icon: IconChart, angle: 247, desc: 'Estudo do impacto tributário pós reforma.' },
  { id: 'sm3', group: 'Simulador da Reforma', label: 'Simulação', icon: IconSettings, angle: 262, desc: 'Cálculos de cenários complexos no checkout.' },
]

export default function MandalaTax() {
  const [hovered, setHovered] = useState(null)
  const [clicked, setClicked] = useState(null)
  const active = hovered || clicked

  return (
    <div className="mandala-layout">
      {/* ── METADE: VISUAL (MANDALA Desktop/Tablet) ── */}
      <div className="mandala-visual-half">
        <div className="mandala-container">
          <svg className="mandala-svg-layer" viewBox="0 0 1000 1000">
            <defs>
              {segments.map((seg) => (
                <path key={`tp-${seg.id}`} id={`path-${seg.id}`} d={seg.textR ? describeTextArcReverse(500, 500, 465, seg.startA, seg.endA) : describeTextArc(500, 500, 465, seg.startA, seg.endA)} />
              ))}
            </defs>

            {/* Anel Externo Com Textos */}
            {segments.map(seg => (
              <g key={`outer-${seg.id}`}>
                <path d={describeDonutSlice(500, 500, 440, 490, seg.startA, seg.endA)} fill={seg.outerC} />
                <text fill="#ffffff" fontSize="23" fontWeight="bold" letterSpacing="2" textAnchor="middle">
                  <textPath href={`#path-${seg.id}`} startOffset="50%">{seg.title}</textPath>
                </text>
              </g>
            ))}

            {/* Anel Interno */}
            {segments.map(seg => (
              <path key={`inner-${seg.id}`} d={describeDonutSlice(500, 500, 180, 270, seg.startA, seg.endA)} fill={seg.innerC} />
            ))}

            {/* Fundo Central Branco */}
            <circle cx="500" cy="500" r="175" fill="#ffffff" />
          </svg>
          
          <div className="mandala-center-logo">
            <span className="tax-text">Tax</span><span className="plus-text">PLUS</span>
          </div>

          {/* HTML OVERLAYS - PERFECTLY CIRCULAR R=35.5% */}
          {nodes.map((item) => {
            const radian = (item.angle - 90) * (Math.PI / 180)
            const rPercent = 35.5
            const left = 50 + (rPercent * Math.cos(radian))
            const top = 50 + (rPercent * Math.sin(radian))
            
            const isHovered = hovered?.id === item.id
            const isSelected = clicked?.id === item.id
            const isActive = isHovered || isSelected

            return (
              <div 
                key={item.id}
                className={`mandala-node ${isActive ? 'active' : ''}`}
                style={{ left: `${left}%`, top: `${top}%` }}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setClicked(prev => prev?.id === item.id ? null : item)}
              >
                <div className="mandala-icon-wrap">
                  <item.icon size={22} />
                </div>
                <span className="mandala-label">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── METADE: TEXTOS / EXPLICAÇÕES (Desktop/Mobile) ── */}
      <div className="mandala-text-half">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div key={active.id} className="mandala-info-card"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              <div className="md-info-icon"><active.icon size={44} /></div>
              <span className="md-group">{active.group}</span>
              <h3 className="md-title">{active.label.replace('\n', ' ')}</h3>
              <p className="md-desc">{active.desc}</p>
              {clicked?.id === active.id && <span className="md-pinned">Fixado na tela</span>}
            </motion.div>
          ) : (
            <motion.div key="empty" className="mandala-info-empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3>Explore nossa solução</h3>
              <p>Passe o mouse ou clique em qualquer funcionalidade da mandala para ver os detalhes técnicos.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
