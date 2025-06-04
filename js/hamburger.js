document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");

      // Optional: toggle hamburger icon (≡ to ✕)
      if (hamburger.innerHTML === "&#9776;") {
        hamburger.innerHTML = "&times;";
      } else {
        hamburger.innerHTML = "&#9776;";
      }
    });
  }
});