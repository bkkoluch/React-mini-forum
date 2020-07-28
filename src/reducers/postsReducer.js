import {
	FETCH_POSTS_BEGIN,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	GET_POST_TITLE,
	GET_POST_BODY,
	GET_POST_ID,
	DELETE_POST,
	ADD_POST,
	SEND_POST_DETAILS,
	SHOW_POST_MODAL,
} from './../actions/postActions';

const initialState = {
	posts: [],
	loading: false,
	error: null,
	showPostModal: false,
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
		case GET_POST_ID:
			return {
				...state,
				id: action.payload.id,
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(
					(post) => post.id !== action.payload.id
				),
			};
		case ADD_POST:
			return {
				...state,
				posts: state.posts.concat(action.payload.post),
			};
		case SEND_POST_DETAILS:
			return {
				...state,
				sentPost: action.payload,
			};
		case SHOW_POST_MODAL:
			return {
				...state,
				showPostModal: !state.showPostModal,
			};
		default:
			return state;
	}
};

export default postsReducer;
