document.addEventListener("DOMContentLoaded", () => {
  let activeIndex = 2;
  const track = document.getElementById("testimonialTrack");
  const cards = document.querySelectorAll(".testimonial-card");

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === activeIndex) card.classList.add("active");
    });

    const cardWidth = cards[0].offsetWidth;
    const offset = (activeIndex - 2) * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function nextSlide() {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarousel();
  }

  function prevSlide() {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  updateCarousel();
  setInterval(nextSlide, 5000);
});
