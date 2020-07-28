import {
	FETCH_COMMENTS_BEGIN,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_FAILURE,
	COMMENT_TOGGLE,
	SHOW_COMMENTS_MODAL,
	ADD_COMMENT,
	SEND_COMMENT_DETAILS,
} from '../actions/commentActions';

const initialState = {
	comments: [],
	loading: false,
	error: null,
	show: true,
	showModal: false,
	comment: null,
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
		case COMMENT_TOGGLE:
			return {
				...state,
				show: !state.show,
			};
		case SHOW_COMMENTS_MODAL:
			return {
				...state,
				showModal: !state.showModal,
			};
		case ADD_COMMENT:
			return {
				...state,
				comments: state.comments.concat(action.payload.comment),
			};
		case SEND_COMMENT_DETAILS:
			return {
				...state,
				comment: action.payload,
			};
		default:
			return state;
	}
};

export default commentsReducer;
