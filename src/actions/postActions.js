export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const GET_POST_TITLE = 'GET_POST_TITLE';
export const GET_POST_BODY = 'GET_POST_BODY';
export const GET_POST_ID = 'GET_POST_ID';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const SEND_POST_DETAILS = 'SEND_POST_DETAILS';
export const SHOW_POST_MODAL = 'SHOW_POST_MODAL';

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

export const getPostTitle = (title) => ({
	type: GET_POST_TITLE,
	payload: { title },
});

export const getPostBody = (body) => ({
	type: GET_POST_BODY,
	payload: { body },
});

export const getPostId = (id) => ({
	type: GET_POST_ID,
	payload: { id },
});

export const deletePost = (id) => ({
	type: DELETE_POST,
	payload: { id },
});

export const addPost = (post) => ({
	type: ADD_POST,
	payload: { post },
});

export const sendPostDetails = (userId, id, title, body) => ({
	type: SEND_POST_DETAILS,
	payload: { userId, id, title, body },
});

export const showPostModal = (showModal) => ({
	type: SHOW_POST_MODAL,
	payload: showModal,
});

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsBegin());
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchPostsSuccess(json));
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
