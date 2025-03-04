// Base de datos de respuestas del chatbot
const chatbotResponses = {
    'Hola': '¡Hola! ¿Cómo puedo ayudarte con tus finanzas?',
    '¿Cómo ahorro dinero?': 'Para ahorrar dinero, establece un presupuesto, reduce gastos innecesarios y automatiza tus ahorros.',
    '¿Dónde invierto 100 euros?': 'Puedes invertir 100 euros en fondos indexados, criptomonedas, microinversiones, préstamos P2P o acciones fraccionadas.',
    '¿Qué son los fondos indexados?': 'Los fondos indexados son fondos de inversión que replican el comportamiento de un índice bursátil, como el S&P 500, y suelen tener bajas comisiones.',
    '¿Qué es la diversificación?': 'La diversificación es una estrategia de inversión que consiste en repartir el dinero entre diferentes activos para reducir el riesgo.',
    '¿Cómo puedo empezar a invertir?': 'Para empezar a invertir, primero educa tu mente financiera, establece un fondo de emergencia y luego invierte en instrumentos que se alineen con tu perfil de riesgo.',
    '¿Qué es el análisis técnico?': 'El análisis técnico es un enfoque de inversión que se basa en estudiar el comportamiento pasado del mercado a través de gráficos y patrones de precios para predecir futuros movimientos.',
    '¿Qué son las criptomonedas?': 'Las criptomonedas son monedas digitales descentralizadas que utilizan criptografía para asegurar las transacciones. Algunas de las más populares son Bitcoin y Ethereum.',
    '¿Qué es un préstamo P2P?': 'Un préstamo P2P (peer-to-peer) es una forma de inversión donde las personas prestan dinero directamente a otras, sin intermediarios como bancos.',
    '¿Qué es la renta fija?': 'La renta fija son inversiones que te pagan un interés regular, como los bonos. Son consideradas de menor riesgo que las inversiones en acciones.',
    '¿Cómo invierto en bienes raíces?': 'Puedes invertir en bienes raíces a través de compra directa de propiedades, crowdfunding inmobiliario o fondos de inversión inmobiliaria (REITs).',
    'default': 'Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?'
};

function getResponse(userText) {
    return chatbotResponses[userText] || chatbotResponses['default'];
}
