import { handleErrors } from './postActions';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const GET_USER_ID = 'GET_USER_ID';
export const GET_USER_NAME = 'GET_USER_NAME';

export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN,
});
export const fetchUsersSuccess = (users) => ({
	type: FETCH_USERS_SUCCESS,
	payload: { users },
});
export const fetchUsersFailure = (error) => ({
	type: FETCH_USERS_FAILURE,
	payload: { error },
});
export const getUsersId = (id) => ({
	type: GET_USER_ID,
	payload: { id },
});
export const getUsersName = (name) => ({
	type: GET_USER_NAME,
	payload: { name },
});

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersBegin());
		return fetch('https://jsonplaceholder.typicode.com/users')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchUsersSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchUsersFailure(error)));
	};
};
