const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleImg = document.querySelector('.img-upload__preview');


const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const INITIAL_SCALE = 100;

const onClickIncreasScale = () => {
  const scaleValueInt = +scaleValue.value.slice(0,-1);
  if (scaleValueInt >= MAX_SCALE) {
    scaleValue.value = `${MAX_SCALE}%`;
  } else {
    scaleValue.value = `${scaleValueInt + SCALE_STEP}%`;
  }
  scaleImg.style.transform = `scale(${+scaleValue.value.slice(0,-1) / 100})`;
};

const onClickDecreasScale = () => {
  const scaleValueInt = +scaleValue.value.slice(0,-1);
  if (scaleValueInt <= MIN_SCALE) {
    scaleValue.value = `${MIN_SCALE}%`;
  } else {
    scaleValue.value = `${scaleValueInt - SCALE_STEP}%`;
  }
  scaleImg.style.transform = `scale(${+scaleValue.value.slice(0,-1) / 100})`;
};
const clearScale = () => {
  scaleImg.style.transform = `scale(${INITIAL_SCALE / 100})`;
};

scaleBiggerButton.addEventListener('click', onClickIncreasScale);
scaleSmallerButton.addEventListener('click', onClickDecreasScale);


export {clearScale};
