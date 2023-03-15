// Функция для проверки длины строки

const isStringLengthCorrect = (string, length) => (string.length <= length);

// Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  const formattedString = string.split(' ').join('').toLowerCase();
  return formattedString === formattedString.split('').reverse().join('');
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа


const getNumberInString = (numberString) => {
  const formattedString = numberString.toString().replaceAll(/\D/g, '');
  return formattedString ? Number(formattedString) : NaN;
};

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.


// const getSymbol = (pattern, length) => {
//   if (pattern.length >= length) {
//     return pattern.slice(0, length);
//   }
//   let addPattern = '';

//   while(addPattern.length < length - pattern.length) {
//     addPattern = addPattern + pattern;
// }
//   return pattern.slice(0, length - addPattern.length) + addPattern;
// };
// Реализация без repeat

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

// isStringLengthCorrect();
// isPalindrome();
// getNumberInString();
// formatStringToPattern();

