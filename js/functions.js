// Функция для проверки длины строки

const isStringLengthCorrect = (string, length) => (string.length <= length);

// Функция для проверки, является ли строка палиндромом
const flipsTheString = (string) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    newString = newString + string[string.length - 1 - i];
  }
  return newString;
};

const removesSpaces = (string) => string.replaceAll(' ','');

const removesSpacesSplitJoin = (string) => string.split(' ').join('');

const isPalindrome = (string) => {
  const stringLowerCase = removesSpaces(string).toLowerCase();
  return stringLowerCase === flipsTheString(stringLowerCase);
};

const isPalindromeSplitReverseJoin = (string) => {
  const stringLowerCase = removesSpaces(string).toLowerCase();
  return stringLowerCase === stringLowerCase.split('').reverse().join('');
};
// Оставить один вариант?

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const getNumberInString = function(string) {
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

const getNumberInStringRealAdvanced = (numberString) => numberString.toString().replaceAll(/\D/g, '');
// можно указать [^0-9] есть ли разница?


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
const addSymbol = (addableLength, symbols) => {
  if (symbols.length >= addableLength) {
    return symbols.slice(0,addableLength);
  }
  let addSymbols = '';
  let howMuchAdd = addableLength;
  while(addSymbols.length < addableLength) {
    addSymbols = symbols.slice(0, howMuchAdd) + addSymbols;
    howMuchAdd = howMuchAdd - symbols.length;
  }
  return addSymbols;
};

const formatStringToPattern = (string, minLength, symbols) => (string.length >= minLength) ? string : addSymbol(minLength - string.length , symbols) + string;

const formatStringToPatternPadStart = (string, minLength, symbols) => {
  if ((minLength - string.length) % symbols.length) {
    return string.padStart(minLength ,symbols);
  }
};
