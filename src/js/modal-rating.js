import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { allApi } from './requests';

const backdrop = document.querySelector('.modal-rating-background');
const backgroundTrane = document.querySelector('.modal-trane-background');
const formEl = document.querySelector('.modal-rating-form');
const closeButton = document.querySelector('.modal-rating-btn-close');
const arrayStars = document.querySelectorAll('.modal-rating-svg-star');

const closeModal = () => {
  backgroundTrane.classList.add('modal-trane-background-active');
  backdrop.classList.remove('modal-rating-background-active');
  arrayStars.forEach(i => i.classList.remove('modal-rating-svg-star-gold'));
  formEl.reset();
};
const escCloseModal = e => {
  e.key === 'Escape' && closeModal();
  removeEventListener('keydown', escCloseModal);
};
const closeClickBackdrop = e => {
  if (e.target === e.currentTarget) closeModal();
};
const closeBtnCloseModal = () => closeModal();

export const openModalRating = e => {
  backgroundTrane.classList.remove('modal-trane-background-active');
  backdrop.classList.add('modal-rating-background-active');
  formEl.dataset.id = e.target.dataset.id;
  addEventListener('keydown', escCloseModal);
  backdrop.addEventListener('click', closeClickBackdrop);
};

const ratingFormSubmit = async e => {
  e.preventDefault();
  if (
    e.target.radiostar.value &&
    e.target.email.value &&
    e.target.comment.value
  ) {
    const data = {
      rate: parseInt(e.target.radiostar.value),
      email: e.target.email.value,
      review: e.target.comment.value,
    };

    const response = await allApi.getResultPatchRating(
      e.target.dataset.id,
      data
    );
    if (response === 200) {
      iziToast.success({
        position: 'topCenter',
        message: 'Thank you for appreciating the exercise',
      });
      closeModal();
      e.target.reset();
    } else if (response === 409) {
      iziToast.error({
        position: 'topCenter',
        message: 'You can rate this exercise only once',
      });
    }
  } else
    iziToast.error({
      position: 'topCenter',
      message: 'Please fill in all fields',
    });
};

closeButton.addEventListener('click', closeBtnCloseModal);
formEl.addEventListener('submit', ratingFormSubmit);
