const arrayStars = document.querySelectorAll('.modal-rating-svg-star');
const parStar = document.querySelector('.modal-rating-rating');

export const starRating = e => {
  if (e.target.nodeName === 'INPUT') {
    parStar.textContent = `${e.target.value}.0`;
    arrayStars.forEach(i => i.classList.remove('modal-rating-svg-star-gold'));
    for (let i = 0; i < e.target.value; i++) {
      arrayStars[i].classList.add('modal-rating-svg-star-gold');
    }
  }
};
