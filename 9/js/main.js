import {renderPictures} from './picture.js';
import {showAlert} from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import {getData} from './api.js';
import {setSubmiteForm, closeImgSetting} from './form.js';

getData()
  .then((response)=>renderPictures(response))
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setSubmiteForm(closeImgSetting);