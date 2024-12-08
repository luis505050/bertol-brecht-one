// JavaScript para la funcionalidad del carrusel
document.addEventListener("DOMContentLoaded", () => {
    const eventsWrapper = document.querySelector(".events-wrapper");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    let currentIndex = 0; // Rastrea el índice actual de la diapositiva
    const eventBlocks = document.querySelectorAll(".event-block");
    const blockWidth = eventBlocks[0].offsetWidth + 15; // Ancho del bloque + espacio entre ellos
    const totalBlocks = eventBlocks.length;

    // Mover a la diapositiva anterior
    arrowLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    // Mover a la siguiente diapositiva
    arrowRight.addEventListener("click", () => {
        if (currentIndex < totalBlocks - 4) { // Asegúrate de no ir más allá de la última diapositiva
            currentIndex++;
            updateCarouselPosition();
        }
    });

    // Actualizar la posición del carrusel
    function updateCarouselPosition() {
        const newTransform = -(currentIndex * blockWidth);
        eventsWrapper.style.transform = `translateX(${newTransform}px)`;
    }
});
