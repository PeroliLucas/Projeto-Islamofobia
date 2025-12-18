if (window.location.hostname.includes('github.io')) {
  const base = document.createElement('base');
  base.href = '/Projeto-Islamofobia/';
  document.head.appendChild(base);
}

function loadComponent(id, path) {
  fetch(path)
  .then(res => res.text())
  .then(html => {
    const element = document.getElementById(id);
    element.innerHTML = html;
  })
  .catch(err => console.error(`Erro ao carregar ${path}`, err))
}

const basePath = window.location.hostname.includes('github.io') ? '/Projeto-Islamofobia/' : '/';

loadComponent('header', basePath + 'components/header.html');
loadComponent('footer', basePath + 'components/footer.html');