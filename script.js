// Desenvolvido por beandy durante aula na Cell.Lep Tech

// console.log('Olá Mundo!')

// fazendo a ligação do JS com os elementos no HTML
const labelNome = document.querySelector('#labelNome')
// console.log(labelNome)
const imgLogo = document.getElementById('imgLogo')

const nome = prompt('Digite seu nome')
// console.log(nome)
labelNome.innerText = nome

const images = [
'html.png', 
'css.png', 
'js.png'
]

// indice da lista de imagem
let proximaImagem = 0

imgLogo.addEventListener('click', () => {
  proximaImagem++

  if(proximaImagem == images.length){
    proximaImagem = 0
  }
  // console.log(proximaImagem)

  imgLogo.src = 'img/' + images[proximaImagem]
})