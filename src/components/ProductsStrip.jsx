const products = [
  { name: 'TaxPlus', color: '#6C4FE0' },
  { name: 'BankPlus', color: '#FFD055' },
  { name: 'ContractPlus', color: '#E41216' },
  { name: 'Intercompany', color: '#FB9D27' },
  { name: 'Rhello', color: '#00C9A7' },
]

export default function ProductsStrip() {
  return (
    <section className="products-strip">
      <div className="container">
        <div className="strip-inner">
          <span className="strip-label">Nossas soluções</span>
          {products.map((p) => (
            <a key={p.name} href="#solutions" className="strip-product">
              <span className="product-dot" style={{ background: p.color, width: 7, height: 7, borderRadius: '50%' }} />
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
