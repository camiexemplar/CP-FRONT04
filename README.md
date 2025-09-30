# Projeto Frontend - Gerenciador de Sessões de Estudo

Feito por: @Hayzer3 @eduardawv @camiexemplar
LUCAS NUNES RM566503
CAMILY VITORIA RM566520
EDUARDA WEISS RM564434


![Status da Branch](https://img.shields.io/badge/branch-Error--404--and--Errorboundary-blue)
![Linguagem](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Framework](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Build Tool](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
[![Deploy na Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://cp-front-04.vercel.app/)

Seja bem-vindo(a) ao projeto! Este é um aplicativo web para gerenciar sessões de estudo. Ele permite aos usuários adicionar, visualizar e organizar seus tempos de aprendizado de forma simples e eficiente.

---

### 🚀 Acesse o Projeto

Você pode visualizar a versão ao vivo do projeto, hospedada na Vercel, clicando no link abaixo:

**[https://cp-front-04.vercel.app/](https://cp-front-04.vercel.app/)**

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[React](https://reactjs.org/)**: Biblioteca JavaScript para construir interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto do JavaScript que adiciona tipagem estática.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna e rápida.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida.
* **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas para navegação entre páginas.

---

## ✨ Funcionalidades

As principais funcionalidades do aplicativo incluem:

* **Página de Visualização**: Exibe a lista de sessões de estudo cadastradas.
* **Formulário de Cadastro**: Permite adicionar novas sessões com informações detalhadas.
* **Página de Erro 404**: Trata rotas inexistentes com uma página amigável.
* **Boundary de Erro (`ErrorBoundary`)**: Garante que erros inesperados em componentes não quebrem a aplicação inteira, exibindo uma interface de fallback.

---

## 📁 Estrutura do Projeto

O projeto segue uma estrutura de componentes bem definida para facilitar a manutenção e o desenvolvimento.

src/
├── assets/         # Imagens, ícones, fontes, etc.
├── components/     # Componentes reutilizáveis (botões, cards, etc.)
├── pages/          # Componentes que representam páginas inteiras (Home, NotFound, etc.)
├── types/          # Arquivos de definição de tipos do TypeScript
├── App.tsx         # Componente principal da aplicação
├── index.css       # Estilos globais
└── main.tsx        # Ponto de entrada da aplicação


---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para ter uma cópia local do projeto em execução:

**Pré-requisitos**
* [Node.js](https://nodejs.org/en/) e [npm](https://www.npmjs.com/) instalados.

**Instruções**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/camiexemplar/CP-FRONT04.git]
    cd [CP-FRONT04]
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O aplicativo estará disponível localmente em `http://localhost:5173`.

---
