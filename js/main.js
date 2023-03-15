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

const getComments = () => {
 let commentsNumber = getRandomInteger(1,5);
};

const getRandomDescriptionPhoto = () => DESCRIPTIONS_PHOTO[getRandomInteger(0, 4)];



const createPost = () => {
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomDescriptionPhoto(),
    likes: getRandomInteger(15 , 150),
    comments: getComments(),
  };
};
