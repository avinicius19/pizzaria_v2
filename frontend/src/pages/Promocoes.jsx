import React from 'react'
import { useState, useEffect } from 'react'
import api from '../services/api'

export const Promocoes = () => {

    const [promocoes, setPromocoes] = useState([])

    useEffect(() => {
        async function getPromotion() {
            const promotionResponse = await api.get('/promocoes')
            setPromocoes(promotionResponse.data)
        }
        getPromotion();
    }, [])

    return (
        <main id="conteudo" tabIndex={-1} className="menu-page">
            <header className="site-container menu-intro">
                <p className="eyebrow justify-center">DA NOSSA CASA PARA A SUA MESA</p>
                <h1 className="location-heading">Nossas <em>promoções.</em></h1>
                <p>Confira as promoções e escolha sua próxima pizza.</p>
            </header>
            <div className="site-container">
                <div className="menu-grid">
                    {promocoes.map(promocao => (
                        <article className="pizza-card" key={promocao.id}>
                            <div className="pizza-image-wrap">
                                <img src={promocao.imagem_url || '/images/pizza_padrao.png'} alt={promocao.titulo} loading="lazy" width="640" height="480" />
                                {promocao.dia_semana && <span className="pizza-category">{promocao.dia_semana}</span>}
                            </div>
                            <div className="pizza-content">
                                <h3>{promocao.titulo}</h3>
                                <p className="pizza-description">{promocao.descricao}</p>
                                <div className="pizza-prices">
                                    <p className="pizza-prices-title">Preço promocional</p>
                                    <p className="text-orange font-bold">
                                        {promocao.preco != null ? Number(promocao.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'A consultar'}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
