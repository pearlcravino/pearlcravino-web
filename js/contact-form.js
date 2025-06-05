<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const thankYouMsg = document.getElementById("thankYouMessage");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (res.ok) {
          form.reset();
          thankYouMsg.style.display = "block";
        } else {
          thankYouMsg.textContent = "❌ Something went wrong. Please try again.";
          thankYouMsg.style.color = "red";
          thankYouMsg.style.display = "block";
        }
      } catch (err) {
        thankYouMsg.textContent = "⚠️ Network error. Please try later.";
        thankYouMsg.style.color = "red";
        thankYouMsg.style.display = "block";
      }
    });
  });
</script>
