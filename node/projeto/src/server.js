const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        name: req.body.name,
        price: req.body.price
    })
    res.send(produto) // JSON
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})