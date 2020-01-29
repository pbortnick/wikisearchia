import { SET_SEARCH_VALUE, RESET_PAGE } from './types';

export default (state, action) => {
	switch(action.type) {
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.payload.input,
				searched: action.payload.searched,
				history: action.payload.input.length ? [...state.history, action.payload.input] : state.history
			};
		case RESET_PAGE:
			return {
				searchValue: '',
				history: [],
				searched: false
			};
		default:
			return state;
	}
}