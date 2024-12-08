// script.js
window.addEventListener('DOMContentLoaded', () => {
    const modalAd = document.getElementById('modal-ad');
    const mainContent = document.getElementById('main-content');
    const closeAdButton = document.getElementById('close-ad');

    // Cerrar el anuncio y restaurar el contenido principal
    closeAdButton.addEventListener('click', () => {
        modalAd.style.display = 'none';
        mainContent.style.filter = 'none'; // Quita el desenfoque
        document.body.style.overflow = 'auto'; // Permite desplazarse por la página
    });
});
