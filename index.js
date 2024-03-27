const hamburger = document.querySelector(".hamburger");
const remove = document.querySelector(".remove-hamburger");
const big = document.querySelector(".big");
const body = document.querySelector("body");
// const navbar = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  big.classList.add("active");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  hamburger.style.display = "none";
  remove.style.display = "inline-block";
});
remove.addEventListener("click", () => {
  big.classList.remove("active");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  remove.style.display = "none";
  hamburger.style.display = "inline-block";
});

// let prevScrollPos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-10vh"; // Adjust this value based on your navbar height
//   }

//   prevScrollPos = currentScrollPos;
// };
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 0) {
    // Scrolling down, hide navbar
    document.querySelector("navbar").style.transform = "translateY(-10vh)";
  } else {
    // Scrolling up, show navbar
    document.querySelector("navbar").style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
