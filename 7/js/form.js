import {isEscapeKey} from './util.js';
import {clearScale} from './scale.js';

const fileInput = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const body = document.querySelector('body');

const ERROR_TEXT = 'Ошибка валидации';
const MAX_HASHTAG_AMOUNT = 5;


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateHashtag = (hashtag) => {
  const regexp = /^#[a-zа-яё0-9]{1,20}$/i;
  return regexp.test(hashtag);
};

const validateHashtagAmount = (hashtags) => hashtags.length <= MAX_HASHTAG_AMOUNT;

const validateUniqHashtag = (hashtags) => hashtags.length === new Set(hashtags).size;

const validateHashtags = (value) => {
  const tags = value.trim().toLowerCase().split(' ');
  if(tags.length === 1 && tags[0] === '') {
    tags.length = 0;
  }
  console.log(tags);
  console.log(`${validateHashtagAmount(tags) }validateHashtagAmount`);
  console.log(`${tags.every(validateHashtag) }validateHashtag`);
  console.log(tags.every(()=>false));
  console.log(`${validateUniqHashtag(tags) }validateUniqHashtag(tags)`);
  return validateHashtagAmount(tags) && tags.every(validateHashtag) && validateUniqHashtag(tags);
};
pristine.addValidator(hashtagField, validateHashtags, ERROR_TEXT);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const validete = pristine.validate();
  if(validete) {
    imgUploadForm.submit();
  }
});


const openImgSetting = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeImgSetting = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
  clearScale();
};


const isTextFieldFocused = () => (document.activeElement === hashtagField || document.activeElement === commentField);

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused) {
    evt.preventDefault();
    closeImgSetting();
  }
}


const onChangeFileInput = () => {
  openImgSetting();
};

const onClickCancelButton = () => {
  closeImgSetting();
};


fileInput.addEventListener('change', onChangeFileInput);
imgUploadCancelButton.addEventListener('click', onClickCancelButton);

// commentField.addEventListener('focus', () => {
//   document.removeEventListener('keydown', onDocumentKeydown);
// });
// commentField.addEventListener('blur', () => {
//   document.addEventListener('keydown', onDocumentKeydown);
// });
// hashtagField.addEventListener('focus', () => {
//   document.removeEventListener('keydown', onDocumentKeydown);
// });
// hashtagField.addEventListener('blur', () => {
//   document.addEventListener('keydown', onDocumentKeydown);
// });


// commentField.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     console.log('Отменяем всплытие, капитан')
//     evt.stopPropagation();
//   }
// });

export{};
