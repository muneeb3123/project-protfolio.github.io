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

const form = document.querySelector('#form-contact');
const email = document.querySelector('#user-email');
const error = document.querySelector('#error-msg');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    error.innerHTML = 'Email must be in Lowercase';
    event.preventDefault();
    error.style.display = 'block';
  } else {
    error.innerHTML = '';
    error.display.style = 'none';
  }
});