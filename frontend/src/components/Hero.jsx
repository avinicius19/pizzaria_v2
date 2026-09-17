import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title"><div className="site-container hero-grid">
    <div className="hero-copy"><p className="eyebrow"><span /> DA NOSSA CASA PARA A SUA MESA</p>
      <h1 id="hero-title">A felicidade<br />vem em <em>fatias.</em></h1>
      <p className="hero-description">Massa, molho e um bom motivo para reunir quem você ama. Por aqui, cada pizza é um convite para ficar mais um pouco.</p>
      <div className="flex flex-wrap items-center gap-5"><a href="#localizacao" className="button">Venha conhecer nossa casa <FiArrowUpRight aria-hidden="true" /></a><a href="#historia" className="text-link">Nossa história <FiArrowDown aria-hidden="true" /></a></div>
      <div className="hero-note"><span className="note-line" /> Boa pizza. Boa companhia. Sem pressa.</div>
    </div>
    <div className="hero-visual"><img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1400&q=85" alt="Pizza com molho de tomate, queijo derretido e folhas de manjericão" width="1000" height="1150" fetchPriority="high" /><div className="photo-label"><span>O MELHOR INGREDIENTE?</span><strong>Estar junto.</strong></div><div className="round-label" aria-hidden="true">AMOR EM<br /><span>cada</span><br />PEDAÇO ✳</div></div>
  </div></section>
}
