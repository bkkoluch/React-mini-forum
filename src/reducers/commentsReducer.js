import {
	FETCH_COMMENTS_BEGIN,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_FAILURE,
} from '../actions/commentActions';

const initialState = {
	comments: [],
	loading: true,
	error: null,
};

const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				loading: false,
				comments: action.payload.comments,
			};
		case FETCH_COMMENTS_FAILURE:
			return {
				...state,
				error: action.payload.error,
				comments: [],
			};
		default:
			return state;
	}
};

export default commentsReducer;
