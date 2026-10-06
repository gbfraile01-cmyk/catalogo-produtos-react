import { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard.jsx'
import ProdutoForm from '../components/ProdutoForm.jsx'
import { produtosIniciais } from '../data/produtos.js'
import { gerarImagem } from '../assets/placeholder.js'

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Simula uma chamada assíncrona (como um fetch) com setTimeout.
  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(produtosIniciais)
      setCarregando(false)
    }, 1800)

    // Limpeza: cancela o timer se o componente for desmontado.
    return () => clearTimeout(timer)
  }, [])

  function adicionarProduto(dados) {
    const novo = {
      ...dados,
      id: Date.now(),
      imagem: dados.imagem || gerarImagem(dados.nome),
    }
    setProdutos((atual) => [novo, ...atual])
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Mesa de Café</h1>
        <p>Utensílios para preparar café em casa, do moedor à balança.</p>
      </header>

      <main className="layout">
        <section aria-labelledby="lista-titulo">
          <h2 id="lista-titulo" className="section-title">
            Produtos {!carregando && <small>({produtos.length})</small>}
          </h2>

          {carregando ? (
            <p className="status" role="status">
              <span className="spinner" aria-hidden="true" />
              Carregando produtos...
            </p>
          ) : produtos.length === 0 ? (
            <p className="status">Nenhum produto cadastrado ainda.</p>
          ) : (
            <div className="grid">
              {produtos.map((p) => (
                <ProdutoCard
                  key={p.id}
                  nome={p.nome}
                  preco={p.preco}
                  imagem={p.imagem}
                  descricao={p.descricao}
                />
              ))}
            </div>
          )}
        </section>

        <aside>
          <ProdutoForm onAdicionar={adicionarProduto} />
        </aside>
      </main>
    </div>
  )
}
