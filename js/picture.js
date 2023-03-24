
const createpicturesFragment = (posts) =>{
  const pictureTemplate = document.querySelector('#picture');
  const picturesFragment = document.createDocumentFragment();
  posts.forEach((element) => {
    const pictureElement = pictureTemplate.content.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    picturesFragment.append(pictureElement);
  }
  );
  return picturesFragment;
};

export {createpicturesFragment};
