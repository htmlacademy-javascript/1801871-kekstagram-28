import {createPosts} from './mockup.js';
import {renderPictures} from './picture.js';


const NUMBER_OF_POSTS = 25;


const posts = createPosts(NUMBER_OF_POSTS);

renderPictures(posts);


