/* // Adicione um evento de clique em cada imagem
document.getElementById("bandeira-usa").addEventListener("click", function(){
    // Muda o idioma para inglês
    document.getElementById("texto").innerHTML = "Hello World!";
});

document.getElementById("bandeira-bra").addEventListener("click", function(){
    // Muda o idioma para português
    document.getElementById("texto").innerHTML = "Olá Mundo!";
});*/ 

function toggleFlagUSA() {
  /*alert("oi")*/
  const html = document.documentElement

  /*if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
  html.classList.toggle("USA")

  // pegar img
  const li = document.querySelector("#profile img")

  // substituir a img
  // se tiver light add img light
  if (html.classList.contains("USA")) {
    li //REVER SOBRE
    li.setAttribute(
      "alt",
      "Foto de Jose Roberto sorrindo, usando xyz roupa e fundo xyz"
    )
  } else {
    // se tiver sem light, manter img normal
    li.setAttribute("src", "./assets/preto.png")
    li.setAttribute("alt", "Foto de Jose Roberto (2)")
  }
}
