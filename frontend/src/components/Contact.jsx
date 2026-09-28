import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER?.trim()
  const validNumber = /^\d{10,15}$/.test(number || '')
  return <section id="contato" className="section site-container contact" aria-labelledby="contact-title"><p className="eyebrow">A GENTE ADORA UMA BOA CONVERSA</p><h2 id="contact-title">Vamos falar de <em>pizza?</em></h2><p>Tire suas dúvidas e fale com a nossa equipe.</p>{validNumber ? <a className="button" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Peça sua pizza pelo WhatsApp</a> : <p className="contact-soon"><FaWhatsapp aria-hidden="true" /> Nosso WhatsApp estará disponível em breve.</p>}</section>
}
