//I decided to start working on Javascript to see how it would work. This code is supposed to make the image carousel functional.
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-images');
    const totalSlides = carousel.children.length; 
    let currentIndex = 0; 
  
    // To make the next button function
    document.querySelector('.next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % totalSlides; 
      carousel.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    });
  
    // To make the previous button function
    document.querySelector('.prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
      carousel.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    });
  });
  
