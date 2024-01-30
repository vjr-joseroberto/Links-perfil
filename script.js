function toggleMode () {
    /*alert("oi")*/
    const html = document.documentElement

    /*if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
    html.classList.toggle("light")
    
    // pegar img 
    const img = document.querySelector("#profile img")

    // substituir a img
    // se tiver light add img light
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/branco.png")
        img.setAttribute("alt", "Foto de Jose Roberto sorrindo, usando xyz roupa e fundo xyz")
    } else {
        // se tiver sem light, manter img normal
        img.setAttribute("src", "./assets/preto.png")
        img.setAttribute("alt", "Foto de Jose Roberto (2)")
    }
}
