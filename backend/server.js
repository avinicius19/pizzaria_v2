require('dotenv').config({ path: require('path').join(__dirname, '.env'), quiet: true });
const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors')

app.use(cors())
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((error) => {
    if (error) {
        console.log('Erro ao conectar ao DB')
        return
    }
    console.log('Sucesso ao conectar ao DB');
})

app.get('/pizzas', (req, res) => {
    db.query('SELECT pizzas.id,pizzas.nome, pizzas.descricao ,pizzas.imagem_url, categorias.nome AS categoria FROM pizzas INNER JOIN categorias ON pizzas.categoria_id = categorias.id', (error, results) => {
        if (error) {
            return res.status(500).json({
                error: 'Erro ao trazer as pizzas'
            })
        }
        res.json(results)
    })
})

app.get('/tamanhos', (req, res) => {
    db.query('SELECT tamanhos.nome, tamanhos.fatias, tamanhos.preco_base FROM tamanhos', (error, results) => {
        if (error) {
            return res.status(500).json({
                error: 'Error ao retornar dados.'
            })
        }

        res.json(results)
    })
})

app.get('/promocoes', (req, res) => {
    db.query('SELECT promocoes.id, promocoes.titulo, promocoes.descricao,promocoes.dia_semana, promocoes.preco,promocoes.imagem_url FROM promocoes WHERE ativo = 1', (error, results) => {
        if (error) {
            return res.status(500).json({
                error: 'Erro ao retornar promoções'
            })
        }
        res.json(results)
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

