# 🏆 API de Seleções da Copa - Projeto Full Stack Senac

API RESTful desenvolvida para o gerenciamento de seleções da Copa do Mundo, integrando uma interface reativa em React com um servidor robusto em Node.js.

## 📝 Descrição
Este projeto resolve o problema de visualização e controle de dados de seleções esportivas em tempo real. Foi desenvolvido como um estudo de caso para aplicar conceitos de persistência de dados, comunicação assíncrona entre camadas e tratamento de erros em um ambiente distribuído.

## 🚀 Tecnologias Utilizadas
- **Runtime:** Node.js (v20+)
- **Framework Backend:** Express.js
- **Frontend:** React 18 (Vite)
- **Banco de Dados:** MySQL (dbselecao)
- **Comunicação:** Axios/Fetch API (JSON)
- **Middleware:** CORS (Cross-Origin Resource Sharing)

## 📂 Estrutura de Pastas
```text
Projeto-selecao/
├── api/ (Backend)
│   ├── src/
│   │   ├── app/
│   │   │   ├── controllers/ (Lógica de Requisição)
│   │   │   ├── repositories/ (Lógica SQL - Repository Pattern)
│   │   ├── app.js (Configuração do Servidor)
│   │   ├── server.js (Inicialização)
│   │   └── routes.js (Definição de Endpoints)
├── web/ (Frontend - React)
│   ├── src/
│   │   ├── App.jsx (Lógica e Consumo de API)
│   │   └── main.jsx
└── README.md
```

## 📋 Pré-requisitos
- **Node.js** e **npm** instalados.
- **MySQL Server** rodando localmente.
- Banco de dados `dbselecao` com a tabela `dbcopa` criada.

## 🔧 Instalação e Execução

### 1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-projeto.git

### 2. Entre na pasta(Back-end):
cd api
npm install
npm run dev


### 3. Entre na pasta(Frontend (Web)):
cd web
npm install
npm run dev

## 📡 Endpoints da API
GET `/selecoes` - Lista registros
GET `/selecoes/:id` - Cria registro
POST `/selecoes` - Retorna registro específico
PUT `/selecoes/:id` - Atualiza registro
DELETE `/selecoes/:id` - Remove registro

# Variáveis de Ambiente
PORT=3000
DATABASE_URL= [localhost](http://localhost:3000/)

## 🌟 Diferenciais e Regras de Negócio (Extra Senac Web 2)
- **Tratamento de Duplicidade:** Implementação de lógica `try/catch` para capturar erros de `ER_DUP_ENTRY` do MySQL e retornar Status Code `409 Conflict`.
- **UI Reativa:** O Frontend utiliza `useEffect` para sincronização de dados e `filter` para atualizações de interface sem necessidade de recarregamento (F5).

## 👤 Autor
João Guilherme Pereira de Freitas
Estudante de Análise e Desenvolvimento de Sistemas - Senac RJ

## 📄 Licença
Senac RJ.

---
