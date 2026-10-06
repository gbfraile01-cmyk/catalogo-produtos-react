import { useState } from 'react'

const estadoInicial = { nome: '', preco: '', descricao: '', imagem: '' }

export default function ProdutoForm({ onAdicionar }) {
  const [campos, setCampos] = useState(estadoInicial)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setCampos((atual) => ({ ...atual, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const nome = campos.nome.trim()
    const descricao = campos.descricao.trim()
    const preco = parseFloat(String(campos.preco).replace(',', '.'))

    if (!nome || !descricao || campos.preco === '') {
      setErro('Preencha nome, preço e descrição.')
      return
    }
    if (Number.isNaN(preco) || preco <= 0) {
      setErro('Informe um preço maior que zero.')
      return
    }

    onAdicionar({ nome, preco, descricao, imagem: campos.imagem.trim() })
    setCampos(estadoInicial)
    setErro('')
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">Cadastrar produto</h2>

      <label className="field">
        <span>Nome</span>
        <input
          name="nome"
          value={campos.nome}
          onChange={handleChange}
          placeholder="Ex.: Prensa Francesa"
          required
        />
      </label>

      <label className="field">
        <span>Preço (R$)</span>
        <input
          name="preco"
          type="number"
          step="0.01"
          min="0"
          value={campos.preco}
          onChange={handleChange}
          placeholder="0,00"
          required
        />
      </label>

      <label className="field">
        <span>Descrição</span>
        <textarea
          name="descricao"
          rows="3"
          value={campos.descricao}
          onChange={handleChange}
          placeholder="Conte o que torna o produto especial"
          required
        />
      </label>

      <label className="field">
        <span>URL da imagem (opcional)</span>
        <input
          name="imagem"
          type="url"
          value={campos.imagem}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      {erro && (
        <p className="form__error" role="alert">
          {erro}
        </p>
      )}

      <button className="btn" type="submit">
        Adicionar produto
      </button>
    </form>
  )
}
