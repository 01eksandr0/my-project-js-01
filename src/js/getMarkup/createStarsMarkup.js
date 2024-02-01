import icon from '../../img/symbol-defs.svg';
export const createStarsMarkup = int => {
  const starsMarkup = [
    `${icon}#icon-star`,
    `${icon}#icon-star`,
    `${icon}#icon-star`,
    `${icon}#icon-star`,
    `${icon}#icon-star`,
  ];
  const goldStar = `${icon}#icon-star-gold`;
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
