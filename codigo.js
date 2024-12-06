const slider = document.querySelector('.noticias-slider');
const totalSlides = document.querySelectorAll('.noticia-item').length;
let currentIndex = 0;

function moveSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveSlider();
}

// Intervalo para movimiento automático
setInterval(nextSlide, 3000);

// Funciones para botones (si quieres permitir navegación manual)
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);


