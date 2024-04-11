let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// let slideIndex = 1;

// // Function to show slides
// function showSlides(n) {
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("caption");

//     // Ensure slide index is within bounds
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     // Remove the "active" class from all dots
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     // Display the current slide
//     slides[slideIndex - 1].style.display = "block";

//     // Add the "active" class to the corresponding dot
//     dots[slideIndex - 1].className += " active";

//     // Update caption text
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// // Function to navigate to the previous slide
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Function to navigate to a specific slide
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// // Function to initialize the slideshow
// function initializeSlideshow() {
//     showSlides(slideIndex);
// }

// // Call the initializeSlideshow function when the DOM content is loaded
// document.addEventListener("DOMContentLoaded", initializeSlideshow);