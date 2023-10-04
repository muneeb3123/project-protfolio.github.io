document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.project-header, .hero-header, .myselfHd, .skillHd, .container-header, .btn-cv', {
        origin: 'bottom',
    });

    // ScrollReveal().reveal('.btn-cv', {
    //     origin: 'bottom'
    // });

    ScrollReveal().reveal('.contact-container, .box1', {
        origin: 'top',
        scale: 0.5, 
        distance: '0px'
    });

    ScrollReveal().reveal('.last', {
        origin: 'right'
    });


    ScrollReveal().reveal('.first, .skills-container', {
        origin: 'left'
    });
    ScrollReveal().reveal('.myself-paragraph', {
        opacity: 0, 
    });
});
