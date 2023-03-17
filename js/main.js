const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = ['Крутое фото горы', 'Крутое фото холма', 'Крутое фото дома', 'Крутое фото озера', 'Очень крутое фото кота'];

const NUMBER_OF_POSTS = 25;

const LIST_OF_IDS = Array.from({ length: NUMBER_OF_POSTS }, (v, k) => k + 1);

const MIN_LIKES = 15;

const MAX_LIKES = 150;

const MIN_AVATAR_VALUE = 1;

const MAX_AVATAR_VALUE = 6;

const MIN_COMMENTS_AMOUNT = 1;

const MAX_COMMENTS_AMOUNT = 4;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomElement = (array) => (array[getRandomInteger(0, array.length)]);


const getComments = (number) => {
  let id = 10;
  const getComment = () => {
    id = id + getRandomInteger(1,100);
    return {
      id: id,
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_VALUE, MAX_AVATAR_VALUE)}.svg`,
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES),
    };
  };
  return Array.from({length:number}, getComment);
};

const createPost = () => {
  const id = LIST_OF_IDS.splice(getRandomInteger(0, NUMBER_OF_POSTS - 1), 1);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES , MAX_LIKES),
    comments: getComments(getRandomInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT)),
  };
};

const createPosts = (amount) => (Array.from({length: amount}, createPost));


