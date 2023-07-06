// Scroll reveal animation for features section
const features = document.querySelectorAll('.feature');

function scrollReveal() {
  features.forEach(feature => {
    const featurePosition = feature.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (featurePosition < screenPosition) {
      feature.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', scrollReveal);