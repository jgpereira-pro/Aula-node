import conexao from '../database/conexao.js'

class SelecaoController {
    // listar, tudo
    index(req, res) {
        const sql = "SELECT * FROM dbselecao.dbcopa;"
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                // Para fazer status 404
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    // listar por id
    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                console.log(erro)
                // Para fazer status 404
            } else {
                res.status(200).json(linha)
            }
        })
    }

    // Criar dados
    store(req, res) {
        const selecao = req.body
        const sql = "INSERT INTO dbselecao.dbcopa SET ?;"
        conexao.query(sql, selecao, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                console.log(erro)
                // Para fazer status 404
            } else {
                res.status(201).json(linha)
            }
        })
    }

    // Atualizar dados
    update(req, res) {
        const id = req.params.id
        const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id = ?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                console.log(erro)
                // Para fazer status 404
            } else {
                res.st
                atus(200).json(linha)
            }
        })
    }

    // Remover dados
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if (erro) {
                console.log(erro)
                // Para fazer status 404
            } else {
                res.status(200).json(linha)
            }
        })
    }

}
// Padrão singleton (pesquisar e tomar nota)
export default new SelecaoController()
