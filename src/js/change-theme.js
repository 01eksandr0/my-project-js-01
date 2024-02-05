const changeThemeBtn = document.querySelector('.change');
const link = document.querySelector('#dynamicStyles');
changeThemeBtn.addEventListener('click', () => {
  link.href = './css/layout/dark-theme.css';
});
