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
