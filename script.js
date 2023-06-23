function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Matheus Jasbick abraçado com  sua namorada')
  } else {
  //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Matheus Jasbick, usando roupa preta com um casaco azul amarrado nas costas"
    )
  }
}
