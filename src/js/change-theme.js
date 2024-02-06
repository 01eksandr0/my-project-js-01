const body = document.body;

const change =
  parseInt(getComputedStyle(body).width) > 768
    ? document.querySelector('.change')
    : document.querySelector('.change-modal');

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
