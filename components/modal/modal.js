const modalBtn = document.querySelector("#modal-btn");
const ctModal = document.querySelector("#km-modal");
const ctModalParent = document.querySelector(".km-modal-dialog");
const modalClose = document.querySelector(".km-modal-close");

modalBtn.addEventListener("click", () => {
  ctModal.classList.add("km-modal-active");
  ctModalParent.classList.add("km-dialog-active");
});

modalClose.addEventListener("click", () => {
  ctModal.classList.remove("km-modal-active");
  ctModalParent.classList.remove("km-dialog-active");
});
