// oque pode fazer para melhorar:
// 1 conexao dentro do repositorie (feito)
// 2 tratamento de erros (feito)
// 3 fazer o view integração front e back

import express from 'express'
import cors from 'cors'
import router from './router.js'

const app = express()

app.use(cors()) 
app.use(express.json())
app.use(router)

export default app
