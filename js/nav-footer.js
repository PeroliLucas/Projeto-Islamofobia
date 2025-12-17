fetch('../../components/header.html')
  .then(res => {
    if (!res.ok) throw new Error('Header não encontrado');
    return res.text();
  })
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    initHeader();
  })
  .catch(err => console.error(err));

fetch('../../components/footer.html')
  .then(res => {
    if (!res.ok) throw new Error('Footer não encontrado');
    return res.text();
  })
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.error(err));

