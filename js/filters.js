
const filterSelection = document.querySelector('.img-filters');

const MAX_RANDOM = 10;

const filtersForm = document.querySelector('.img-filters__form');

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');


const showFilterSelection = () => filterSelection.classList.remove('img-filters--inactive');


const filterOutRandom = (pictures) => pictures.slice(0,MAX_RANDOM).sort(() => Math.random() - 0.5);

const filterOutDiscussed = (pictures) => pictures.slice().sort((a, b)=>b.comments.length - a.comments.length);

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((element) => element.remove());
};

const changeCurrentFilter = (element) => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  element.classList.add('img-filters__button--active');
};


const setFiltersListener = (pictures, renderPictures) => {
  filtersForm.addEventListener('click', (evt)=> {
    if (evt.target.closest('[type=button]')) {
      clearPictures();
      changeCurrentFilter(evt.target.closest('[type=button]'));
      switch (evt.target.closest('[type=button]')) {
        case filterDefault:
          renderPictures(pictures);
          break;
        case filterRandom:
          renderPictures(filterOutRandom(pictures));
          break;
        case filterDiscussed:
          renderPictures(filterOutDiscussed(pictures));
      }
    }
  });
  return pictures;
};

export {showFilterSelection, setFiltersListener};
