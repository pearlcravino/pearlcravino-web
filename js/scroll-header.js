let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    nav.classList.remove("sticky", "hidden");
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    nav.classList.add("hidden");
    nav.classList.remove("sticky");
  } else {
    // Scrolling up
    nav.classList.remove("hidden");
    nav.classList.add("sticky");
  }

  lastScroll = currentScroll;
});