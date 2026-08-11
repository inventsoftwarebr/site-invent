import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import MandalaTax from '../components/MandalaTax'
import { IconFileText, IconClipboardList, IconAlertCircle, IconFileCheck, IconServer, IconTruck } from '../components/Icons'

const completeFeatures = [
  { title: 'TaxPlus', desc: 'Emissão de livros fiscais e obrigações (principais e acessórias)' },
  { title: 'TaxPlus MODELO 21/22', desc: 'Controle de notas fiscais para comunicação e telecomunicação' },
  { title: 'TaxPlus GNRE', desc: 'Geração de guias GNRE a partir de qualquer estado do Brasil' },
  { title: 'TaxPlus NF-e', desc: 'Gestão de notas fiscais eletrônicas automáticas e eficientes' },
  { title: 'TaxPlus NFS-e', desc: 'Gestão de notas fiscais eletrônicas de serviços personalizadas por município' },
  { title: 'TaxPlus MDF-e', desc: 'Gestão de documentos para transporte de bens ou mercadorias' },
  { title: 'TaxPlus Reinf', desc: 'Envio de informações trabalhistas de acordo com e-Social' },
  { title: 'TaxPlus CT-e', desc: 'Emissão e assinatura de toda a documentação relativa à atividade de transporte.' }
]

const fakePosts = [
  { img: 'https://inventsoftware.com.br/wp-content/uploads/2026/02/Design-sem-nome-44.png', tag: 'Conexão Cast', title: 'Ultrapersonalização no varejo, dados e cultura', desc: 'O varejo tem uma tendência de se apaixonar por termos. A cada novo ciclo, surge uma palavra...', date: '31/03/2026' },
  { img: 'https://inventsoftware.com.br/wp-content/uploads/2026/02/Design-sem-nome-43.png', tag: 'Financeiro', title: 'LCDPR em 2026: por que o Livro Caixa Digital se tornou peça-chave', desc: 'Durante anos, o Livro Caixa Digital do Produtor Rural foi tratado como uma obrigação técnica vinculada...', date: '26/03/2026' },
  { img: 'https://inventsoftware.com.br/wp-content/uploads/2026/02/Design-sem-nome-42.png', tag: 'Conexão Cast', title: 'Agent Commerce, cliente sintético e o novo varejo', desc: 'Durante anos, o varejo concentrou seus esforços na jornada do cliente. A discussão girava em torno da integração...', date: '24/03/2026' },
]

export default function TaxPlus() {
  return (
    <>
      <Helmet>
        <title>TaxPlus | Invent Software Fiscal</title>
        <meta name="description" content="Automatize a apuração de impostos e obrigações acessórias integradas nativamente ao SAP Business One." />
      </Helmet>

      {/* Hero Section */}
      <section className="taxplus-hero">
        <div className="container">
          <motion.div className="taxplus-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="taxplus-logo-title">
              <div className="taxplus-logo-big">
                <span className="tax-text">Tax</span><span className="plus-text">PLUS</span>
              </div>
            </div>
            <h1 className="heading-xl"><b>Simplifique</b> burocracias sem sair do <b>SAP</b></h1>
            <p className="hero-desc">
              Através do módulo fiscal TaxPlus, é possível cumprir, consolidar e transmitir
              as obrigações fiscais em âmbito nacional, tudo isso de maneira automatizada e segura, integrado nativamente ao SAP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Mandala Section */}
      <section className="taxplus-mandala-section">
        <div className="container">
          <div className="mandala-header">
            <h2 className="heading-lg">
              Agilizar o <b>cumprimento das obrigações fiscais</b> é possível!
            </h2>
            <p className="text-muted">
              TaxPlus é a solução ideal para simplificar os processos fiscais, aumentar o desempenho das equipes e a escalabilidade da operação.
            </p>
          </div>
          
          <div className="mandala-wrapper">
            <MandalaTax />
          </div>
        </div>
      </section>

      {/* Complete Solution Section */}
      <section className="taxplus-features-section">
        <div className="container">
          <h2 className="heading-md mb-5">
            Nossa <b>solução fiscal é completa</b> para gerar ainda mais valor para os negócios!
          </h2>
          
          <div className="features-grid">
            {completeFeatures.map((f, i) => (
              <motion.div key={i} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="feature-icon"><IconFileText size={24} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="taxplus-blog-section">
        <div className="container">
          <div className="blog-header">
            <h2 className="heading-md" style={{ color: 'var(--black)' }}>
              Fique por dentro dos últimos <b>conteúdos de nosso blog</b>
            </h2>
            <p className="text-muted">Confira as principais novidades do mercado</p>
          </div>

          <div className="blog-grid">
            {fakePosts.map((post, i) => (
              <motion.a href="#" key={i} className="blog-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="blog-img">
                  <span className="blog-badge">{post.tag}</span>
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>Continuar lendo »</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="taxplus-bottom-cta">
        <div className="container align-center">
          <h2 className="heading-md text-white mb-3">Automatize a Gestão Fiscal da sua empresa</h2>
          <a href="#demo" className="btn btn-pill">SOLICITAR DEMONSTRAÇÃO</a>
        </div>
      </section>
    </>
  )
}
