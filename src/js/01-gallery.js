import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItem = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a class="gallery__item" href=${item.preview}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
  </a></div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryItem);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);
