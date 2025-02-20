// Javascript for Dark mode or theme in general

const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// JavaScript for Contact Form Validation

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  if (this.checkValidity()) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fill out all required fields.');
  }
});




// JavaScript for Image Slider

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 3000);

