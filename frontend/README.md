# Forno & Farina — Frontend

Home responsiva em React + Vite e Tailwind CSS 4, com ícones do React Icons.

## Executar

```sh
cd frontend
npm install
npm run dev
```

Para produção: `npm run build`. Para visualizar o build: `npm run preview`.

## Estrutura

- `src/components/`: Header, Hero, About, Location, Contact e Footer.
- `src/pages/Home.jsx`: composição da Home.
- `src/App.jsx`: layout compartilhado, preparado para receber rotas futuramente.
- `src/styles.css`: tema, Tailwind e estilos responsivos.

## Personalização

Forno & Farina é um nome provisório. Os textos de apresentação e as fotos são temporários. Substitua o nome nos componentes, no título e na descrição de `index.html` quando a identidade real estiver definida.

Copie `.env.example` para `.env.local` e preencha o número de WhatsApp (país + DDD + número, apenas dígitos), endereço e horário reais. Reinicie o Vite depois da alteração. Sem esses valores, a página informa que os dados estarão disponíveis em breve; os links externos só aparecem após a configuração. Variáveis `VITE_` são públicas: nunca coloque segredos nelas.

As imagens são servidas pelo Unsplash e as fontes pelo Google Fonts, exigindo internet. Substitua por arquivos próprios locais antes da publicação caso necessário.

O React Router gerencia a Home (`/`) e a página de localização (`/localizacao`), com Header e Footer compartilhados. A localização usa `VITE_ADDRESS` ou um endereço ilustrativo e incorpora um mapa interativo do Google Maps, que exige internet. Em produção, configure a hospedagem para servir `index.html` nas rotas do frontend, permitindo abrir `/localizacao` diretamente ou recarregar essa página.

Não há cardápio, dados de produtos, API mockada ou integração com backend. O backend e o pacote da raiz foram preservados.
