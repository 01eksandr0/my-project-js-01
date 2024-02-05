import icons from '../../img/symbol-defs.svg';
import { allApi } from '../requests';
import { createStarsMarkup } from './createStarsMarkup';

export const getElemById = async id => {
  const modal = document.querySelector('.modal-trane-background');
  const stor = JSON.parse(localStorage.getItem('favorites')) || [];

  const {
    data: {
      gifUrl,
      name,
      rating,
      target,
      bodyPart,
      equipment,
      popularity,
      burnedCalories,
    },
  } = await allApi.getCartById(id);
  const textBtn = stor.includes(id)
    ? 'Remove&nbsp;to&nbsp;favorites&nbsp;'
    : 'Add&nbsp;to&nbsp;favorites&nbsp;';
  const markup = `<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" >
        <use href="${icons}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${gifUrl}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">${name}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${rating}</p>
          <ul class="modal-trane-list-stars">${createStarsMarkup(rating)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${target}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${bodyPart}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${equipment}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${popularity}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${burnedCalories}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            ${textBtn} <svg height="24" width="24">
            <use href="${icons}#icon-heart"></use> </svg>
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${id}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;
  modal.innerHTML = markup;
};
