export default function () {
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const mobileMenu = document.querySelector('.mobile-menu');
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      mobileMenu.classList.toggle('_active');
    });
  }
}
