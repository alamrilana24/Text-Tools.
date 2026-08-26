document.addEventListener("DOMContentLoaded", function () {
    let speech = new SpeechSynthesisUtterance();
    let voices = [];
    let voiceselect = document.querySelector("select");
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice=voices[0];
        voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
    };  
voiceselect.addEventListener("change",()=> { 
speech.voice = voices[voiceselect.value];
} ); 

 document.querySelector("button").addEventListener("click", () => {
        const enteredText = document.querySelector("textarea").value;
        const error = document.querySelector(".error-para");
        error.textContent = enteredText.trim() ? "" : "Nothing to Convert! Enter text in the text area.";
        speech.text = enteredText;
        window.speechSynthesis.speak(speech);
        convertBtn.textContent = "Playing...";
        setTimeout(() => (convertBtn.textContent = "Play"), 5000);
    });
});