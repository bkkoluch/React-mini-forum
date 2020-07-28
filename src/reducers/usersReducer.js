import {
	FETCH_USERS_BEGIN,
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	GET_USER_ID,
	GET_USER_NAME,
} from './../actions/userActions';

const initialState = {
	users: [],
	loading: false,
	error: null,
	id: null,
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
		case GET_USER_NAME:
			return {
				...state,
				name: action.payload.name,
			};
		default:
			return state;
	}
};

export default usersReducer;
