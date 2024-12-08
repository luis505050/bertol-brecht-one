function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado. Nos pondremos en contacto contigo pronto.");
    this.reset();
    closeModal();
});
