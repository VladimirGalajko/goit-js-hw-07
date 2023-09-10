import { galleryItems } from './gallery-items.js';

const galleryUl = document.querySelector('.gallery');

galleryUl.addEventListener('click', handleClick);
galleryUl.insertAdjacentHTML('beforeend', createListLi(galleryItems));

function createListLi(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `
    )
    .join('');
}

let modal = null;

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentImg = event.target.closest('.gallery__image');
  const enlargePicture = galleryItems.find(
    ({ original }) => original === currentImg.dataset.source
  );

  modal = basicLightbox.create(`
  <div class="modal">
    <img src= ${enlargePicture.original} alt="${enlargePicture.alt}" />
    </div>
  `);
  modal.show();
  document.addEventListener('keydown', logEscape);
}



function logEscape({ key }) {    
  if (key === 'Escape' && modal ) {
    modal.close();
    modal = null;
    document.removeEventListener('keydown', logEscape);
  }
}
