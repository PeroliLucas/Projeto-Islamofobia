document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // AOS INIT
  // ================================
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1000, once: true });
  }

  // ================================
  // PARALLAX HERO
  // ================================
  const hero = document.querySelector(".hero-teoria");
  if (hero) {
    window.addEventListener("scroll", () => {
      hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
  }

  // ================================
  // CARDS AUTORES (reveal on scroll)
  // ================================
  const autorCards = document.querySelectorAll(".card.autor");
  const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.85;
    autorCards.forEach(card => {
      if (card.getBoundingClientRect().top < triggerBottom) {
        card.classList.add("visible");
      }
    });
  };
  if (autorCards.length > 0) {
    window.addEventListener("scroll", revealCards);
    window.addEventListener("load", revealCards);
  }

  // ================================
  // ACCORDION IMPACTOS SOCIAIS
  // ================================
  const impactoCards = document.querySelectorAll(".impactos-sociais .impactos");
  impactoCards.forEach(card => {
    const title = card.querySelector("h3");
    const content = card.querySelector("p");
    if (!title || !content) return;

    title.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // Fecha todos
      impactoCards.forEach(c => {
        c.classList.remove("open");
        const p = c.querySelector("p");
        if (p) p.style.maxHeight = null;
      });

      // Abre o clicado
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

  const showSlide = index => {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  };

  if (slides.length > 0 && prevBtn && nextBtn) {
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

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;
      cards.forEach(card => {
        if (!card) return;
        if (filter === "todos" || card.classList.contains(filter)) {
          card.style.display = "block";
          card.classList.add("aos-animate");
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ================================
  // CARDS ESTEREÓTIPOS COM CONTRAPONTO
  // ================================
  const estereotipoCards = document.querySelectorAll(".card-estereotipo");

  estereotipoCards.forEach(card => {
    const contraponto = card.querySelector(".contraponto");
    if (!contraponto) return;

    const btn = document.createElement("button");
    btn.classList.add("toggle-contraponto");
    btn.textContent = "Ver contraponto";
    btn.setAttribute("aria-expanded", "false");

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

  // ================================
  // LINHA DO TEMPO
  // ================================
  document.querySelectorAll(".linha-tempo .evento button").forEach(btn => {
    btn.addEventListener("click", () => {
      const contexto = btn.nextElementSibling;
      if (!contexto) return;
      const aberto = contexto.style.maxHeight && contexto.style.maxHeight !== "0px";
      contexto.style.maxHeight = aberto ? "0" : contexto.scrollHeight + "px";
      btn.textContent = aberto ? "Ver contexto" : "Ocultar contexto";
    });
  });

  // ================================
  // PROGRESS BAR
  // ================================
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }

  // ================================
  // TOOLTIP GLOSSÁRIO
  // ================================
  document.querySelectorAll("[data-glossario]").forEach(term => {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = term.getAttribute("title") || "";
    term.appendChild(tooltip);
    term.removeAttribute("title");

    term.addEventListener("click", e => {
      e.stopPropagation();
      term.classList.toggle("aberto");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".glossario.aberto").forEach(t => t.classList.remove("aberto"));
  });

}); // fim DOMContentLoaded
