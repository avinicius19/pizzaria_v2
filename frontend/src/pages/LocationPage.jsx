import { FiMapPin, FiArrowUpRight } from 'react-icons/fi'

export default function LocationPage() {
  const configuredAddress = import.meta.env.VITE_ADDRESS?.trim()
  // Local real usado apenas como referência ilustrativa; não é uma unidade da pizzaria.
  const address = configuredAddress || 'Avenida Paulista, 1578 — Bela Vista, São Paulo — SP'
  const query = encodeURIComponent(address)

  return <main id="conteudo" tabIndex={-1} className="site-container section location-page">
    <div className="location-intro">
      <p className="eyebrow justify-center">VENHA CONHECER NOSSA CASA</p>
      <h1 className="location-heading">Estamos bem <em>aqui.</em></h1>
      <p className="mt-6">Estamos localizados em:</p>
      <p className="location-address"><FiMapPin aria-hidden="true" />{address}</p>
      {!configuredAddress && <p className="location-example">Endereço ilustrativo, utilizado apenas para demonstrar o mapa.</p>}
    </div>
    <iframe className="location-map" title={`Mapa da localização: ${address}`} src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
    <div className="mt-6 flex justify-center"><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer">Abrir no Google Maps <FiArrowUpRight aria-hidden="true" /></a></div>
  </main>
}
