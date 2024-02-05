const changeThemeBtn = document.querySelector('.change');

const changeTheme = () => {
  const link = document.getElementById('change');
  console.log(link.getAttribute('href'));
};

changeThemeBtn.addEventListener('click', changeTheme);
