fetch('/components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    initHeader();
  });


function initHeader() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (!navMenu.classList.contains('active')) {
      document
        .querySelectorAll('.dropdown.active')
        .forEach(d => d.classList.remove('active'));
    }
  });

  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (window.innerWidth <= 900) {
        e.preventDefault();

        const parent = toggle.parentElement;

        document
          .querySelectorAll('.dropdown.active')
          .forEach(d => {
            if (d !== parent) d.classList.remove('active');
          });

        parent.classList.toggle('active');
      }
    });
  });
}
