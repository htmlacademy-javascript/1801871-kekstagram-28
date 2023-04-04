import {createPosts} from './mockup.js';
import {renderPictures} from './picture.js';
import {} from './form.js';
import {} from './scale.js';


const NUMBER_OF_POSTS = 25;


const posts = createPosts(NUMBER_OF_POSTS);

renderPictures(posts);


