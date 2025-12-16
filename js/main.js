const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);

/* ===============================
   REVEAL AO SCROLL (GLOBAL)
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const elementosReveal = document.querySelectorAll(
    ".card.autor"
  );

  if (elementosReveal.length === 0) return;

  function revelarElementos() {
    const limite = window.innerHeight * 0.85;

    elementosReveal.forEach(el => {
      if (el.getBoundingClientRect().top < limite) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revelarElementos);
  revelarElementos();
});