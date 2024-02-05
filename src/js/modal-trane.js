import iziToast from 'izitoast';
import { openModalRating } from './modal-rating';
import { getElemById } from './getMarkup/addModalTraneMarkup';

const modal = document.querySelector('.modal-trane-background');
const openModallist = document.querySelector('.render-page-one-list');

const closeModal = () => {
  modal.classList.remove('modal-trane-background-active');
  document.removeEventListener('click', closeModalOutside);
  document.removeEventListener('keydown', closeModalOnEscape);
};

const closeModalOutside = event => {
  if (event.target === event.currentTarget) closeModal();
};
const closeModalOnEscape = event => {
  if (event.key === 'Escape') closeModal();
};

const addToFavorites = id => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    iziToast.success({
      message: 'Add favorite!',
      position: 'topCenter',
    });
  } else {
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.splice(1, favorites.indexOf(id)))
    );
    iziToast.error({
      title: 'Error',
      message: 'Delete in favorite',
      position: 'topCenter',
    });
  }
};

const openModal = async event => {
  if (event.target.classList.contains('workout-card__link-start')) {
    const itemId = event.target;
    getElemById(itemId.dataset.id);
    // delay function
    const timeStop = await getElemById(itemId.dataset.id);
    const modalCloseBtn = document.querySelector('.modal-trane-btn-close');
    const btnRanig = document.querySelector('.modal-trane-btn-rating');
    const btnFavorite = document.querySelector(
      '.modal-trane-btn-add-favorites'
    );
    modal.classList.add('modal-trane-background-active');
    modal.addEventListener('click', closeModalOutside);
    addEventListener('keydown', closeModalOnEscape);
    modalCloseBtn.addEventListener('click', closeModal);
    btnRanig.addEventListener('click', openModalRating);
    btnFavorite.addEventListener('click', () =>
      addToFavorites(itemId.dataset.id)
    );
  }
};

openModallist.addEventListener('click', openModal);
