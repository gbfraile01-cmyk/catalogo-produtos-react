import { gerarImagem } from '../assets/placeholder.js'

// Dados mockados — nenhuma API real é necessária.
export const produtosIniciais = [
  {
    id: 1,
    nome: 'Moedor Manual Cerâmico',
    preco: 189.9,
    descricao: 'Moagem uniforme com 18 níveis de regulagem e corpo em aço escovado.',
  },
  {
    id: 2,
    nome: 'Coador de Café V60',
    preco: 79.0,
    descricao: 'Coador de porcelana com estrias internas para extração equilibrada.',
  },
  {
    id: 3,
    nome: 'Chaleira de Bico Fino',
    preco: 259.5,
    descricao: 'Capacidade de 900 ml e bico de ganso para um fluxo preciso de água.',
  },
  {
    id: 4,
    nome: 'Balança com Timer',
    preco: 149.0,
    descricao: 'Precisão de 0,1 g, cronômetro integrado e superfície antiderrapante.',
  },
].map((p) => ({ ...p, imagem: gerarImagem(p.nome) }))
