// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const image = document.querySelector('img');
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', textToSpeech);
  //image.src = 'assets/images/smiling.png';
}

function populateVoiceList() {
  const allVoices = speechSynthesis.getVoices();
  const voiceSelector = document.getElementById('voice-select');

  for (const voice of allVoices) {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    voiceSelector.appendChild(option);
  }
}

function textToSpeech() {
  const image = document.querySelector('img');
  const textInput = document.getElementById('text-to-speak');
  const utterThis = new SpeechSynthesisUtterance(textInput.value);

  const selectedVoice = (document.getElementById('voice-select')).selectedOptions[0].getAttribute('data-name');

  for (const voice of speechSynthesis.getVoices()) {
    if (voice.name === selectedVoice) {
      utterThis.voice = voice;
    }
  }

  image.src = 'assets/images/smiling-open.png';
  speechSynthesis.speak(utterThis);

  utterThis.onend = (event) => {
    image.src = 'assets/images/smiling.png';
  };
}