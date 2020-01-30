import { SET_SEARCH_VALUE, RESET_PAGE } from './types';

export default (state, action) => {
	switch(action.type) {
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.payload.input,
				searched: action.payload.searched,
				history: action.payload.input.length && !state.history.includes(action.payload.input) ? [...state.history, action.payload.input] : state.history,
				reset: false
			};
		case RESET_PAGE:
			return {
				...state,
				searchValue: '',
				searched: false,
				reset: true
			};
		default:
			return state;
	}
}