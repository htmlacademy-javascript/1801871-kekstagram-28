import {isEscapeKey, body, preview} from './util.js';
import {clearScale} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const ERROR_TEXT = 'Ошибка валидации';

const MAX_HASHTAG_AMOUNT = 5;

const SubmitButtonText = {
  POST: 'Опубликовать',
  LOADING: 'Загружаю...',
};

const fileInput = document.querySelector('#upload-file');

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const imgUploadFormButton = document.querySelector('.img-upload__submit');

const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');


let isSuccess = '';


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


const toggleSubmitButton = (disabled = false) => {
  imgUploadFormButton.disabled = disabled;
  imgUploadFormButton.textContent = disabled ? SubmitButtonText.LOADING : SubmitButtonText.POST;
};

function closePopup () {
  if (isSuccess) {
    document.querySelector('.success__button').removeEventListener('click', oncloseButtonClick);
    document.querySelector('.success').remove();
  } else {
    document.querySelector('.error__button').removeEventListener('click', oncloseButtonClick);
    document.querySelector('.error').remove();
  }
  body.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onPopupWindowKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
}

function onDocumentClick (evt) {
  if (!evt.target.closest('.error__inner') && !evt.target.closest('.success__inner')){
    closePopup();
  }
}

function onPopupWindowKeydown (evt) {
  if (isEscapeKey(evt)) {
    closePopup();
  }
}

function oncloseButtonClick () {
  closePopup();
}


const showPopup = (template) => {
  isSuccess = (template === successTemplate);
  const clone = template.cloneNode(true);
  body.append(clone);
  const closeButton = clone.querySelector('[type="button"]');
  closeButton.addEventListener('click', oncloseButtonClick);
  body.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onPopupWindowKeydown);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const setSubmitForm = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      toggleSubmitButton(true);
      const data = new FormData(evt.target);
      sendData(data)
        .then(onSuccess)
        .then(() => (showPopup(successTemplate)))
        .catch(() => (showPopup(errorTemplate)))
        .finally(toggleSubmitButton);
    }
  });
};

const changeForUploadImg = () => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const openImgSetting = () => {
  changeForUploadImg();
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
  resetEffects();
  toggleSubmitButton();
  pristine.reset();
};


const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;


function onDocumentKeydown (evt) {

  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeImgSetting();
  }
}


const onFileInputChange = () => {
  openImgSetting();
};

const onCancelButtonClick = () => {
  closeImgSetting();
};


fileInput.addEventListener('change', onFileInputChange);
imgUploadCancelButton.addEventListener('click', onCancelButtonClick);

setSubmitForm(closeImgSetting);

