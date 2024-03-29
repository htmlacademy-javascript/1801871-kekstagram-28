import {openBigPicture} from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((element) => element.remove());
};

const getPicture = (element) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const PictureElementImg = pictureElement.querySelector('.picture__img');
  PictureElementImg.src = element.url;
  PictureElementImg.alt = element.description;
  pictureElement.querySelector('.picture__likes').textContent = element.likes;
  pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
  pictureElement.dataset.pictureId = element.id;
  return pictureElement;
};

const renderPictures = (posts) => {
  clearPictures();
  const fragment = document.createDocumentFragment();
  posts.forEach((post)=>{
    fragment.append(getPicture(post));
  }
  );
  pictureContainer.append(fragment);
};

const setOpenBigPictureListener = (posts) => {
  pictureContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      openBigPicture(evt, posts);
    }
  }
  );
};
export {renderPictures, setOpenBigPictureListener};
