import {isEscapeKey} from './util.js';
import {clearScale} from './scale.js';
import {resetEfects} from './effects.js';
import {sendData} from './api.js';

const fileInput = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const imgUploadFormButton = document.querySelector('.img-upload__submit');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const body = document.querySelector('body');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const ERROR_TEXT = 'Ошибка валидации';
const MAX_HASHTAG_AMOUNT = 5;

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загружаю...'
};


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateHashtag = (hashtag) => {
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  return regexp.test(hashtag);
};

const validateHashtagAmount = (hashtags) => hashtags.length <= MAX_HASHTAG_AMOUNT;

const validateUniqHashtag = (hashtags) => hashtags.length === new Set(hashtags).size;

const validateHashtags = (value) => {
  const formattedString = value.trim().toLowerCase();
  if (!formattedString) {
    return true;
  }
  const tags = formattedString.split(' ');
  return validateHashtagAmount(tags) && tags.every(validateHashtag) && validateUniqHashtag(tags);
};
pristine.addValidator(hashtagField, validateHashtags, ERROR_TEXT);

const blockSubmitButton = () => {
  imgUploadFormButton.disabled = true;
  imgUploadFormButton.textContent = SubmitButtonText.SENDING;
};

const unBlockSubmitButton = () => {
  imgUploadFormButton.disabled = false;
  imgUploadFormButton.textContent = SubmitButtonText.IDLE;
};

function onNotErrorWindowClick (evt) {
  if(!evt.target.closest('.error__inner')){
    document.querySelector('.error').remove();
    body.removeEventListener('keydown', onAlertWindowKeydown, {once:true});
  }
};

function onAlertWindowKeydown (evt) {
  if (isEscapeKey(evt)) {
    document.querySelector('.error').remove();
    body.removeEventListener('click', onNotErrorWindowClick, {once:true});
  }
};


const showAlert = () => {
  body.append(errorTemplate.cloneNode(true));
  const closeButton = document.querySelector('.error__button');
  closeButton.addEventListener('click', ()=>{
    document.querySelector('.error').remove();
  });
  body.addEventListener('click', onNotErrorWindowClick, {once:true});
  body.addEventListener('keydown', onAlertWindowKeydown, {once:true});
};

const setSubmiteForm = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const data = new FormData(evt.target);
      sendData(data)
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err.message);
          }
        )
        .finally(unBlockSubmitButton);
    }
  });
};

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
  resetEfects();
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

export {setSubmiteForm, closeImgSetting};
