document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = (path, position = 'end') => {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`${path} não encontrado`);
        return res.text();
      })
      .then(html => {
        if (position === 'start') document.body.insertAdjacentHTML('afterbegin', html);
        else document.body.insertAdjacentHTML('beforeend', html);

        if (typeof initHeader === 'function') initHeader();
      })
      .catch(err => console.error(err));
  };

  loadComponent('/components/header.html', 'start');
  loadComponent('/components/footer.html', 'end');
});