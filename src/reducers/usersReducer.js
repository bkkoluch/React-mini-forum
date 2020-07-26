import {
	FETCH_USERS_BEGIN,
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
} from './../actions/userActions';

const initialState = {
	users: [],
	loading: false,
	error: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action) {
		case FETCH_USERS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload.users,
			};
		case FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				users: [],
			};
		default:
			return state;
	}
};

export default usersReducer;
