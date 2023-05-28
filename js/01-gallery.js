import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarcup = createMarkupGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarcup);

function createMarkupGallery(galleryItems) {

    return galleryItems
        .map(({ original, preview, description }) => 
     `<li class = "gallery__item">
  <a class = "gallery__link"  href = "${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li >`
 ).join('');
}

gallery.addEventListener("click", onClick);

const instance = basicLightbox.create(`
<img src = "" width="800" height="600">`,
    {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onClick(evt) {
    evt.preventDefault();
    const ImageSource = evt.target.dataset.source;
    if (!ImageSource ) return;
    instance.element().querySelector('img').src = ImageSource;       
        
    instance.show();
}

function onEscKeyPress(evt) {
    if (evt.code !== 'Escape') { return };
    instance.close();
}
