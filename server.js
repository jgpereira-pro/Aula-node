import app from './src/app.js'
import conexao from './infra/conexao.js'
const port = 3000

// realizando a conexao
conexao.connect((erro) => {
    
    if (erro) {
        console.log(`ll`)
    } else {
        console.log(`Conexao realizada com sucesso`)
        app.listen(port, ()=> {
            console.log(`Servidor rodando http://localhost:${port}`)
        })
    }
})

