import { InventVMark } from './Icons'

const products = [
  { name: 'TaxPlus', color: '#6C4FE0', href: 'https://inventsoftware.com.br/taxplus' },
  { name: 'BankPlus', color: '#FFD055', href: 'https://inventsoftware.com.br/bankplus' },
  { name: 'ContractPlus', color: '#E41216', href: 'https://inventsoftware.com.br/contractplus' },
  { name: 'Intercompany', color: '#FB9D27', href: 'https://inventsoftware.com.br/intercompany' },
  { name: 'Rhello', color: '#00C9A7', href: 'https://rhello.com.br/site/' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="Invent Software">
              in<span className="logo-v"><InventVMark /></span>ent
            </a>
            <p className="footer-desc">
              Soluções complementares ao seu ERP.<br />
              Tricampeã SAP Partner of the Year.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Produtos</h4>
            <div className="footer-links">
              {products.map((p) => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                  <span style={{
                    display: 'inline-block', width: 6, height: 6,
                    borderRadius: '50%', background: p.color,
                  }} />
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navegação</h4>
            <div className="footer-links">
              <a href="#about">Sobre nós</a>
              <a href="#solutions">Soluções</a>
              <a href="#segments">Segmentos</a>
              <a href="#how">Por que a Invent</a>
              <a href="#contact">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contato</h4>
            <div className="footer-links">
              <a href="mailto:contato@inventsoftware.com.br">contato@inventsoftware.com.br</a>
              <a href="tel:+553136562100">+55 (31) 3656-2100</a>
              <a href="#">Belo Horizonte, MG</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Invent Software. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/inventsoftware/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/inventsoftware/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">ig</a>
            <a href="https://www.youtube.com/@inventsoftware" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">yt</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
