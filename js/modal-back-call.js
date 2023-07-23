(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-back-call-open]"),
    closeModalBtn: document.querySelector("[data-modal-back-call-close]"),
    modal: document.querySelector("[data-modal-back-call]"),
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
