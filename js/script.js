function navigateToPage(url) {
  // Open the specified URL in a new tab or window
  window.open(url, '_blank');
}

function navigateToPage1(url) {
  // Open the specified URL in a new tab or window
  window.open(url, "_self");
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


// Hide loading screen after a delay
window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');

  // Add a delay of 2 seconds (2000 milliseconds)
  setTimeout(function () {
      loadingScreen.style.display = 'none';
      content.style.display = 'block';
  }, 2000); // Adjust the delay time as needed (in milliseconds)
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex += n;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100; // Slide width is 100% for each slide
    document.querySelector('.carousel-slider').style.transform = `translateX(${offset}%)`;
}

// Auto slide
setInterval(function() {
    moveSlide(1);
}, 5000); // Adjust auto slide interval as needed (in milliseconds)
