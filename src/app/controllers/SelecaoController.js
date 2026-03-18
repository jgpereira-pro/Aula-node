import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {
    // listar tudo
    async index(req, res) {
        try {
            const resultado = await SelecaoRepository.findAll()
            res.status(200).json(resultado)
        } catch (erro) {
            console.error('Erro no banco de dados:', erro)
            res.status(500).json({ mensagem: 'Erro ao listar seleções' })
        }
    }

    // listar por id
    async show(req, res) {
        const id = req.params.id
        const resultado = await SelecaoRepository.findById(id)
        if (resultado.length > 0) {
            res.status(200).json(resultado[0])
        } else {
            res.status(404).json({ mensagem: 'Seleção não encontrada' })
        }
    }

    // Criar dados
    async store(req, res) {
        const selecao = req.body
        const resultado = await SelecaoRepository.create(selecao) 
        res.status(201).json(selecao)
    }

    // Atualizar dados
    async update(req, res) {
        try {
            const id = req.params.id
            const selecao = req.body
            const resultado = await SelecaoRepository.update(selecao, id)
            if (resultado.affectedRows > 0) {
                res.status(200).json({ id, ...selecao})
            } else {
                res.status(404).json({ 'erro': 'Seleção não encontrada para atualizar' })            
            }
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar seleção' })
        }
    }

    // Remover dados
    async delete(req, res) {
        const id = req.params.id
        const resultado = await SelecaoRepository.delete(id)
        if (resultado.affectedRows > 0) {
            res.status(200).json({ mensagem: `Seleção ${id} deletada com sucesso` })
        } else {
            res.status(404).json({mensagem: 'Seleção não encontrada para deletar'})
        }
    }
}

// Padrão singleton permite criar objetos únicos para os quais há apenas uma instância
export default new SelecaoController()
