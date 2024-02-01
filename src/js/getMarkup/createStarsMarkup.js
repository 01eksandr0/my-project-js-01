export const createStarsMarkup = int => {
  const starsMarkup = [
    '/img/symbol-defs.svg#icon-star',
    './../img/symbol-defs.svg#icon-star',
    './../ img / symbol - defs.svg#icon - star',
    './../img/symbol-defs.svg#icon-star',
    './../img/symbol-defs.svg#icon-star',
  ];
  const goldStar =
    'https://01eksandr0.github.io/goit-js-hw-11/src/img/symbol-defs.svg#icon-star-gold';
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
