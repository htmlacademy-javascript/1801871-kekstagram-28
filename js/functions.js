
const isStringLengthCorrect = (string, length) => (string.length <= length);

const isPalindrome = (string) => {
  const formattedString = string.split(' ').join('').toLowerCase();
  return formattedString === formattedString.split('').reverse().join('');
};

const getNumberInString = (numberString) => {
  const formattedString = numberString.toString().replaceAll(/[a-z()%]/g, '');
  return formattedString ? Number(formattedString) : NaN;
};


const getSymbol = (pattern, length) => {
  if (pattern.length >= length) {
    return pattern.slice(0, length);
  }
  const addPattern = pattern.repeat(Math.floor(length / pattern.length));
  return pattern.slice(0, length - addPattern.length) + addPattern;
};

const formatStringToPattern = (string, minLength, pattern) => {
  if (string.length >= minLength) {
    return string;
  }
  return getSymbol(pattern , minLength - string.length) + string;
};

isStringLengthCorrect();
formatStringToPattern();
getNumberInString();
isPalindrome();
