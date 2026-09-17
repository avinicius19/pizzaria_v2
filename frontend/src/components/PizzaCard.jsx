const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const sizeOrder = ['Broto', 'Média', 'Grande', 'Gigante']
const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()

function SizePrice({ name, tamanhos }) {
  const size = tamanhos.find(item => normalize(item.nome) === normalize(name))
  const rawPrice = size?.preco_base
  const price = rawPrice == null || String(rawPrice).trim() === '' ? NaN : Number(rawPrice)

  return <div className="pizza-size">
    <dt>{name}{size?.fatias != null && <small>{size.fatias} fatias</small>}</dt>
    <dd>{Number.isFinite(price) ? currency.format(price) : <span className="pizza-price-unavailable">A consultar</span>}</dd>
  </div>
}

export default function PizzaCard({ pizza, tamanhos }) {
  return <article className="pizza-card">
    <div className="pizza-image-wrap">
      <img src={pizza.imagem_url || '/images/pizza_padrao.png'} alt={pizza.nome} loading="lazy" width="640" height="480" onError={event => {
        if (event.currentTarget.getAttribute('src') !== '/images/pizza_padrao.png') event.currentTarget.src = '/images/pizza_padrao.png'
      }} />
      <span className="pizza-category">{pizza.categoria}</span>
    </div>
    <div className="pizza-content">
      <h3>{pizza.nome}</h3>
      <p className="pizza-description">{pizza.descricao}</p>
      <div className="pizza-prices">
        <p className="pizza-prices-title">TAMANHOS <span>Preço base</span></p>
        <dl className="pizza-sizes">{sizeOrder.map(name => <SizePrice key={name} name={name} tamanhos={tamanhos} />)}</dl>
      </div>
    </div>
  </article>
}
