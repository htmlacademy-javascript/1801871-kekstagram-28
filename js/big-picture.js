import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCommentList = bigPicture.querySelector('.social__comments');
const loaderMoreComments = bigPicture.querySelector('.social__comments-loader');
const body = document.querySelector('body');

const COMMENTS_PER_PORTION = 5;
let commentShown = 0;


const getCurrentPictureData = (posts, evt) => {
  const picture = evt.target.closest('.picture');
  return posts.find((element) => +picture.dataset.pictureId === element.id);
};

const renderBigPicture = (pictureData) => {
  bigPicture.querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  // bigPicture.querySelector('.social__comment-count').childNodes[0].textContent = pictureData.comments.length < NUMBER_OF_COMMENT ? `${pictureData.comments.length} из ` : `${NUMBER_OF_COMMENT} из `;
  // bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
};

const getComment = (comment) => {
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('img').src = comment.avatar;
  newComment.querySelector('img').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const getPicturesFragment = (amount, comments) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    fragment.append(getComment(comments[i]));
  }
  return fragment;
};

const renderComments = (picture) => {
  commentShown = commentShown + COMMENTS_PER_PORTION;
  const comments = picture.comments;
  if (commentShown >= comments.length) {
    commentShown = comments.length;
    loaderMoreComments.classList.add('hidden');
  }
  else {
    loaderMoreComments.classList.remove('hidden');
  }
  console.log(commentShown);
  const fragment = getPicturesFragment(commentShown, comments);
  socialCommentList.innerHTML = '';
  socialCommentList.append(fragment);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentShown = 0;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture ();
  }
};

const openBigPicture = (evt, posts) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  const pictureData = getCurrentPictureData(posts, evt);

  renderBigPicture(pictureData);
  renderComments(pictureData);
  loaderMoreComments.addEventListener('click', () => {renderComments(pictureData)});
};


export {openBigPicture, closeBigPicture};

