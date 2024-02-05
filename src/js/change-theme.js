const body = document.body;
const change = document.querySelector('.change');

const checkTheme = () => {
  if (JSON.parse(localStorage.getItem('theme'))) {
    body.classList.toggle('dark-mode');
    change.checked = true;
  }
};
checkTheme();
change.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', true);
  } else localStorage.setItem('theme', false);
});
