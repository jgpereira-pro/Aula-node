import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [selecoes, setSelecoes] = useState([])
  const [loading, setLoading] = useState(true)

  const [nome, setNome] = useState('')
  const [grupo, setGrupo] = useState('')
  // necessario já que o id não esta como auto incremente
  const [id, setId] = useState('')

  useEffect(() => {
    buscarSelecoes()
  }, [])

  const buscarSelecoes = () => {
    fetch('http://localhost:3000/selecoes')
      .then(response => response.json())
      .then(dados => {
        setSelecoes(dados)
        setLoading(false)
      })
  }

  // func deletar
  const deletarSelecao = (idParaDeletar) => {
    fetch(`http://localhost:3000/selecoes/${idParaDeletar}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          const listaAtualizada = selecoes.filter(s => s.id !== idParaDeletar)
          setSelecoes(listaAtualizada)
        } else {
          console.error('Falha ao deletar a seleção no banco de dados.')
        }
      })
      .catch(erro => console.error("Erro na comunicação com a API:", erro))
  }

  // func cadastrar
  const cadastrarSelecao = (e) => {
    e.preventDefault()

    const novaSelecao = {
      id: id,
      selecao: nome,
      grupo: grupo
    }

    fetch('http://localhost:3000/selecoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaSelecao)
    })
      .then(response => response.json())
      .then(dados => {
        setSelecoes([...selecoes, novaSelecao])
        setId('')
        setNome('')
        setGrupo('')
      })
      .catch(erro => console.error("Erro ao cadastrar:", erro))
  }

  return (
    <div className="container">
      <h1 className="title">Seleções da Copa</h1>

      <form onSubmit={cadastrarSelecao} style={{ marginBottom: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input
          type="number"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome da Seleção"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Grupo"
          value={grupo}
          onChange={(e) => setGrupo(e.target.value)}
          required
        />
        <button type="submit" style={{ backgroundColor: '#93c572', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Cadastrar
        </button>
      </form>

      <hr />

      {loading ? (
        <p>Carregando seleções...</p>
      ) : (
        <div className="grid">
          {selecoes.map((s) => (
            <div key={s.id} className="card">
              <span className="badge">Grupo {s.grupo}</span>
              <h2 className="selecao-nome">{s.selecao}</h2>
              <p className="id-label">ID: {s.id}</p>

              <button
                onClick={() => deletarSelecao(s.id)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App