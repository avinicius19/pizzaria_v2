import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import LocationPage from './pages/LocationPage'
import Cardapio from './pages/Cardapio'
import { Promocoes } from './pages/Promocoes'

function RouteNavigation() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = pathname === '/promocoes' ? 'Promoções | Forno & Farina' : pathname === '/cardapio' ? 'Cardápio | Forno & Farina' : pathname === '/localizacao' ? 'Localização | Forno & Farina' : 'Forno & Farina | Feita para compartilhar'
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
      else {
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.getElementById('conteudo')?.focus({ preventScroll: true })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteNavigation />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/localizacao" element={<LocationPage />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="*" element={
          <main id="conteudo" tabIndex={-1} className="site-container section">
            <h1 className="location-heading">Página não encontrada</h1>
            <Link to="/" className="text-link mt-6">Voltar para a Home</Link>
          </main>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
