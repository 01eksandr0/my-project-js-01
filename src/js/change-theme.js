const changeThemeBtn = document.querySelector('.change');
const link = document.querySelector('#dynamicStyles');
changeThemeBtn.addEventListener('click', () => {
  if (link.href === 'http://localhost:5173/css/layout/favorite-section.css') {
    link.href = './css/layout/dark-theme.css';
  } else {
    link.href = './css/layout/favorite-section.css';
  }
});
