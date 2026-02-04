import express from 'express'
const app = express()

// Mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo:'C'},
    {id: 2, selecao: 'EUA', grupo:'A'},
    {id: 3, selecao: 'Canada', grupo:'B'},
    {id: 4, selecao: 'Alemanha', grupo:'D'}
]
// se a pessoa digitar uma rota nao existente dar uma resposta para ela seja jogar ela para a pagina principal ou dar um status 

// Criando uma rota padrão ou raiz
app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.get('/selecoes', (req, res)=> {
    res.send(selecoes)
})

export default app
