import PizzaCard from './PizzaCard'

/* MenuSection recebe todas as pizzas, seleciona as que pertencem à categoria daquela seção e renderiza um PizzaCard para cada uma delas. */
export default function MenuSection({ id, title, description, pizzas, tamanhos, category }) {
  const matchingPizzas = pizzas.filter(pizza => String(pizza.categoria ?? '').trim().toLowerCase() === category || String(pizza.categoria ?? '').trim().toLowerCase() === title.toLowerCase())

  return <section id={id} className="menu-section" aria-labelledby={`${id}-title`}>
    <div className="menu-section-heading">
      <div>
        <h2 id={`${id}-title`}>{title}</h2><p>{description}</p>
      </div>
      <span className="menu-section-mark" aria-hidden="true">✳</span>
    </div>
    {matchingPizzas.length > 0 ? <div className="menu-grid">{matchingPizzas.map(pizza => <PizzaCard key={pizza.id} pizza={pizza} tamanhos={tamanhos} />)}</div> : <p className="menu-empty">Nenhuma pizza disponível nesta seção no momento.</p>}
  </section>
}
