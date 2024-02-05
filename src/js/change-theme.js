const changeThemeBtn = document.querySelector('.change');

const changeTheme = () => {
  const link = document.getElementById('change');
  link.src = './js/dark-theme.js';
};
changeThemeBtn.addEventListener('click', changeTheme);
