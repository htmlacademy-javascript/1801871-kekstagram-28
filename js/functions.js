// Функция для проверки длины строки

const isLessOrEqualsLenght = function(string, lenght) {
  if (string.length <= lenght) {
    return true;
  }
  return false;
};

function isLessOrEqualsLenghtDeclaratively (string, lenght) {
  if (string.length <= lenght) {
    return true;
  }
  return false;
}

const isLessOrEqualsLenghtArrow = (string, lenght) => {
  if (string.length <= lenght) {
    return true;
  }
  return false;
};

const isLessOrEqualsLenghtArrowConditional = (string, lenght) => (string.length <= lenght);

// Функция для проверки, является ли строка палиндромом
const flipsTheString = function (string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    newString = newString + string[string.length - 1 - i];
  }
  return newString;
};

const removesSpaces = (string) => string.replaceAll(' ','');

const isPalindrome = function(string) {
  const stringUppercase = string.toUpperCase();
  const reversStringUppercase = flipsTheString(string).toUpperCase();

  if (stringUppercase === reversStringUppercase) {
    return true;
}
  return false;
};

const isPalindromeAdvanced = function(string) {
  string = removesSpaces(string);

  const stringUppercase = string.toUpperCase();
  const reversStringUppercase = flipsTheString(string).toUpperCase();

  if (stringUppercase === reversStringUppercase) {
    return true;
}
  return false;
};

const isPalindromeAdvancedArrowConditional = (string) => (removesSpaces(string).toUpperCase() === flipsTheString(removesSpaces(string)).toUpperCase());

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const  getNumberInString = function(string) {
  let numberInString = '';
  for (let i = 0; i < string.length; i++) {
    if (isNaN(Number(string[i]))) {
      continue;
    }
    numberInString = numberInString + string[i];
  }
  return (numberInString === '') ? NaN : Number(numberInString);
};
// Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:
const getNumberInStringAdvanced = function(numberString) {
  const string = numberString.toString();
  let numberInString = '';
  for (let i = 0; i < string.length; i++) {
    if (isNaN(Number(string[i]))) {
      continue;
    }
    numberInString = numberInString + string[i];
  }
  return (numberInString === '') ? NaN : Number(numberInString);
};

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
const addSymbol = function (addableLength, symbols) {
  if (symbols.lenght >= addableLength) {
    return symbols.slice(0,addableLength);
  }
  let addSymbols = '';
  let howMuchAdd = addableLength;
  while(addSymbols.length < addableLength)
  // возможно стоило использовать цикл for,чтобы не вводить howMuchAdd, но мне захотелось потренироваться использовать while
  {
    addSymbols = symbols.slice(0, howMuchAdd) + addSymbols;
    howMuchAdd = howMuchAdd - symbols.length;
  }
  return addSymbols;
};

const formatStringToPattern = function (string, minLength, symbols) {
  if (string.length >= minLength) {
    return string;
  }

  return addSymbol(minLength - string.length , symbols) + string;
};

const formatStringToPatternArrowConditional = (string, minLength, symbols) => (string.length >= minLength) ? string : addSymbol(minLength - string.length , symbols) + string;
