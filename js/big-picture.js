const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');



const isUrlSame = (element) => (this.url === element.url);

const getCurrentPictureData = (evt) => {
  const url = evt.target.querySelector('.picture__img').src;
  return this.posts.find(isUrlSame);
};

const renderLargePicture = (evt) => {
  const pictureData = getCurrentPictureData(evt);
  bigPictureImg.img.src = pictureData.url;
};
console.log(bigPicture);

const enlargePicture = (evt) => {
  if (evt.target.nodeName === 'A') {
    bigPicture.classList.remove('hidden');
  // renderLargePicture(evt);
  }
};

export {enlargePicture};
