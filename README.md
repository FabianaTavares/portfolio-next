# Nome do Projeto
![CI](https://github.com/FabianaTavares/portfolio-next/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-Framework-black)
![React](https://img.shields.io/badge/React-Library-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![Version](https://img.shields.io/github/v/release/FabianaTavares/portfolio-next)

Portfólio profissional desenvolvido com React e Next.js, focado em organização arquitetural, SEO técnico e boas práticas de desenvolvimento frontend.

Projeto estruturado para ser reutilizável como base profissional.

---

## 📌 Sobre o Projeto

Este projeto é um portfólio frontend desenvolvido com React e Next.js, utilizando uma abordagem híbrida de roteamento:

- `app/` utilizado apenas para layout global
- `pages/` responsável pelo roteamento principal

A arquitetura prioriza:

- Simplicidade estrutural
- Organização modular
- Separação de responsabilidades
- Performance e SEO

---

## 🚀 Tecnologias Utilizadas

- Framework: Next.js
- Biblioteca: React
- Linguagem: TypeScript
- Deploy: Vercel
- Lint: ESLint
- Formatação: Prettier
- Hooks de Git: Husky
- Commit pattern: Conventional Commits
- Versionamento: Semantic Versioning

---

## 🧱 Arquitetura

Estrutura principal:

src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── pages/
│   ├── Projetos/
│   ├── Conteudo/
│   ├── Sobre/
│   ├── Contato/
│   └── index.tsx
├── components/
├── sections/
├── hooks/
├── services/
├── styles/
├── utils/
└── types/

### Estratégia adotada

- `app/` centraliza layout global e configurações base
- `pages/` organiza rotas de forma explícita
- Componentes reutilizáveis isolados em `components/`
- Seções estruturais em `sections/`
- Utilitários desacoplados em `utils/`

Essa abordagem mantém clareza arquitetural sem complexidade excessiva do App Router completo.

---

## ⚙️ Setup do Projeto

### 1. Clonar repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

### 2. Instalar dependências

npm install

### 3. Rodar ambiente de desenvolvimento

npm run dev

Aplicação disponível em:
http://localhost:3000

---

## 🧪 Scripts Disponíveis

| Script | Descrição |
|--------|----------|
| npm run dev | Ambiente de desenvolvimento |
| npm run build | Build de produção |
| npm run start | Inicia build de produção |
| npm run lint | Executa ESLint |
| npm run format | Executa Prettier |
| npm run changelog | Atualiza CHANGELOG automaticamente |

---

## 📦 Versionamento

Este projeto segue o padrão de versionamento semântico:

MAJOR.MINOR.PATCH

Com geração automática de changelog baseada em Conventional Commits.

---

## 📜 Convenção de Commits

Exemplos:

feat: adiciona página de projetos  
fix: corrige erro de tipagem  
docs: atualiza README  
refactor: reorganiza estrutura de componentes  

---

## 🔄 Fluxo de Branches

- main → produção
- develop → integração
- feature/*
- fix/*
- docs/*
- chore/*

---

## 🌐 Deploy

Deploy automatizado via Vercel.

Push na branch `main` atualiza produção.

---

## 📈 SEO e Performance

- Renderização otimizada com Next.js
- Estrutura semântica
- Otimização automática de imagens
- Meta tags configuráveis
- Compatível com boas práticas de Lighthouse

---

## 📄 Licença

MIT