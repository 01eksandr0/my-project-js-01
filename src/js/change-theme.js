const changeThemeBtn = document.querySelector('.change');

const changeTheme = () => {
  const link = document.getElementById('change');
  link.href = './css/layout/dark-theme.css';
};

changeThemeBtn.addEventListener('click', changeTheme);
