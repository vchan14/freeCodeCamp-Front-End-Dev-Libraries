// Import Redux dependencies
import { createStore } from 'redux';

const temp =25;
export const OriginalState = {
	sessionLength: temp,
	breakLength: 5,
	currentTime: temp * 60,
	runningInterval: null,
	isSession: true,
}

// Define the initial state
const initialState = Object.assign({}, OriginalState);

// Action Types
const SET_SESSION_LENGTH = 'SET_SESSION_LENGTH';
const SET_BREAK_LENGTH = 'SET_BREAK_LENGTH';
const SET_CURR_TIME = 'SET_CURR_TIME';
const SET_RUNNING_INTERVAL = 'SET_RUNNING_INTERVAL';
const TOGGLE_IS_SESSION = 'TOGGLE_IS_SESSION';
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

export const setRunningInterval = (interval) => ({
	type: SET_RUNNING_INTERVAL,
	payload: {interval}
});

export const toggleIsSession = () => ({
	type: TOGGLE_IS_SESSION
})



const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SESSION_LENGTH:
			if(state.runningInterval) {
				return state;
			}
			const newLength = action.payload.length;
			return { ...state, sessionLength: newLength, currentTime:newLength *60 };
		case SET_BREAK_LENGTH:
			if (state.runningInterval) {
				return state;
			}
			return { ...state, breakLength: action.payload.length };
		case SET_CURR_TIME:
			return { ...state, currentTime: action.payload.length };
		case SET_RUNNING_INTERVAL:
			return { ...state, runningInterval: action.payload.interval };
		case TOGGLE_IS_SESSION:
			return { ...state, isSession: !state.isSession}
		default:
			return state;
	}
};

// Create the Redux store
const store = createStore(reducer);

export default store;