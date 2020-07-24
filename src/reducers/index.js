import posts from './postsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	posts,
});

export default allReducers;
