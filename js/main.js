const menuIcon = document.querySelector('.menuIcon');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.closeIcon');
const hamburger = document.querySelector('.hamburger');
function toggleMenu() {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('show-menu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}
hamburger.addEventListener('click', toggleMenu);
const menuItem = document.querySelectorAll('.menuItem');
menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

//Here's the example I use
const body = document.querySelector('body');
const section = document.createElement('section');

const popup = document.querySelector('.popup');
popup.addEventListener('click', function() {
    const container = document.createElement('div');
    container.className = 'popupContent'
    section.innerHTML = `
    <h1>¡¡¡SURPRISE!!!</h1>
    <p>This is my first pop up, can you guess?</p>
    <button class="closePopup">Ok, bye!</button>
    `;

    body.appendChild(container);
    container.appendChild(section);

    const closePopup = document.querySelector('.closePopup');
    closePopup.addEventListener('click', function() {
        body.removeChild(container);
    });
});