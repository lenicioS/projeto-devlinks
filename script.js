function toggleMode() {
  const html = document.documentElement
  // Vai trocar de Dark para Light
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a img
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "Imagem de Lenicio Silva, olhando para um quadro, silhueta e fundo Vermelho.")
   } else {
    // se tiver sem light mode, manter a img dark
    img.setAttribute("src", "assets/avatar-dark.png")
    img.setAttribute("alt", "Imagem de Lenicio Silva, olhando para um quadro, silhueta e fundo Roxo.")
   }

}
