import {createPosts} from './mockup.js';
import {getPicturesFragment} from './picture.js';
import {openBigPicture, closeBigPicture} from './big-picture.js';

const NUMBER_OF_POSTS = 25;
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const posts = createPosts(NUMBER_OF_POSTS);

const pictureContainer = document.querySelector('.pictures');

pictureContainer.appendChild(getPicturesFragment(posts));


pictureContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    openBigPicture(evt, posts);
  }
}
);

bigPictureCancel.addEventListener('click', closeBigPicture);
