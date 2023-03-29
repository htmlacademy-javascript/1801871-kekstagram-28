import {getRandomInteger, getRandomElement} from './randomizer.js';

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

const MIN_LIKES = 15;

const MAX_LIKES = 150;

const MIN_AVATAR_VALUE = 1;

const MAX_AVATAR_VALUE = 6;

const MIN_COMMENTS_AMOUNT = 1;

const MAX_COMMENTS_AMOUNT = 4;

const getComment = () => ({
  id: getRandomInteger(1,1000),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_VALUE, MAX_AVATAR_VALUE)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const getComments = (number) => (Array.from({length:number}, getComment));


const createPost = (item, index) => {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES , MAX_LIKES),
    comments: getComments(getRandomInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT)),
  };
};

const createPosts = (amount) => (Array.from({length: amount}, createPost));

export {createPosts};

