import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { PiPizzaLight } from 'react-icons/pi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

export function Brand() {
  return <Link to="/" className="brand" aria-label="Forno e Farina — início"><PiPizzaLight aria-hidden="true" /><span>forno<span className="brand-amp"> & </span>farina<small>PIZZA & BOAS HISTÓRIAS</small></span></Link>
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="site-container flex items-center justify-between gap-6">
    <Brand />
    <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
    <nav id="navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Navegação principal" onClick={() => setOpen(false)} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle')?.focus() } }}>
      <NavLink to="/cardapio">Cardápio</NavLink><NavLink to="/promocoes">Promoções</NavLink><NavLink to="/localizacao">Localização</NavLink><Link to="/#contato" className="button button-small">Fazer pedido pelo WhatsApp <FiArrowUpRight aria-hidden="true" /></Link>
      <div className="header-socials">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (abre em nova aba)"><FaInstagram aria-hidden="true" /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook (abre em nova aba)"><FaFacebookF aria-hidden="true" /></a>
      </div>
    </nav>
  </div></header>
}
