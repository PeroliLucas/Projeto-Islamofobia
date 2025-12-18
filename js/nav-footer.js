function loadComponent(id, path) {
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error('Erro ao carregar ' + path);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

const basePath = location.hostname.includes('github.io')
  ? '/Projeto-Islamofobia/'
  : '/';

loadComponent('header', basePath + 'components/header.html');
loadComponent('footer', basePath + 'components/footer.html');
