import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createArrayElement } from './js/createArrayElement';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const loader = document.querySelector('.loader');
const formEl = document.querySelector('.form');
const listEl = document.querySelector('.list');
const gallery = new SimpleLightbox('.list a');
const formSubmit = event => {
  event.preventDefault();
  if (listEl.children.length > 0) listEl.innerHTML = '';
  loader.style.display = 'inline-block';
  // ========================================
  const searchParams = new URLSearchParams({
    key: '41368993-aecccf11b76826fadfd0039f8',
    q: formEl.search.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  // =========================================
  formEl.reset();
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.json())
    .then(json => {
      const marcup = createArrayElement(json.hits);
      if (marcup.length < 1) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
        loader.style.display = 'none';
      } else {
        listEl.insertAdjacentHTML('afterbegin', marcup.join(' '));
        loader.style.display = 'none';
        gallery.refresh();
      }
    })
    .catch(err => console.log(err));
};

formEl.addEventListener('submit', formSubmit);
