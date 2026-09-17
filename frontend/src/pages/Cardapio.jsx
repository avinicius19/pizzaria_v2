import api from "../services/api";
import { useEffect, useState } from "react"
import MenuSection from '../components/MenuSection'

export default function Cardapio() {

  const [pizzas, setPizzas] = useState([]);
  const [tamanhos, setTamanhos] = useState([]);

  useEffect(() => {
    async function getData() {
      const pizzasResponse = await api.get('/pizzas')
      setPizzas(pizzasResponse.data)

      const tamanhosResponse = await api.get('/tamanhos')
      setTamanhos(tamanhosResponse.data)

    }
    getData()
  }, [])

  return (
    <main id="conteudo" tabIndex={-1} className="menu-page">
      <header className="site-container menu-intro">
        <p className="eyebrow justify-center">DA NOSSA CASA PARA A SUA MESA</p>
        <h1 className="location-heading">Cada fatia, uma <em>escolha.</em></h1>
        <p>Dos clássicos aos doces, encontre seu próximo sabor favorito.</p>
      </header>
      <nav className="menu-nav" aria-label="Categorias do cardápio">
        <div className="site-container menu-nav-links">
          <a href="#tradicionais">Tradicionais</a>
          <a href="#especiais">Especiais</a>
          <a href="#premium">Premium</a>
          <a href="#doces">Doces</a>
        </div>
      </nav>
      <div className="site-container menu-sections">
        <MenuSection id="tradicionais" title="Tradicionais" category="tradicional" description="Os clássicos que sempre têm lugar à mesa." pizzas={pizzas} tamanhos={tamanhos} />
        <MenuSection id="especiais" title="Especiais" category="especial" description="Combinações para sair da rotina e descobrir novos favoritos." pizzas={pizzas} tamanhos={tamanhos} />
        <MenuSection id="premium" title="Premium" category="premium" description="Para transformar a próxima fatia em um momento especial." pizzas={pizzas} tamanhos={tamanhos} />
        <MenuSection id="doces" title="Doces" category="doce" description="Um final doce para uma boa história à mesa." pizzas={pizzas} tamanhos={tamanhos} />
      </div>
    </main>
  )
}
