/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(
    ' .hero-header, .myselfHd, .skillHd, .contact-header , .btn-cv, .works-div',
    {
      origin: 'bottom',
    }
  );

  ScrollReveal().reveal('.contact-container, .box1, .skill-1', {
    origin: 'top',
    scale: 0.5,
    distance: '0px',
  });

  ScrollReveal().reveal('.last', {
    origin: 'right',
  });

  ScrollReveal().reveal('.first', {
    origin: 'left',
  });
  ScrollReveal().reveal('.myself-paragraph', {
    opacity: 0,
  });
});
