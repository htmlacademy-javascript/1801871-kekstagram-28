const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createListOfIds = () => {
  const list = new Array(25);
  let i = 1;
  list.fill(1);
  return list.map((element)=>{
    element = i;
    i++;
    return element;
  });
};

const LIST_OF_IDS = createListOfIds();

const DESCRIPTIONS_PHOTO = ['Крутое фото горы', 'Крутое фото холма', 'Крутое фото дома', 'Крутое фото озера', 'Очень крутое фото кота'];

const getId = () => {
  const i = getRandomInteger(0, LIST_OF_IDS.length - 1);
  const id = LIST_OF_IDS[i];
  LIST_OF_IDS.splice(i, 1);
  return id;
};

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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getComments = (number) => {
  let id = 10;
  const comments = [];
  const getComment = () => {
    id = id + getRandomInteger(1,100);
    return {
      id: id,
      avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
      message: MESSAGE[getRandomInteger(0,5)],
      name: NAMES[getRandomInteger(0,7)],
    };
  };
  for (let i = 0; i < number; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getRandomDescriptionPhoto = () => DESCRIPTIONS_PHOTO[getRandomInteger(0, 4)];


const createPost = () => {
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomDescriptionPhoto(),
    likes: getRandomInteger(15 , 150),
    comments: getComments(getRandomInteger(1,4)),
  };
};

const createPosts = (number) => (Array.from({length: number}, createPost));

createPosts(25);
