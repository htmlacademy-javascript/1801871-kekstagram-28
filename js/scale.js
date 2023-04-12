import {preview} from './util.js';

const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  INITIAL: 100,
};

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');


const onBiggerButtonClick = () => {
  const scaleValueInt = +scaleValue.value.slice(0, -1);
  if (scaleValueInt >= Scale.MAX) {
    scaleValue.value = `${Scale.MAX}%`;
  } else {
    scaleValue.value = `${scaleValueInt + Scale.STEP}%`;
  }
  preview.style.transform = `scale(${+scaleValue.value.slice(0, -1) / 100})`;
};

const onSmallerButtonClick = () => {
  const scaleValueInt = +scaleValue.value.slice(0, -1);
  if (scaleValueInt <= Scale.MIN) {
    scaleValue.value = `${Scale.MIN}%`;
  } else {
    scaleValue.value = `${scaleValueInt - Scale.STEP}%`;
  }
  preview.style.transform = `scale(${+scaleValue.value.slice(0, -1) / 100})`;
};

const clearScale = () => {
  preview.style.transform = `scale(${Scale.INITIAL / 100})`;
};

scaleBiggerButton.addEventListener('click', onBiggerButtonClick);
scaleSmallerButton.addEventListener('click', onSmallerButtonClick);


export {clearScale};
