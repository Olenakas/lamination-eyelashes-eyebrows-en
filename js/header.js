let prevScrollpos = window.pageYOffset;
const headerContainer = document.getElementById("main-header");

window.addEventListener("scroll", function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headerContainer.style.top = "0";
    headerContainer.classList.remove("scrolled-header");
  } else {
    headerContainer.style.top = "-140px";
    headerContainer.classList.add("scrolled-header");
  }
  prevScrollpos = currentScrollPos;
});
