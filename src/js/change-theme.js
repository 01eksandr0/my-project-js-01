const body = document.body;
const change = document.querySelector('.change');
change.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
