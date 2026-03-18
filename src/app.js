// oque pode fazer para melhorar:
// 1 conexao dentro do repositorie (feito)
// 2 tratamento de erros (feito)
// 3 fazer o view integração front e back

import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'
app.use(cors())
const app = express()

// ler como formato json
app.use(express.json())

app.get('/selecoes', SelecaoController.index)

app.post('/selecoes', SelecaoController.store)

app.get('/selecoes/:id', SelecaoController.show)

app.put('/selecoes/:id', SelecaoController.update)

app.delete('/selecoes/:id', SelecaoController.delete)

export default app
