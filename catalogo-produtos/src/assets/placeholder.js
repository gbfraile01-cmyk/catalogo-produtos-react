// Gera uma imagem SVG (data URI) a partir do nome do produto.
// Usada quando o produto cadastrado não tem URL de imagem.
export function gerarImagem(nome = '?') {
  let hash = 0
  for (const ch of nome) hash = (hash * 31 + ch.charCodeAt(0)) % 360
  const inicial = nome.trim().charAt(0).toUpperCase() || '?'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="hsl(${hash} 45% 88%)"/>
      <circle cx="300" cy="80" r="90" fill="hsl(${hash} 50% 78%)"/>
      <text x="40" y="250" font-family="Georgia, serif" font-size="150" fill="hsl(${hash} 55% 28%)">${inicial}</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
