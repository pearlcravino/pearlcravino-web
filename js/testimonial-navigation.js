<script>
  let index = 1;
  const cards = document.querySelectorAll('.testimonial-cards .card');

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  }

  document.addEventListener("DOMContentLoaded", updateCarousel);
</script>
