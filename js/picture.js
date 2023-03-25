const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const getPicture = (element) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = element.url;
  pictureElement.querySelector('.picture__img').alt = element.description;
  pictureElement.querySelector('.picture__likes').textContent = element.likes;
  pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
  return pictureElement;
};

const getPicturesFragment = (posts) => {
  const picturesFragment = document.createDocumentFragment();
  posts.forEach((element)=>{
    picturesFragment.append(getPicture(element));
  }
  );
  return picturesFragment;
};

export {getPicturesFragment};
