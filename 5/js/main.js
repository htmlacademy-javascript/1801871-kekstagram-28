import {createPosts} from './mockup.js';
import {getPicturesFragment} from './picture.js';

const NUMBER_OF_POSTS = 25;

const posts = createPosts(NUMBER_OF_POSTS);

const pictureContainer = document.querySelector('.pictures');
pictureContainer.appendChild(getPicturesFragment(posts));


