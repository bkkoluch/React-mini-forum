import {
	FETCH_USERS_BEGIN,
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	GET_USER_ID,
} from './../actions/userActions';

const initialState = {
	users: [],
	loading: false,
	error: null,
	id: 1,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
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
		case GET_USER_ID:
			return {
				...state,
				id: action.payload.id,
			};
		default:
			return state;
	}
};

export default usersReducer;
