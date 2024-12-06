const sliderWrapper = document.querySelector(".slider-wrapper");
const newsItems = document.querySelectorAll(".news-item");
const totalItems = newsItems.length;

let index = 0;

// Función para mover el slider
function moveSlider() {
    const offset = -index * 100; // Calcula el desplazamiento en %
    sliderWrapper.style.transform = `translateX(${offset}vw)`; // Mueve el slider
    index = (index + 1) % totalItems; // Reinicia al llegar al final
}

// Desplazamiento automático cada 3 segundos
setInterval(() => {
    moveSlider();
}, 3000);

