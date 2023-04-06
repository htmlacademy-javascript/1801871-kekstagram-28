const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const getNumberInString = (numberString) => {
  const formattedString = numberString.toString().replaceAll(/[a-z()%]/g, '');
  return formattedString ? Number(formattedString) : NaN;
};

export {isEscapeKey, isEnterKey, getNumberInString};
