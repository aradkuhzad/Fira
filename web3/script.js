// Smooth scrolling for About
document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');
  const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset + 800;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
    duration: 3000
  });
});

// Smooth scrolling for Cooking
document.querySelector('a[href="#cooking"]').addEventListener('click', function(e) {
  e.preventDefault();
  const videoSection = document.querySelector('.video-section');
  const targetPosition = videoSection.getBoundingClientRect().top + window.pageYOffset - 100;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
    duration: 3000
  });
}); 