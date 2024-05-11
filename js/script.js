function navigateToPage(url) {
  // Open the specified URL in a new tab or window
  window.open(url, '_blank');
}

document.addEventListener("click", function() {
  var audio = document.getElementById("myAudio");
  
  // List of audio files
  var audioFiles = ["./songs/Ennadimaayavisong.wav", "./songs/FInal Inaye.wav", "./songs/irava pagala bgm.wav",  "./songs/Remo Happy Birthday BGM.mp3", "./songs/ThenmozhiInstrumentalVersion.mp3"];
  
  // Function to play random audio
  function playRandomAudio() {
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
    var randomAudioFile = audioFiles[randomIndex];
    audio.src = randomAudioFile;
    audio.play();
  }
  
  // Play random audio
  playRandomAudio();
  
  // Remove the event listener after the first click
  document.removeEventListener("click", arguments.callee);
});
