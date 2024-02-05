import { getMarkupFilters } from './js/getMarkup/getMarkupFilters';
import { renderPageOne } from './js/render/renderPageOne';
import { starRating } from './js/starRating';
import { newQuote } from './js/quote';
import { sendEmail } from './js/footer-registration';

const form = document.querySelector('.form');
const listRadio = document.querySelector('.modal-rating-radio-list');

newQuote();
renderPageOne(getMarkupFilters({ page: 1, filter: 'Muscles' }));

import './js/pagination';
import './js/modal-trane';
import './js/mobile.menu';
import './js/searchExercises';
import './js/change-theme';

form.addEventListener('submit', sendEmail);
listRadio.addEventListener('click', starRating);
