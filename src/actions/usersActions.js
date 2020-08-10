import { getData } from './postsActions';
import { URLS } from 'utils/utils';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';

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
export const getUserDetails = (id, name) => ({
	type: GET_USER_DETAILS,
	payload: { id, name },
});

export const fetchUsers = () => {
	return getData(URLS.USERS, fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure);
};
