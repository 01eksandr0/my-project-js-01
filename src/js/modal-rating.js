import { apiInstance } from './services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const parStar = document.querySelector('.modal-rating-rating');

const backdrop = document.querySelector('.modal-rating-background');
const backgroundTrane = document.querySelector('.modal-trane-background');
const formEl = document.querySelector('.modal-rating-form');
const closeButton = document.querySelector('.modal-rating-btn-close');

const closeModal = () => {
  backgroundTrane.classList.add('modal-trane-background-active');
  backdrop.classList.remove('modal-rating-background-active');
};
const escCloseModal = e => e.key === 'Escape' && closeModal();

const closeBtnCloseModal = () => closeModal();

export const openModalRating = e => {
  backgroundTrane.classList.remove('modal-trane-background-active');
  backdrop.classList.add('modal-rating-background-active');
  formEl.dataset.id = e.target.dataset.id;
  addEventListener('keydown', escCloseModal);
};
