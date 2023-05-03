// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  // const inputForm = document.querySelector("form");
  const inputTxt = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");
  // const pitch = document.querySelector("#pitch");
  // const pitchValue = document.querySelector(".pitch-value");
  // const rate = document.querySelector("#rate");
  // const rateValue = document.querySelector(".rate-value");
  const speakButton = document.querySelector("button");
  const image = document.querySelector("#explore img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // speak when button clicked
  speakButton.addEventListener("click", (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // utterThis.pitch = pitch.value;
    // utterThis.rate = rate.value;
    synth.speak(utterThis);

    // change image when speaking
    image.src = "assets/images/smiling-open.png";
    
    utterThis.onend = () => {
      image.src = "assets/images/smiling.png";
    };
    inputTxt.blur();
  });
  
}
