// Функция для проверки длины строки

const isStringLengthCorrect = (string, length) => (string.length <= length);

// Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  const stringLowerCaseNoSpace = string.split(' ').join('').toLowerCase();
  return stringLowerCaseNoSpace === stringLowerCaseNoSpace.split('').reverse().join('');
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const getNumberInString = (numberString) => (numberString.toString().replaceAll(/\D/g, '')) ? numberString.toString().replaceAll(/\D/g, '') : NaN;

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

isStringLengthCorrect();
isPalindrome();
getNumberInString();
formatStringToPattern();

