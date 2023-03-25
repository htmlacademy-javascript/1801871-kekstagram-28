import {createPosts} from './mockup.js';
import {createPicturesFragment} from './picture.js';

const NUMBER_OF_POSTS = 25;

const posts = createPosts(NUMBER_OF_POSTS);

const picturesPlace = document.querySelector('.pictures');
picturesPlace.appendChild(createPicturesFragment(posts));


