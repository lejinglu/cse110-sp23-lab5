// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');

  // change image based on horn selected
  hornSelect.addEventListener('change', function() {
    const hornValue = hornSelect.value;
    if (hornValue === 'air-horn') {
      hornImage.setAttribute('src', 'assets/images/air-horn.svg');
      hornAudio.setAttribute('src', 'assets/audio/air-horn.mp3');
    } 
    else if (hornValue === 'car-horn') {
      hornImage.setAttribute('src', 'assets/images/car-horn.svg');
      hornAudio.setAttribute('src', 'assets/audio/car-horn.mp3');
    } 
    else if (hornValue === 'party-horn') {
      hornImage.setAttribute('src', 'assets/images/party-horn.svg');
      hornAudio.setAttribute('src', 'assets/audio/party-horn.mp3');
    } 
    else {
      hornImage.setAttribute('src', 'assets/images/no-image.png');
    }
  });

  const volumeRange = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  // change volume icon based on horn selected
  volumeRange.addEventListener('input', function() {
    const volumeValue = volumeRange.value;
    if (volumeValue == 0) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    } 
    else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } 
    else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } 
    else {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
  });

  const playButton = document.querySelector('button');

  // on button click, play selected horn audio
  playButton.addEventListener('click', function() {
    const volumeValue = volumeRange.value;

    hornAudio.volume = volumeValue / 100;
    hornAudio.play();
    
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}