import {getNumberInString, preview} from './util.js';

const DEFAULT_EFFECT = {
  start: 100,
  step: 10,
  min: 0,
  max: 100,
};

const Effect = {
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
    units: 'none',
    filter: 'grayscale',
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    units: 'none',
    filter:'sepia',
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
    units: '%',
    filter:'invert',
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
    units: 'px',
    filter: 'blur',

  },
  heat: {
    min: 1,
    max: 3,
    step: 0.1,
    units: 'none',
    filter: 'brightness',
  },
};

const effectsList = document.querySelector('.effects__list');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderValue = document.querySelector('.effect-level__value');

let currentSettings = '';

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};
hideSlider();
const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

noUiSlider.create(slider, {
  start: DEFAULT_EFFECT.start,
  step: DEFAULT_EFFECT.step,
  range: {
    'min': DEFAULT_EFFECT.min,
    'max': DEFAULT_EFFECT.max,
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
  preview.style.filter = slider.noUiSlider.get();
  sliderValue.value = getNumberInString(slider.noUiSlider.get());
};

const onEffectListChange = (evt) => {
  const currentRadio = evt.target.closest('input');
  if(currentRadio.value === 'none') {
    preview.className = '';
    preview.style.filter = '';
    hideSlider();
  } else {
    showSlider();
    currentSettings = Effect[currentRadio.value];
    preview.className = `effects__preview--${currentRadio.value}`;
    updateSlider(currentSettings);
  }
};
const resetEffects = () => {
  preview.className = '';
  preview.style.filter = '';
  hideSlider();
};

effectsList.addEventListener('change', onEffectListChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
