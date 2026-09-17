import Hero from '../components/Hero'
import About from '../components/About'
import Location from '../components/Location'
import Contact from '../components/Contact'
import Stats from '../components/Stats'

export default function Home() {
  return <main id="conteudo" tabIndex={-1}><Hero /><About /><Stats /><Location /><Contact /></main>
}
