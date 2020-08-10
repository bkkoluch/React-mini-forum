export const ROUTES = {
	ROOT: '/',
	USER_DETAILS: '/user_details/:userId',
	POST_DETAILS: '/user_details/:userId/:postId',
};

export const URLS = {
	USERS: 'https://jsonplaceholder.typicode.com/users',
	POSTS: 'https://jsonplaceholder.typicode.com/posts',
	COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
};

export const getData = (url, fetchBeginFunction, callbackSuccess, callbackError) => {
	return (dispatch) => {
		dispatch(fetchBeginFunction());
		return fetch(url)
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(callbackSuccess(json));
				return json;
			})
			.catch((error) => dispatch(callbackError(error)));
	};
};

export const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};
