// Seleccionar el botón flotante
const whatsappButton = document.getElementById('whatsappButton');

// Añadir evento de clic
whatsappButton.addEventListener('click', () => {
  // Configurar el número de WhatsApp y mensaje predefinido
  const whatsappNumber = '51910546586'; // Cambia este número
  const message = encodeURIComponent('¡Hola! Estoy interesado en las matriculas.'); // Personaliza el mensaje
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Redirigir directamente a WhatsApp
  window.open(whatsappURL, '_blank'); // Abre en una nueva pestaña
});
