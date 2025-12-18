function loadComponent(id, path) {
  fetch(path)
  .then(res => res.text())
  .then(html => {
    const base = window.location.hostname.includes('github.io') ? '/Projeto-Islamofobia/' : '';
    const element = document.getElementById(id);
    element.innerHTML = html.replace(/\/Projeto-Islamofobia\//g, base);
  })
  .catch(err => console.error(`Erro ao carregar ${path}`, err))
}

const basePath = window.location.hostname.includes('github.io') ? '/Projeto-Islamofobia/' : '/';

loadComponent('header', basePath + 'components/header.html');
loadComponent('footer', basePath + 'components/footer.html');