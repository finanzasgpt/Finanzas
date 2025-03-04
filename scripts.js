document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLi = document.querySelectorAll('nav ul li');

    window.onscroll = () => {
        var current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    };

    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatContent = document.getElementById('chat-content');

    sendButton.addEventListener('click', () => {
        const userText = userInput.value.trim();
        if (userText !== '') {
            appendMessage('Usuario', userText);
            getChatbotResponse(userText);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});

function appendMessage(sender, text) {
    const chatContent = document.getElementById('chat-content');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function getChatbotResponse(userText) {
    // Simulate a call to the chatbot response function
    const response = getResponse(userText);
    appendMessage('Chatbot', response);
}

function getResponse(userText) {
    // Placeholder function for chatbot responses
    // This function should be replaced with actual AI logic or API calls
    const responses = {
        'Hola': '¡Hola! ¿Cómo puedo ayudarte con tus finanzas?',
        '¿Cómo ahorro dinero?': 'Para ahorrar dinero, establece un presupuesto, reduce gastos innecesarios y automatiza tus ahorros.',
        '¿Dónde invierto 100 euros?': 'Puedes invertir 100 euros en fondos indexados, criptomonedas, microinversiones, préstamos P2P o acciones fraccionadas.',
        'default': 'Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?'
    };

    return responses[userText] || responses['default'];
}
