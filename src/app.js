import express from 'express'
const app = express()

// ler como formato json
app.use(express.json())

// Mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo:'C'},
    {id: 2, selecao: 'EUA', grupo:'A'},
    {id: 3, selecao: 'Canada', grupo:'B'},
    {id: 4, selecao: 'Alemanha', grupo:'D'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexPorId(id) {
    return selecoes.find(selecao => selecao.id == id)
}

// se a pessoa digitar uma rota nao existente dar uma resposta para ela seja jogar ela para a pagina principal ou dar um status 

// Criando uma rota padrão ou raiz
app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.get('/selecoes', (req, res)=> {
    res.send(selecoes)
})

app.post('/selecoes', (req, res)=> {
    selecoes.push(req.body)
    res.status(200).send('seleção cadastrada com sucesso')
})

app.get('/selecoes/:id', (req, res)=> {
    // let index = req.params.id
    // console.log(index)
    res.json(buscarSelecaoPorId(req.params.id))
})

app.delete('/selecoes/:id', (req, res)=> {
    let index = buscarIndexPorId(req.params.id)
    selecoes.splice(index, 1)
    res.send('selecao deletada com sucesso')
})

app.put('/selecoes/:id', (req, res)=> {
    let index = buscarIndexPorId(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo
    res.send('Update feito com sucesso')
})

export default app
