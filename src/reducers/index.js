import posts from './postsReducer';
import users from './usersReducer';
import comments from './commentsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	users,
	posts,
	comments,
});

export default allReducers;
