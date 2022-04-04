let texto = 'Hola soy Erick';

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar(texto);