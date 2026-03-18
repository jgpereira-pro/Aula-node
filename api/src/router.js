import { Router } from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const router = Router()

router.get('/selecoes', SelecaoController.index)    // Listar todas
router.get('/selecoes/:id', SelecaoController.show) // Listar por id
router.post('/selecoes', SelecaoController.store)   // Criar
router.put('/selecoes/:id', SelecaoController.update)   // Atualizar
router.delete('/selecoes/:id', SelecaoController.delete)    // Deletar

export default router