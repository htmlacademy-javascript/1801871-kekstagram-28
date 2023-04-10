import {renderPictures} from './picture.js';
import {showAlert, debounce} from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import {showFilterSelection, setFiltersListener} from './filters.js';


const RERENDER_DELAY = 500;

getData()
  .then((resolve) => setFiltersListener(resolve, debounce(renderPictures,RERENDER_DELAY)))
  .then(renderPictures)
  .then(showFilterSelection)
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

