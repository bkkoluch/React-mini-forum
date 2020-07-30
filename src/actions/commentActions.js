import { handleErrors } from './postActions';

export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const COMMENT_TOGGLE = 'COMMENT_TOGGLE';
export const SHOW_COMMENTS_MODAL = 'SHOW_COMMENTS_MODAL';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SEND_COMMENT_DETAILS = 'SEND_COMMENT_DETAILS';

export const fetchCommentsBegin = () => ({
	type: FETCH_COMMENTS_BEGIN,
});
export const fetchCommentsSuccess = (comments) => ({
	type: FETCH_COMMENTS_SUCCESS,
	payload: { comments },
});
export const fetchCommentsFailure = (error) => ({
	type: FETCH_COMMENTS_FAILURE,
	payload: { error },
});
export const commentToggle = () => ({
	type: COMMENT_TOGGLE,
});
export const showCommentsModal = (showModal) => ({
	type: SHOW_COMMENTS_MODAL,
	payload: { showModal },
});
export const addComment = (comment) => ({
	type: ADD_COMMENT,
	payload: { comment },
});
export const sendCommentDetails = (postId, id, name, email, body) => ({
	type: SEND_COMMENT_DETAILS,
	payload: { postId, id, name, email, body },
});

export const fetchComments = () => {
	return (dispatch) => {
		dispatch(fetchCommentsBegin());
		return fetch('https://jsonplaceholder.typicode.com/comments')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchCommentsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchCommentsFailure(error)));
	};
};
