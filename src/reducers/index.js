import postsReducer from './postsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	postsReducer,
});

export default allReducers;
