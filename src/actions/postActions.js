export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
	type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: { posts },
});

export const fetchPostsFailure = (error) => ({
	type: FETCH_POSTS_FAILURE,
	payload: { error },
});

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsBegin());
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchPostsSuccess(json));
				// console.log(json);
				return json;
			})
			.catch((error) => dispatch(fetchPostsFailure(error)));
	};
};

export const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};
