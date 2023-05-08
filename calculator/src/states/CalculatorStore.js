import {createStore} from "redux";


const initialState = {
	prevValue: [],
	currentValue: '0',
}

const actionTypes = {
	SET_PREV_VALUE:  'SET_PREV_VALUE',
	SET_CURRENT_VALUE: 'SET_CURRENT_VALUE',

}


export const setPrevValue = (inValue) => ({
	type: 'SET_PREV_VALUE',
	payload: {inValue}
});

export const setCurrentValue = (inValue) => ({
	type: 'SET_CURRENT_VALUE',
	payload: {inValue}
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_PREV_VALUE:
			return {...state, prevValue: action.payload.inValue};
		case actionTypes.SET_CURRENT_VALUE:
			return {...state, currentValue : action.payload.inValue};
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;