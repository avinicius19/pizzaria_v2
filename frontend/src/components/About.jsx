import { PiLeafLight, PiHeartLight, PiWineLight } from 'react-icons/pi'

export default function About() {
  return <><div className="values-strip"><div className="site-container flex flex-wrap justify-around gap-6"><span><PiLeafLight aria-hidden="true" /> O simples bem-feito</span><span><PiHeartLight aria-hidden="true" /> Carinho em cada detalhe</span><span><PiWineLight aria-hidden="true" /> Momentos para compartilhar</span></div></div>
    <section id="historia" className="section site-container about-grid" aria-labelledby="about-title"><div className="about-photo"><img src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=85" alt="Pizza artesanal servida à mesa" width="1000" height="800" loading="lazy" /><span>À mesa, a vida acontece.</span></div><div><p className="eyebrow">MUITO PRAZER, FORNO & FARINA</p><h2 id="about-title">Mais que pizza.<br />Um lugar para <em>estar.</em></h2><p>Acreditamos que uma boa mesa aproxima as pessoas. Que a melhor conversa é aquela que continua depois da última fatia. E que os pequenos momentos merecem um sabor especial.</p><p>Essa é a essência da nossa casa: pizza no centro da mesa e espaço para novas histórias ao redor.</p><a href="#contato" className="text-link mt-6">Vamos nos conhecer <span aria-hidden="true">↗</span></a></div></section>
  </>
}
