const initialQuestions = [
    "¿Estás interesado en el servicio educativo de nuestra institución?",
    "¿Quieres saber nuestro horario de clases?",
    "¿Quieres saber nuestro plan de estudios?",
    "¿Deseas conocer nuestra fecha de inicio de clases?",
    "¿Deseas contactarte con un asesor(a) que te brinde los precios de las matrículas y pensiones?"
];

const followUpQuestions = {
    "¿Estás interesado en el servicio educativo de nuestra institución?": ["Estás interesado en el servicio educativo de nuestra institución", "Miembros de la Comunidad Educativa", "Propuesta formativa"],
    "¿Quieres saber nuestro horario de clases?": ["Horario de clases Inicial", "Horario de clases Primaria", "Horario de clases Secundaria"],
    "¿Quieres saber nuestro plan de estudios?": ["Plan de estudios Inicial", "Plan de estudios Primaria", "Plan de estudios Secundaria"]
};

const finalAnswers = {
    "Estás interesado en el servicio educativo de nuestra institución": `
        Brindamos una educación basada en competencias para que los estudiantes puedan desarrollar su potencial y contribuir al progreso de su comunidad.`,
    "Miembros de la Comunidad Educativa": `
        Nuestra comunidad incluye estudiantes, padres de familia, docentes, personal administrativo y más. Todos trabajando para un objetivo común.`,
    "Propuesta formativa": `
        Nuestra propuesta formativa se organiza en el Proyecto Educativo Curricular (PCI), abarcando un plan educativo integral.`,
    "Horario de clases Inicial": `
        <img src="src/rescurss/Imagen1.png" alt="Inicial" style="width:100%; border-radius:10px;">
        Horario de nivel inicial: Lunes a Viernes `,
    "Horario de clases Primaria": `
        <img src="src/rescurss/Imagen2.png" alt="Primaria" style="width:100%; border-radius:10px;">
        Horario de nivel primaria: Lunes a Viernes `,
    "Horario de clases Secundaria": `
        <img src="src/rescurss/Imagen3.png" alt="Secundaria" style="width:100%; border-radius:10px;">
        Horario de nivel secundaria: Lunes a Viernes `,
    "Plan de estudios Inicial": `
        <img src="src/rescurss/Imagenn1.png" alt="Inicial" style="width:100%; border-radius:10px;">`,
    "Plan de estudios Primaria": `
        <img src="src/rescurss/Imagenn2.png" alt="Primaria" style="width:100%; border-radius:10px;">`,
    "Plan de estudios Secundaria": `
        <img src="src/rescurss/Imagenn3.png" alt="Secundaria" style="width:100%; border-radius:10px;">`,
    "¿Deseas conocer nuestra fecha de inicio de clases?": `
        <img src="src/rescurss/Imagennn1.png" alt="Secundaria" style="width:100%; border-radius:10px;">
        Las clases comienzan el 03 de marzo. ¡No te lo pierdas!`,
    "¿Deseas contactarte con un asesor(a) que te brinde los precios de las matrículas y pensiones?": `
        Puedes contactarnos a los siguientes números:
        - **CHILCA**: 064-212189
        - **HUANCAYO**: 064-208201`
};

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "flex";
        chatContainer.style.zIndex = "5";
        displayWelcomeMessage();
    } else {
        chatContainer.style.display = "none";
    }
}

function displayWelcomeMessage() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; // Limpiar el contenido previo

    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "message bot-message";
    welcomeMessage.innerHTML = "¡Hola! Soy BERTIE, ¿en qué puedo ayudarte hoy?";

    chatBox.appendChild(welcomeMessage);
    displayQuestionOptions(initialQuestions);
}

function displayQuestionOptions(options) {
    const chatBox = document.getElementById("chat-box");
    options.forEach((option, index) => {
        setTimeout(() => {
            const questionOption = document.createElement("div");
            questionOption.className = "question-option";
            questionOption.innerText = option;
            questionOption.onclick = () => handleQuestion(option);
            chatBox.appendChild(questionOption);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000 * index); // Mostrar una opción a la vez con retraso
    });
}

function handleQuestion(question) {
    const chatBox = document.getElementById("chat-box");

    // Mostrar el mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = question;
    chatBox.appendChild(userMessage);

    // Eliminar las opciones de pregunta
    const options = document.querySelectorAll(".question-option");
    options.forEach(option => option.remove());

    // Simular el indicador de escritura
    const typingIndicator = createTypingIndicator();
    chatBox.appendChild(typingIndicator);

    setTimeout(() => {
        typingIndicator.remove();
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerHTML = finalAnswers[question] || "";
        chatBox.appendChild(botMessage);

        // Mostrar nuevas preguntas si las hay
        if (followUpQuestions[question]) {
            setTimeout(() => displayQuestionOptions(followUpQuestions[question]), 1000);
        } else {
            setTimeout(() => displayContinueOption(), 1000);
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // Simula el tiempo de espera antes de mostrar la respuesta
}

function displayContinueOption() {
    const chatBox = document.getElementById("chat-box");

    const continueMessage = document.createElement("div");
    continueMessage.className = "message bot-message";
    continueMessage.innerText = "¿Quieres seguir conversando con el chatbot?";

    chatBox.appendChild(continueMessage);

    const continueYes = document.createElement("div");
    continueYes.className = "question-option";
    continueYes.innerText = "Sí";
    continueYes.onclick = () => {
        // Eliminar opciones de continuar y cargar nuevas preguntas
        const continueOptions = document.querySelectorAll(".question-option");
        continueOptions.forEach(option => option.remove());

        displayQuestionOptions(initialQuestions);
    };

    const continueNo = document.createElement("div");
    continueNo.className = "question-option";
    continueNo.innerText = "No";
    continueNo.onclick = () => {
        const goodbyeMessage = document.createElement("div");
        goodbyeMessage.className = "message bot-message";
        goodbyeMessage.innerText = "¡Gracias por conversar! ¡Hasta luego!";
        chatBox.appendChild(goodbyeMessage);

        // Eliminar las opciones de continuar
        const continueOptions = document.querySelectorAll(".question-option");
        continueOptions.forEach(option => option.remove());
    };

    chatBox.appendChild(continueYes);
    chatBox.appendChild(continueNo);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function createTypingIndicator() {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.innerHTML = "<div></div><div></div><div></div>";
    return typingIndicator;
}

// Detectar clic fuera del chatbot para cerrarlo
document.addEventListener("click", function(event) {
    const chatContainer = document.getElementById("chat-container");
    const chatToggleButton = document.getElementById("chat-toggle");

    // Si el clic es fuera del contenedor del chat y del botón flotante
    if (!chatContainer.contains(event.target) && !chatToggleButton.contains(event.target)) {
        chatContainer.style.display = "none";
    }
});

// Evitar el cierre si el clic es dentro del chat
document.getElementById("chat-container").addEventListener("click", function(event) {
    event.stopPropagation();
});