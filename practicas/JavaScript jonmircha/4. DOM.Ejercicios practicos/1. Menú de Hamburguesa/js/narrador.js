
const $speechSelect = document.getElementById("speech-select"),
    $speechTextarea = document.getElementById("speech-text"),
    $speechBtn = document.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();
let voices = [];
// console.log($speechSelect,$speechTextarea,$speechBtn,speechMessage);

document.addEventListener("DOMContentLoaded", e => {
    // console.log(window.speechSynthesis.getVoices()); //Para poder capturar las voces debemos llamar un evento particular del speechSynthesis que se llama onvoiceschangeg
    window.speechSynthesis.addEventListener("voiceschanged", e =>  {
        // console.log(e);
        voices = window.speechSynthesis.getVoices();
        console.log(voices);

        voices.forEach(voice => {
            const $option = document.createElement("option");
            $option.value = voice.name;
            $option.textContent = `${voice.name} - ${voice.lang}`;
            $speechSelect.appendChild($option);
        })
    });
});

document.addEventListener("change", e => {
    if(e.target === $speechSelect){
        speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        console.log(speechMessage.voice);
    }
});

document.addEventListener("click", e => {
    if(e.target === $speechBtn){
        speechMessage.text = $speechTextarea.value;
        window.speechSynthesis.speak(speechMessage);
    }
})