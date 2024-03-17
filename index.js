const hamburger = document.querySelector(".hamburger");
const remove = document.querySelector(".remove-hamburger");
const big = document.querySelector(".big");
hamburger.addEventListener("click", () => {
  big.classList.add("active");
});
remove.addEventListener("click", () => {
  big.classList.remove("active");
});
