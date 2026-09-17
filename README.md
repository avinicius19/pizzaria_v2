# Forno & Farina — Pizzaria

Frontend em React, Vite e Tailwind CSS; backend em Express e MySQL.

## Backend

Requer Node.js 22 e um banco MySQL com as tabelas utilizadas em `backend/server.js`. O repositório não inclui banco, backups ou credenciais.

1. Copie `backend/.env.example` para `backend/.env` e preencha sua configuração do MySQL.
2. Execute:

```sh
cd backend
npm install
npm start
```

A API usa a porta 3000. As rotas atuais são `/pizzas` e `/tamanhos`.

## Frontend

Em outro terminal:

```sh
cd frontend
npm install
npm run dev
```

O frontend acessa a API local em `http://localhost:3000`. Para gerar os arquivos de produção, execute `npm run build` dentro de `frontend`.

## Configuração privada

Credenciais ficam apenas em `backend/.env`, ignorado pelo Git. Nunca coloque segredos em variáveis `VITE_`, pois seus valores são públicos no navegador. O `.env.example` contém apenas os nomes das configurações.
