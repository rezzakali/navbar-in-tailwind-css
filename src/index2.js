const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});
