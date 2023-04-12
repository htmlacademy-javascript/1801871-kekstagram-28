import {renderPictures, setOpenBigPictureListener} from './picture.js';
import {showAlert, debounce} from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import {showFilterSelection, setFiltersListener} from './filters.js';


const RERENDER_DELAY = 500;

getData()
  .then((posts)=> {
    setFiltersListener(posts, debounce(renderPictures,RERENDER_DELAY));
    renderPictures(posts);
    setOpenBigPictureListener(posts);
    showFilterSelection();
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

