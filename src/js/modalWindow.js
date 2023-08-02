export function openModalWindow(e) {
  if (e.target.classList.contains('js-learn-btn')) {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');

    const scrollY =
      document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    // body.style.position = 'fixed';
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

    let closeModagBackdrop = document.querySelector(
      '[data-modal-close-backdrop]'
    );
    closeModagBackdrop.addEventListener('click', e => {
      if (e.currentTarget === e.target) {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        document.querySelector('[data-modal]').classList.add('is-hidden');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.querySelector('[data-modal]').classList.add('is-hidden');
      }
    });
  }
}

export function openModalIngredient(e) {
  if (e.target.classList.contains('js-btn-modal-ingredient')) {
    document
      .querySelector('[data-modal-ingredient]')
      .classList.toggle('is-hidden');

    const scrollY =
      document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    // body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;

    let closeModal = document.querySelector('[data-modal-ingredient-close]');
    closeModal.addEventListener('click', () => {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);

      document
        .querySelector('[data-modal-ingredient]')
        .classList.add('is-hidden');
    });

    let closeModagBackdropIngr = document.querySelector(
      '[data-modal-ingr-close-backdrop]'
    );
    closeModagBackdropIngr.addEventListener('click', e => {
      if (e.currentTarget === e.target) {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        document
          .querySelector('[data-modal-ingredient]')
          .classList.add('is-hidden');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document
          .querySelector('[data-modal-ingredient]')
          .classList.add('is-hidden');
      }
    });
  }
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});
