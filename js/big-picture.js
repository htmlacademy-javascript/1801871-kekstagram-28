import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCommentList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');


const isImgUploadClick = (evt) => evt.target.closest('.img-upload') !== null;


const getCurrentPictureData = (posts, evt) => {
  const picture = evt.target.closest('.picture');
  const url = picture.querySelector('.picture__img').src;
  const urlEnd = url.match(/photos\/\d+\.jpg/)[0];
  return posts.find((element) => urlEnd === element.url);
};

const renderLargePicture = (pictureData) => {
  bigPicture.querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.social__comment-count').childNodes[0].textContent = pictureData.comments.length < 5 ? `${pictureData.comments.length} из ` : '5 из ';
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
};

const getComment = (comment) => {
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('img').src = comment.avatar;
  newComment.querySelector('img').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const createFragmentComments = (pictureData) => {
  const fragment = document.createDocumentFragment();
  pictureData.comments.forEach((comment)=>{
    fragment.append(getComment(comment));
  });
  return fragment;
};

const renderComments = (fragment) => {
  socialComment.innerHTML = '';
  const comments = fragment.querySelectorAll('li');
  if (comments.length < 5) {
    comments.forEach((element) => {
      socialCommentList.append(element);
    });
  }
};

const closePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture ();
  }
};

const enlargePicture = (evt, posts) => {
  if (!isImgUploadClick(evt)) {
    bigPicture.classList.remove('hidden');
    const pictureData = getCurrentPictureData(posts, evt);
    renderLargePicture(pictureData);
    renderComments(createFragmentComments(pictureData));
    body.classList.add('modal-open');

    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export {enlargePicture, closePicture};

