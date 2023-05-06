// Import Redux dependencies
import { createStore } from 'redux';

// Define the initial state
const initialState = {
	displayText: 'Chilling',
	isPowerOn: false,
	isBankOn: false,
	volumeLevel: 30
};

// Define action types
const actionTypes = {
	SET_DISPLAY_TEXT: 'SET_DISPLAY_TEXT',
	TOGGLE_POWER: 'TOGGLE_POWER',
	TOGGLE_BANK: 'TOGGLE_BANK',
	SET_VOLUME_LEVEL: 'SET_VOLUME_LEVEL'
};

// Define action creators
export const setDisplayText = (text) => ({
	type: actionTypes.SET_DISPLAY_TEXT,
	payload: { text }
});

export const togglePower = () => ({
	type: actionTypes.TOGGLE_POWER
});

export const toggleBank = () => ({
	type: actionTypes.TOGGLE_BANK
});

export const setVolumeLevel = (level) => ({
	type: actionTypes.SET_VOLUME_LEVEL,
	payload: { level }
});

// Define the reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_DISPLAY_TEXT:
			return { ...state, displayText: action.payload.text };
		case actionTypes.TOGGLE_POWER:
			return { ...state, isPowerOn: !state.isPowerOn };
		case actionTypes.TOGGLE_BANK:
			return { ...state, isBankOn: !state.isBankOn };
		case actionTypes.SET_VOLUME_LEVEL:
			return { ...state, volumeLevel: action.payload.level };
		default:
			return state;
	}
};

// Create the Redux store
const store = createStore(reducer);

export default store;