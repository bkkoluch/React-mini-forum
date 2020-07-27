import { handleErrors } from './postActions';

export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

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
