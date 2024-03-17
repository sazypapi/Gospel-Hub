const hamburger = document.querySelector(".hamburger");
const remove = document.querySelector(".remove-hamburger");
const big = document.querySelector(".big");
const body = document.querySelector("body");
hamburger.addEventListener("click", () => {
  big.classList.add("active");
  bodyScrollLockUpgrade.disableBodyScroll(body);
});
remove.addEventListener("click", () => {
  big.classList.remove("active");
  bodyScrollLockUpgrade.enableBodyScroll(body);
});
