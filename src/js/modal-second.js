(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-open]'),
    closeModalBtn: document.querySelector('[data-buy-close]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    document.body.classList.toggle('overflow');
    refs.modal.classList.toggle('is-buy-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-readmore-open]'),
    closeModalBtn: document.querySelector('[data-readmore-close]'),
    modal: document.querySelector('[data-readmore-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    document.body.classList.toggle('overflow');
    refs.modal.classList.toggle('is-readmore-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingredients-open]'),
    closeModalBtn: document.querySelector('[data-ingredients-close]'),
    modal: document.querySelector('[data-ingredients-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    document.body.classList.toggle('overflow');
    refs.modal.classList.toggle('is-ingredients-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    document.body.classList.toggle('overflow');
    refs.modal.classList.toggle('is-location-hidden');
  }
})();
