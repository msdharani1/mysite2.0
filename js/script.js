window.onload = function() {
    const container = document.querySelector('.container1');
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image-container img');
  
    // Clone images to create a loop
    imageContainer.innerHTML += imageContainer.innerHTML;
  
    // Function to scroll the images horizontally
    function scrollImages() {
      // Increment scroll position gradually for smooth scrolling
      container.scrollLeft += 1;
  
      // Reset scroll position to the beginning once all images have been scrolled
      if (container.scrollLeft >= imageContainer.offsetWidth / 2) {
        container.scrollLeft = 0;
      }
    }
  
    // Start scrolling loop
    setInterval(scrollImages, 20); // Adjust interval for smoother scrolling
  };
  