const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const SCALE_STEP = 25;

const increasScale = () => {
  scaleValue.value += SCALE_STEP;
};

const decreasScale = () => {
  scaleValue.value -= SCALE_STEP;
};

scaleBiggerButton.addEventListener('click', increasScale);
scaleSmallerButton.addEventListener('click', decreasScale);

export {};
