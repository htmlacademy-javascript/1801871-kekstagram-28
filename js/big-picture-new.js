import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCommentList = bigPicture.querySelector('.social__comments');
const loadMoreCommentsButton = bigPicture.querySelector('.social__comments-loader');
const bigPictureCloseButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

let socialComments = bigPicture.querySelectorAll('.social__comment');


const bigPictureImg = bigPicture.querySelector('img');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureLikesAmount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsAmount = bigPicture.querySelector('.comments-count');
const commentsCurrentAmount = bigPicture.querySelector('.comment-count-first');

const COMMENTS_PER_PORTION = 5;
let commentShown = 0;


const getCurrentPicture = (posts, evt) => {
  const picture = evt.target.closest('.picture');
  return posts.find((element) => +picture.dataset.pictureId === element.id);
};


const getComment = (comment) => {
  const newComment = socialComment.cloneNode(true);
  const newCommentImg = newComment.querySelector('img');
  newComment.classList.add('hidden');
  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const addComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((element) => {
    fragment.append(getComment(element));
  });
  socialCommentList.innerHTML = '';
  socialCommentList.append(fragment);
  socialComments = bigPicture.querySelectorAll('.social__comment');
};

const renderComments = () => {
  commentShown += COMMENTS_PER_PORTION;
  if (commentShown >= socialComments.length) {
    commentShown = socialComments.length;
    loadMoreCommentsButton.classList.add('hidden');
  } else {
    loadMoreCommentsButton.classList.remove('hidden');
  }
  const commentsNotShown = socialCommentList.querySelectorAll('.hidden');

  commentsCurrentAmount.textContent = commentShown;
  if (commentsNotShown.length > 5) {
    for (let i = 0; i < 5; i++) {
      commentsNotShown[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < commentsNotShown.length; i++) {
      commentsNotShown[i].classList.remove('hidden');
    }
  }
};

const onLoadMoreButton = () => {
  renderComments();
};

const renderBigPicture = (posts) => {
  bigPictureImg.src = posts.url;
  bigPictureCaption.textContent = posts.description;
  bigPictureLikesAmount.textContent = posts.likes;
  bigPictureCommentsAmount.textContent = posts.comments.length;
  addComments(posts.comments);
  renderComments();
};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentShown = 0;
};

const onCloseButton = () => {
  closeBigPicture();
};


const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture ();
  }
};

const openBigPicture = (evt, posts) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  const picture = getCurrentPicture(posts, evt);
  renderBigPicture(picture);
};

loadMoreCommentsButton.addEventListener('click', onLoadMoreButton);

bigPictureCloseButton.addEventListener('click', onCloseButton);

export {openBigPicture, closeBigPicture};
