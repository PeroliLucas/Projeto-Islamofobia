document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // PARALLAX HERO
  // ================================
  const hero = document.querySelector(".hero-teoria");
  window.addEventListener("scroll", () => {
    if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });

  // ================================
  // CARDS AUTORES (reveal on scroll)
  // ================================
  const autorCards = document.querySelectorAll(".card.autor");
  function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;
    autorCards.forEach((card) => {
      if (card.getBoundingClientRect().top < triggerBottom)
        card.classList.add("visible");
    });
  }
  window.addEventListener("scroll", revealCards);
  window.addEventListener("load", revealCards);

  // ================================
  // ACCORDION IMPACTOS SOCIAIS
  // ================================
  const impactoCards = document.querySelectorAll(".impactos-sociais .impactos");
  impactoCards.forEach((card) => {
    const title = card.querySelector("h3");
    const content = card.querySelector("p");

    title.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // FECHA TODOS
      impactoCards.forEach((c) => {
        c.classList.remove("open");
        c.querySelector("p").style.maxHeight = null;
      });

      // ABRE O CLICADO
      if (!isOpen) {
        card.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // ================================
  // CARROSSEL DE CITAÇÕES
  // ================================
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current);
  }

  // ================================
  // TABS DE FILTRO DE CARDS
  // ================================
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".card.conteudo");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;

      cards.forEach((card) => {
        if (filter === "todos" || card.classList.contains(filter)) {
          card.style.display = "block";
          card.classList.add("aos-animate");
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const estereotipoCards = document.querySelectorAll(".card-estereotipo");

  estereotipoCards.forEach((card) => {
    const btn = document.createElement("button");
    btn.classList.add("toggle-contraponto");
    btn.textContent = "Ver contraponto";
    btn.setAttribute("aria-expanded", "false");

    const contraponto = card.querySelector(".contraponto");
    contraponto.style.maxHeight = "0";
    contraponto.style.overflow = "hidden";

    card.insertBefore(btn, contraponto);

    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      if (isOpen) {
        card.classList.remove("open");
        contraponto.style.maxHeight = "0";
        btn.textContent = "Ver contraponto";
        btn.setAttribute("aria-expanded", "false");
      } else {
        card.classList.add("open");
        contraponto.style.maxHeight = contraponto.scrollHeight + "px";
        btn.textContent = "Ocultar contraponto";
        btn.setAttribute("aria-expanded", "true");
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  document.querySelectorAll(".linha-tempo .evento button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const contexto = btn.nextElementSibling;
      const aberto =
        contexto.style.maxHeight && contexto.style.maxHeight !== "0px";
      contexto.style.maxHeight = aberto ? "0" : contexto.scrollHeight + "px";
      btn.textContent = aberto ? "Ver contexto" : "Ocultar contexto";
    });
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });

  document.querySelectorAll("[data-glossario]").forEach((term) => {
    // Criar tooltip dinamicamente
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = term.getAttribute("title");
    term.appendChild(tooltip);

    // Remover atributo title para não aparecer tooltip nativo
    term.removeAttribute("title");

    term.addEventListener("click", (e) => {
      e.stopPropagation(); // evita fechar ao clicar no próprio termo
      term.classList.toggle("aberto");
    });
  });

  // Fechar qualquer tooltip ao clicar fora
  document.addEventListener("click", () => {
    document.querySelectorAll(".glossario.aberto").forEach((t) => {
      t.classList.remove("aberto");
    });
  });
}); // fim DOMContentLoaded

// ================================
// AOS INIT
// ================================
AOS.init({
  duration: 1000,
  once: true,
});
