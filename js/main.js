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