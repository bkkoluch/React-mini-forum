import { URLS, getData } from 'utils/utils';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const GET_POSTS_AMOUNT = 'GET_POSTS_AMOUNT';
export const GET_POST_DETAILS = 'GET_POST_DETAILS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
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
export const getPostsAmount = (amount) => ({
	type: GET_POSTS_AMOUNT,
	payload: { amount },
});
export const getPostsDetails = (id, title, body) => ({
	type: GET_POST_DETAILS,
	payload: { id, title, body },
});
export const addPost = (post) => ({
	type: ADD_POST,
	payload: { post },
});
export const deletePost = (id) => ({
	type: DELETE_POST,
	payload: { id },
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
	return getData(URLS.POSTS, fetchPostsBegin, fetchPostsSuccess, fetchPostsFailure);
};

export const addPostToApi = (postTitle, postBody, userId) => {
	return () => {
		fetch(URLS.POSTS, {
			method: 'POST',
			body: JSON.stringify({
				title: postTitle,
				body: postBody,
				userId: userId,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	};
};

export const deletePostFromApi = (id) => {
	return () => {
		fetch(URLS.POSTS + '/' + id, {
			method: 'DELETE',
		});
	};
};
