import {createPosts} from './mockup.js';
import {renderPictures} from './picture.js';
import './form.js';
import './scale.js';
import './effects.js';


const NUMBER_OF_POSTS = 25;


const posts = createPosts(NUMBER_OF_POSTS);

renderPictures(posts);


