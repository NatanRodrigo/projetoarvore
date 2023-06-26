function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    //se tiver sem ligth mode,manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
