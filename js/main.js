import {createPosts} from './mockup.js';
import {getPicturesFragment} from './picture.js';
// import {enlargePicture} from './big-picture.js';

const NUMBER_OF_POSTS = 25;

const posts = createPosts(NUMBER_OF_POSTS);

const pictureContainer = document.querySelector('.pictures');
pictureContainer.appendChild(getPicturesFragment(posts));

// 1231313123
const bigPicture = document.querySelector('.big-picture');
const isImgUploadClick = (evt) => evt.target.closest('.img-upload') !== null;
// const isUrlSame = (element) => (this.url === element.url);

const getCurrentPictureData = (evt) => {
  const picture = evt.target.closest('.picture');
  const url = picture.querySelector('.picture__img').src;
  const urlUp = url.match(/photos\/\d+\.jpg/)[0];
  return posts.find((element) => urlUp === element.url);
};

const renderLargePicture = (evt) => {
  const pictureData = getCurrentPictureData(evt);
  bigPicture.querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
};



const enlargePicture = function (evt) {
  if (!isImgUploadClick(evt)) {
    bigPicture.classList.remove('hidden');
    renderLargePicture(evt);
  }
};

pictureContainer.addEventListener('click', enlargePicture);
