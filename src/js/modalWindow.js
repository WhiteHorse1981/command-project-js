export function openModalWindow(e) {
  if (e.target.classList.contains('js-learn-btn')) {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');

    const scrollY =
      document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;

    let closeModal = document.querySelector('[data-modal-close]');
    closeModal.addEventListener('click', () => {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);

      document.querySelector('[data-modal]').classList.add('is-hidden');
    });
  }
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});
