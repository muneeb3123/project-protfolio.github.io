document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.project-header, .hero-header, .myselfHd, .skillHd, .container-header', {
        origin: 'top'
    });

    ScrollReveal().reveal('.btn-cv, .skills-container', {
        origin: 'bottom'
    });

    ScrollReveal().reveal('.contact-container, .box1', {
        origin: 'top',
        scale: 0.5, 
        distance: '0px'
    });

    ScrollReveal().reveal('.last', {
        origin: 'right'
    });


    ScrollReveal().reveal('.first', {
        origin: 'left'
    });
    ScrollReveal().reveal('.myself-paragraph', {
        opacity: 0, 
    });
});
