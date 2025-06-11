document.addEventListener("DOMContentLoaded", function () {
  let activeIndex = 2;
  const track = document.getElementById("testimonialTrack");
  const cards = document.querySelectorAll(".testimonial-card");

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === activeIndex) {
        card.classList.add("active");
      }
    });

    const cardWidth = cards[0].offsetWidth + 20; // width + gap
    const offset = (activeIndex - 2) * cardWidth; // center is 3rd card
    track.style.transform = `translateX(-${offset}px)`;
  }

  function nextSlide() {
    if (activeIndex < cards.length - 1) {
      activeIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (activeIndex > 0) {
      activeIndex--;
      updateCarousel();
    }
  }

  // expose functions to HTML onclick
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  updateCarousel();
});
