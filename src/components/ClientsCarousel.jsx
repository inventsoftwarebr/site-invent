const clients = [
  { name: 'Ambev', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Ambev-Invent-Software.webp' },
  { name: 'Deloitte', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Deloitte-Invent-Software.webp' },
  { name: 'McDonald\'s', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/McDonalds-Invent-Software.webp' },
  { name: 'Hotmart', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Hotmart-Invent-Software.webp' },
  { name: 'Granado', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Granado-Invent-Software.webp' },
  { name: 'H.Stern', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/HStern-Invent-Software.webp' },
  { name: 'KFC', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/KFC-Invent-Software.webp' },
  { name: 'Gerdau', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Gerdau-Graphene-Invent-Software.webp' },
  { name: 'Fogo de Chão', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Fogo-de-Chao-Invent-Software.webp' },
  { name: 'Botafogo', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Botafogo-Invent-Software.webp' },
  { name: 'Palmeiras', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Palmeiras-Invent-Software.webp' },
  { name: 'Quinto Andar', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Quinto-Andar-Invent-Software.webp' },
  { name: 'Caixa Seguradora', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Caixa-Seguradora-Invent-Software.webp' },
  { name: 'Syngenta', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Syngenta-Invent-Software.webp' },
  { name: 'Movile', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Movile-Invent-Software.webp' },
  { name: 'BeFly', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/BeFly-Invent-Software.webp' },
  { name: 'Digio', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Digio-Invent-Software.webp' },
  { name: 'ConectCar', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/ConectCar-Invent-Software.webp' },
  { name: 'Zé Delivery', src: 'https://inventsoftware.com.br/wp-content/uploads/2024/02/Ze-delivery-Invent-Software.webp' },
]

export default function ClientsCarousel() {
  const doubled = [...clients, ...clients]

  return (
    <section className="clients-section">
      <p className="clients-label">Já construímos juntos com</p>
      <div className="clients-track-wrapper">
        <div className="clients-track">
          {doubled.map((c, i) => (
            <img
              key={`${c.name}-${i}`}
              src={c.src}
              alt={c.name}
              className="client-logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
