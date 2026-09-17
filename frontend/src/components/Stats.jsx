import { useCallback, useEffect, useRef, useState } from 'react'
import { PiChefHatLight, PiStorefrontLight, PiCoinsLight, PiPizzaLight } from 'react-icons/pi'

function Counter({ value, prefix = '', suffix = '', label, icon: Icon }) {
  const [count, setCount] = useState(0)
  const element = useRef(null)
  const frame = useRef(null)

  const animate = useCallback(() => {
    cancelAnimationFrame(frame.current)
    setCount(0)
    const start = performance.now()
    const tick = now => {
      const progress = Math.min((now - start) / 2200, 1)
      setCount(Math.floor(value * (1 - (1 - progress) ** 2)))
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }, [value])

  useEffect(() => {
    let started = false
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const inView = entry.isIntersecting && entry.intersectionRatio >= 0.35
        if (inView && !started) {
          started = true
          animate()
          observer.disconnect()
        }
      }
    }, { threshold: 0.35 })
    observer.observe(element.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame.current)
    }
  }, [animate])

  return <div ref={element} className="stat-item">
    <span className="sr-only">{prefix}{value}{suffix} {label}</span>
    <Icon className="stat-icon" aria-hidden="true" />
    <span className="stat-value" aria-hidden="true"><span className="stat-prefix">{prefix}</span>{count}<span className="stat-suffix">{suffix}</span></span>
    <span className="stat-label" aria-hidden="true">{label}</span>
  </div>
}

export default function Stats() {
  return <section className="stats-section" aria-labelledby="stats-title"><div className="site-container">
    <p className="eyebrow justify-center">UMA HISTÓRIA QUE CONTINUA CRESCENDO</p>
    <h2 id="stats-title">O sabor da nossa história<br /><em>em números.</em></h2>
    <div className="stats-grid">
      <Counter value={27} label="Anos de tradição e experiência" icon={PiChefHatLight} />
      <Counter value={17} label="Unidades inauguradas" icon={PiStorefrontLight} />
      <Counter value={850} prefix="+" suffix="mil" label="Pizzas vendidas por ano" icon={PiCoinsLight} />
      <Counter value={82} prefix="+" label="Sabores para compartilhar" icon={PiPizzaLight} />
    </div>
  </div></section>
}
