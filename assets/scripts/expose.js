// expose.js
window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  // TODO
  const hornSelector = document.getElementById('horn-select');
  hornSelector.addEventListener('change', updateHornImage);
  hornSelector.addEventListener('change', setAudio);

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound);

  const volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('input', changeVolume);
}

function updateHornImage() {
  const image = document.querySelector('img');
  const userSelection = (document.getElementById('horn-select')).value;

  if (userSelection === 'air-horn') {
    image.src = 'assets/images/air-horn.svg';
  } 
  else if (userSelection === 'car-horn') {
    image.src = 'assets/images/car-horn.svg';
  }
  else if (userSelection === 'party-horn') {
    image.src = 'assets/images/party-horn.svg'
  }
  else {
    image.src = 'no-image.png'
  }
}

function setAudio() {
  const audio = document.querySelector('audio');
  const userSelection = (document.getElementById('horn-select')).value;

  if (userSelection === 'air-horn') {
    audio.src = 'assets/audio/air-horn.mp3';
  }
  else if (userSelection === 'car-horn') {
    audio.src = 'assets/audio/car-horn.mp3';
  }
  else if (userSelection === 'party-horn') {
    audio.src = 'assets/audio/party-horn.mp3'
  }
}

function playSound() {
  const audio = document.querySelector('audio');
  const userSelection = (document.getElementById('horn-select')).value;
  if (userSelection === 'party-horn') {
    jsConfetti.addConfetti();
  }
  audio.play();
}

function changeVolume() {
  const audio = document.querySelector('audio');
  const icon = document.querySelector('#volume-controls img');
  const volume = document.getElementById('volume').value;
  audio.volume = volume / 100; //the volume property sets the volume as a value between 0 and 1

  if (volume === 0) {
    icon.src = 'assets/icons/volume-level-0.svg';
    icon.alt = 'Volume level 0';
  }
  else if (volume < 33) {
    icon.src = 'assets/icons/volume-level-1.svg';
    icon.alt = 'Volume level 1';
  }
  else if (volume < 67) {
    icon.src = 'assets/icons/volume-level-2.svg';
    icon.alt = 'Volume level 2';
  }
  else {
    icon.src = 'assets/icons/volume-level-3.svg';
    icon.alt = 'Volume level 3';
  }
}