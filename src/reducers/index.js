import posts from './postsReducer';
import users from './usersReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	users,
	posts,
});

export default allReducers;
