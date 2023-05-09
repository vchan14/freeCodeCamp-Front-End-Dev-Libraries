// Import Redux dependencies
import { createStore } from 'redux';


export const OriginalState = {
	sessionLength: 25,
	breakLength: 5,
	currentTime: 25 * 60,
	isRunning: false,
}

// Define the initial state
const initialState = Object.assign({}, OriginalState);

// Action Types
const SET_SESSION_LENGTH = 'SET_SESSION_LENGTH';
const SET_BREAK_LENGTH = 'SET_BREAK_LENGTH';
const SET_CURR_TIME = 'SET_CURR_TIME';
const TOGGLE_RUNNING = 'TOGGLE_RUNNING';

// Action Creators
export const setSessionLength = (length) => ({
	type: SET_SESSION_LENGTH,
	payload: { length },
});

export const setBreakLength = (length) => ({
	type: SET_BREAK_LENGTH,
	payload: { length },
});

export const setCurrentTime = (length) => ({
	type: SET_CURR_TIME,
	payload: { length },
});

export const toggleRunning = () => ({
	type: TOGGLE_RUNNING,
});



const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SESSION_LENGTH:
			return { ...state, sessionLength: action.payload.length };
		case SET_BREAK_LENGTH:
			return { ...state, breakLength: action.payload.length };
		case SET_CURR_TIME:
			return { ...state, currentTime: action.payload.length };
		case TOGGLE_RUNNING:
			return { ...state, isRunning: !state.isRunning };
		default:
			return state;
	}
};

// Create the Redux store
const store = createStore(reducer);

export default store;