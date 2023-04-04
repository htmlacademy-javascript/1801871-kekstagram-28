const slider = document.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  start: [20],
  step: 10,
  range: {
      'min': 0,
      'max': 100
  }
});
