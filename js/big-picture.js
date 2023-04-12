import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');

const socialComment = bigPicture.querySelector('.social__comment');
const socialCommentList = bigPicture.querySelector('.social__comments');
const loadMoreCommentsButton = bigPicture.querySelector('.social__comments-loader');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureLikesAmount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsAmount = bigPicture.querySelector('.comments-count');
const commentsCurrentAmount = bigPicture.querySelector('.comment-count-first');

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const COMMENTS_PER_PORTION = 5;

let commentShown = 0;

const comments = [];


const getCurrentPicture = (posts, evt) => {
  const picture = evt.target.closest('.picture');
  return posts.find((element) => +picture.dataset.pictureId === element.id);
};


const getComment = (comment) => {
  const newComment = socialComment.cloneNode(true);
  const newCommentImg = newComment.querySelector('img');
  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};


const renderComments = () => {
  commentShown += COMMENTS_PER_PORTION;
  if (commentShown >= comments.length) {
    commentShown = comments.length;
    loadMoreCommentsButton.classList.add('hidden');
  } else {
    loadMoreCommentsButton.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentShown; i++) {
    fragment.append(getComment(comments[i]));
  }
  socialCommentList.innerHTML = '';
  socialCommentList.append(fragment);
  commentsCurrentAmount.textContent = commentShown;
};

const onLoadMoreButtonClick = () => {
  renderComments();
};

const renderBigPicture = (posts) => {
  bigPictureImg.src = posts.url;
  bigPictureCaption.textContent = posts.description;
  bigPictureLikesAmount.textContent = posts.likes;
  bigPictureCommentsAmount.textContent = posts.comments.length;
  renderComments();
};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentShown = 0;
  comments.length = 0;
};

const onCloseButtonClick = () => {
  closeBigPicture();
};


function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (evt, posts) => {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  const picture = getCurrentPicture(posts, evt);

  comments.push(...picture.comments);
  renderBigPicture(picture);
};

loadMoreCommentsButton.addEventListener('click', onLoadMoreButtonClick);

bigPictureCloseButton.addEventListener('click', onCloseButtonClick);

export {openBigPicture, closeBigPicture};

