document.addEventListener("DOMContentLoaded", () => {

  // PARALLAX HERO
  const hero = document.querySelector('.hero-teoria');
  window.addEventListener('scroll', () => {
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });

  // CARDS AUTORES (reveal on scroll)
  const autorCards = document.querySelectorAll('.card.autor');
  function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;
    autorCards.forEach(card => {
      if(card.getBoundingClientRect().top < triggerBottom) card.classList.add('visible');
    });
  }
  window.addEventListener('scroll', revealCards);
  window.addEventListener('load', revealCards);

  // ACCORDION IMPACTOS SOCIAIS
  const impactoCards = document.querySelectorAll(".impactos-sociais .impactos");
  impactoCards.forEach(card => {
    const title = card.querySelector("h3");
    const content = card.querySelector("p");

    title.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // FECHA TODOS
      impactoCards.forEach(c => {
        c.classList.remove("open");
        c.querySelector("p").style.maxHeight = null;
      });

      // ABRE O CLICADO
      if(!isOpen){
        card.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // CARROSSEL DE CITAÇÕES
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  if(prevBtn && nextBtn && slides.length > 0){
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current);
  }

});

AOS.init({
  duration: 1000, 
  once: true      
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.card.conteudo');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if(filter === 'todos' || card.classList.contains(filter)) {
          card.style.display = 'block';
          card.classList.add('aos-animate');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

