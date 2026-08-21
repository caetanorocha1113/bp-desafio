# 💳 Gateway de Pagamento - Desafio BP Promotora

Projeto desenvolvido pela equipe **Maneuchos** como parte das atividades do 2º trimestre da disciplina de Desenvolvimento de Sistemas. O projeto consiste em uma plataforma de pagamentos que simula um gateway real, realizando cálculos de juros, gestão de transações e controle de limites.

## 🚀 Funcionalidades

- **Dashboard Integrado:** Visualização do resumo de pagamentos e painel de controle.
- **Histórico de Transações:** Tela dedicada ao acompanhamento e detalhamento de todas as movimentações.
- **Integração Frontend/Backend:** Consumo de API própria para registro e validação de operações.
- **Banco de Dados Relacional:** Armazenamento seguro de transações utilizando SQLite.

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:

* **Frontend:** React.js, Vite, HTML5, CSS3
* **Backend:** Node.js, Express
* **Banco de Dados & ORM:** SQLite, Prisma ORM[cite: 5]

## 📂 Arquitetura do Projeto

O repositório adota uma estrutura em monorepo, separando as responsabilidades entre a interface do usuário (Frontend) e a API (Backend)[cite: 5]:

```text
maneuchos/
│
├── backend/                  # Servidor Node.js e regras de negócio[cite: 5]
│   ├── prisma/               # Configuração e Schema do banco via Prisma ORM[cite: 5]
│   │   └── schema.prisma     # Modelagem das tabelas[cite: 5]
│   ├── src/
│   │   ├── routes/           # Endpoints da API (ex: transactions.js)[cite: 5]
│   │   ├── db.js             # Instância e conexão com o banco[cite: 5]
│   │   └── index.js          # Ponto de entrada do servidor[cite: 5]
│   ├── .env                  # Variáveis de ambiente[cite: 5]
│   ├── prisma.config.ts      # Configurações adicionais do Prisma[cite: 5]
│   └── package.json          # Dependências do backend[cite: 5]
│
├── frontend/                 # Aplicação React configurada com Vite[cite: 5]
│   ├── src/
│   │   ├── pages/            # Telas da aplicação (Dashboard.jsx, Detail.jsx, History.jsx)[cite: 5]
│   │   ├── api.js            # Arquivo centralizador de requisições para o Backend[cite: 5]
│   │   ├── App.jsx           # Roteamento e estrutura principal[cite: 5]
│   │   ├── main.jsx          # Ponto de montagem do React[cite: 5]
│   │   └── styles.css        # Folha de estilos globais[cite: 5]
│   ├── index.html            # Template principal do navegador[cite: 5]
│   ├── vite.config.js        # Configurações do empacotador Vite[cite: 5]
│   └── package.json          # Dependências do frontend[cite: 5]
│
├── data.db                   # Arquivo local do banco de dados SQLite[cite: 5]
└── package.json              # Configurações e scripts raiz do repositório[cite: 5]
