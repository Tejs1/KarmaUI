const toastBtn = document.querySelector("#km-toast-btn");
const toast = document.querySelector(".km-toast-action");
const undoBtn = document.querySelector("#km-undo");
toastBtn.addEventListener("click", () => {
  toast.classList.add("km-toast-active");
});

undoBtn.addEventListener("click", () => {
  toast.classList.remove("km-toast-active");
});
