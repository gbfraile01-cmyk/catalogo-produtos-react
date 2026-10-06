export function formatarPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="card">
      <img className="card__img" src={imagem} alt={nome} loading="lazy" />
      <div className="card__body">
        <h3 className="card__title">{nome}</h3>
        <p className="card__desc">{descricao}</p>
        <p className="card__price">{formatarPreco(preco)}</p>
      </div>
    </article>
  )
}
