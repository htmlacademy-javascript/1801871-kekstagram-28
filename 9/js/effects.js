import {getNumberInString} from './util.js';

const DEFAULT_EFFCTS = {
  start: 10,
  step: 10,
  min: 0,
  max: 100,
};

const EFFECTS = [
  {
    name: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    units: 'none',
    filter: 'grayscale',
  },
  {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    units: 'none',
    filter:'sepia',
  },
  {
    name: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    units: '%',
    filter:'invert',
  },
  {
    name: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    units: 'px',
    filter: 'blur',

  },
  {
    name: 'heat',
    min: 1,
    max: 3,
    step: 0.1,
    units: 'none',
    filter: 'brightness',
  },
];

let currentSettings = '';

const effectsList = document.querySelector('.effects__list');
const slider = document.querySelector('.effect-level__slider');
const picture = document.querySelector('.img-upload__preview img');
const sliderValue = document.querySelector('.effect-level__value');

const hideSlider = () => {
  slider.classList.add('hidden');
};
hideSlider();
const showSlider = () => {
  slider.classList.remove('hidden');
};

noUiSlider.create(slider, {
  start: DEFAULT_EFFCTS.start,
  step: DEFAULT_EFFCTS.step,
  range: {
    'min': DEFAULT_EFFCTS.min,
    'max': DEFAULT_EFFCTS.max,
  },
  connect: 'lower',
});

const updateSlider = (settings) => {
  slider.noUiSlider.updateOptions({
    range: {
      'min': settings.min,
      'max': settings.max,
    },
    step: settings.step,
    start: settings.max,
    format: {
      to: function (value) {
        switch(settings.units) {
          case 'none':
            return `${currentSettings.filter}(${value})`;
          case settings.units:
            return `${currentSettings.filter}(${value}${settings.units})`;
        }
      },
      from: function (value) {
        return value;
      }
    },
  });
};
const onSliderUpdate = () => {
  picture.style.filter = slider.noUiSlider.get();
  sliderValue.value = getNumberInString(slider.noUiSlider.get());
};

const onEffectListChange = (evt) => {
  const currentRadio = evt.target.closest('input');
  if(currentRadio.value === 'none') {
    hideSlider();
  } else {
    showSlider();
    currentSettings = EFFECTS.find((element)=>(element.name === currentRadio.value));
    picture.className = `effects__preview--${currentSettings.name}`;
    updateSlider(currentSettings);
  }
};
const resetEfects = () => {
  picture.className = '';
  picture.style.filter = '';
  hideSlider();
};

effectsList.addEventListener('change', onEffectListChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {resetEfects};
