export const createStarsMarkup = int => {
  const starsMarkup = [
    './src/img/symbol-defs.svg#icon-star',
    './src/img/symbol-defs.svg#icon-star',
    './src/img/symbol-defs.svg#icon-star',
    './src/img/symbol-defs.svg#icon-star',
    './src/img/symbol-defs.svg#icon-star',
  ];
  const goldStar = './src/img/symbol-defs.svg#icon-star-gold';
  const number = parseFloat(int);
  starsMarkup.forEach((_, index) => {
    if (index + 1 <= number) starsMarkup[index] = goldStar;
  });
  return starsMarkup.reduce((html, item) => {
    return (
      html +
      ` <li>
                <svg height="18" width="18">
                  <use href="${item}"></use>
                </svg>
              </li>`
    );
  }, '');
};
