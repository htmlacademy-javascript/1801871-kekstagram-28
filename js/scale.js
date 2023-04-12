const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleImg = document.querySelector('.img-upload__preview');

const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  INITIAL: 100,
};

const onClickIncreasScale = () => {
  const scaleValueInt = +scaleValue.value.slice(0, -1);
  if (scaleValueInt >= Scale.MAX) {
    scaleValue.value = `${Scale.MAX}%`;
  } else {
    scaleValue.value = `${scaleValueInt + Scale.STEP}%`;
  }
  scaleImg.style.transform = `scale(${+scaleValue.value.slice(0, -1) / 100})`;
};

const onClickDecreasScale = () => {
  const scaleValueInt = +scaleValue.value.slice(0, -1);
  if (scaleValueInt <= Scale.MIN) {
    scaleValue.value = `${Scale.MIN}%`;
  } else {
    scaleValue.value = `${scaleValueInt - Scale.STEP}%`;
  }
  scaleImg.style.transform = `scale(${+scaleValue.value.slice(0, -1) / 100})`;
};

const clearScale = () => {
  scaleImg.style.transform = `scale(${Scale.INITIAL / 100})`;
};

scaleBiggerButton.addEventListener('click', onClickIncreasScale);
scaleSmallerButton.addEventListener('click', onClickDecreasScale);


export {clearScale};
