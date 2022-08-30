const kmRating = document.querySelector(".km-rating");
const kmStar = document.querySelectorAll(".km-star");

kmStar.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    e.preventDefault();
    kmRating.classList.add("disabled");
    // console.log(star, index);
    kmStar.forEach((newStar, newIndex) => {
      console.log(newStar, newIndex);
      if (newIndex <= index) {
        newStar.classList.add("active");
      }
    });
  });
});
