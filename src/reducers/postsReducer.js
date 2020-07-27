import {
	FETCH_POSTS_BEGIN,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	GET_POST_TITLE,
	GET_POST_BODY,
} from './../actions/postActions';

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload.posts,
			};
		case FETCH_POSTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				posts: [],
			};
		case GET_POST_TITLE:
			return {
				...state,
				title: action.payload.title,
			};
		case GET_POST_BODY:
			return {
				...state,
				body: action.payload.body,
			};
		default:
			return state;
	}
};

export default postsReducer;
