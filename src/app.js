// oque pode fazer para melhorar:
// 1 tratar erros de digitação como por exemplo inserir um id errado
// 2 fazer o view integração front e back
// 3 tratar erro 404 dos de url
// 4 parte de conexao dentro do repositorie tem que fazer até a proxima aula

import express from 'express'
import conexao from '../database/conexao.js'
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()

// ler como formato json
app.use(express.json())

app.get('/selecoes', SelecaoController.index())

app.post('/selecoes', SelecaoController.store())

app.get('/selecoes/:id', SelecaoController.show())

app.put('/selecoes/:id', SelecaoController.update())

app.delete('/selecoes/:id', SelecaoController.delete())

export default app
