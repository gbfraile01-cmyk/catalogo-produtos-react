# Catálogo de Produtos (React + Vite)

Aplicação front-end que exibe um catálogo de produtos e permite cadastrar novos itens.
Exercício focado em componentes, props, state, formulário controlado e `useEffect`.

## Conceitos aplicados

- **Componentes e props:** `ProdutoCard` recebe `nome`, `preco`, `imagem` e `descricao`.
- **`useState`:** guarda a lista de produtos, o estado de carregamento e os campos do formulário.
- **`.map()`:** renderiza os cards dinamicamente, com `key` única.
- **`useEffect` + `setTimeout`:** simula o carregamento inicial (1,8 s) com mensagem "Carregando produtos..." e limpeza do timer.
- **Formulário controlado:** nome, preço e descrição obrigatórios, com validação e mensagem de erro.

## Estrutura

```
src/
├── assets/       # gerador de imagem placeholder
├── components/   # ProdutoCard, ProdutoForm
├── data/         # produtos mockados
├── pages/        # Home
├── App.jsx
├── main.jsx
└── styles.css
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).
