const btnVaciar = document.querySelector('.btn-container a[href=""]');
const tbody = document.querySelector('tbody');

btnVaciar.addEventListener('click', () => {
  tbody.innerHTML = '';
});