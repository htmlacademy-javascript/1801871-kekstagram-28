const ALERT_SHOW_TIME = 5000;

const body = document.querySelector('body');

const preview = document.querySelector('.img-upload__preview img');

const isEscapeKey = (evt) => evt.key === 'Escape';

const getNumberInString = (numberString) => {
  const formattedString = numberString.toString().replaceAll(/[a-z()%]/g, '');
  return formattedString ? Number(formattedString) : NaN;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'yellow';
  alertContainer.style.color = 'black';


  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, getNumberInString, showAlert, debounce, body, preview};
