export const callMobileMenu = () => {
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const mobileMenu = document.querySelector('.mobile-menu');
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      mobileMenu.classList.toggle('_active');
    });
  }
};

export const disableMobileMenuSearch = () => {
  const btnSearch = document.querySelector('.mobile-search-header__btn');
  const iconMenu = document.querySelector('.menu__icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  btnSearch.addEventListener('click', function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    mobileMenu.classList.remove('_active');
  });
};
