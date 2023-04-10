import {renderPictures} from './picture.js';
import {showAlert} from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import './form.js';
import {showFilterSelection, setFiltersListener} from './filters.js';


getData()
  .then((resolve) => setFiltersListener(resolve, renderPictures))
  .then(renderPictures)
  .then(showFilterSelection)
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

