// Funcion para buscar un div en la pagina
document.getElementById("arrowButton").addEventListener("click", function () {
  const targetDiv = document.querySelector(".container-videos");
  targetDiv.scrollIntoView({ behavior: "smooth" });
});

// Detectar el scroll para aplicar animaciones
window.addEventListener("scroll", function () {
  const targetDiv = document.querySelector(".content-calendary");
  const rect = targetDiv.getBoundingClientRect();
  const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

});
// Funcion para mostrar el video completo
document.getElementById("arrowButton").addEventListener("click", function () {
  const targetDiv = document.querySelector(".container-videos");
  window.scrollTo({
      top: targetDiv.offsetTop - 150, // Ajusta '100' para más o menos margen
      behavior: "smooth"
  });
});
