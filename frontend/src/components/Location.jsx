import { FiUsers, FiClock } from 'react-icons/fi'

export default function Location() {
  const hours = import.meta.env.VITE_OPENING_HOURS?.trim()
  return <section id="localizacao" className="location-section" aria-labelledby="location-title"><div className="site-container location-grid"><div><p className="eyebrow">SEU PRÓXIMO ENCONTRO É AQUI</p><h2 id="location-title">Tem um lugar<br />para você <em>à mesa.</em></h2><p>Junte a família, chame os amigos.<br />O resto fica por conta da casa.</p></div><div className="location-card"><div className="detail-row"><FiClock aria-hidden="true" /><div><h3>Horário de funcionamento</h3><p>{hours || 'Terça a domingo, das 18h às 23h.'}</p></div></div><div className="detail-row"><FiUsers aria-hidden="true" /><div><h3>Atendimento no salão</h3><p>Um ambiente acolhedor para reunir a família e os amigos.</p></div></div></div></div></section>
}
