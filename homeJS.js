// Seleciona o container do slideshow
const slideshow = document.getElementById('slideshow');

// Inicia o índice do slide
let slideIndex = 0;

// Obtém todas as figuras dentro do slideshow
const slides = slideshow.querySelectorAll('figure');

// Função para mostrar o slide atual e ocultar os demais
function showSlide(n) {
    slides.forEach(slide => slide.style.opacity = 0);
    slides[n].style.opacity = 1;
}

// Função para mostrar o próximo slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Chama a função nextSlide a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 3000);