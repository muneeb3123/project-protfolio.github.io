document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal(' .hero-header, .myselfHd, .skillHd, .container-header, .btn-cv', {
        origin: 'bottom',
    });

    ScrollReveal().reveal('.contact-container, .box1, .skill-1', {
        origin: 'top',
        scale: 0.5, 
        distance: '0px'
    });

    ScrollReveal().reveal('.last, .works-div', {
        origin: 'right'
    });


    ScrollReveal().reveal('.first', {
        origin: 'left'
    });
    ScrollReveal().reveal('.myself-paragraph', {
        opacity: 0, 
    });
});
