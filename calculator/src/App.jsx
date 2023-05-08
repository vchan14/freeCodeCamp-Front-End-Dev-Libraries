
import './App.scss'
import {Button, Heading} from "@chakra-ui/react";
import {
	AC_COLOR,
	BUTTONS,
	DELETE_COLOR,
	isAcButton, isDeleteButton,
	isEqualButton,
	isNumButton,
	isOperationButton
} from "./assets/Buttons.js";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentValue, setPrevValue} from "./states/CalculatorStore.js";
import {evaluateExpression} from "./utilities/utilities.js";

function App() {
	const dispatch = useDispatch();
	const prevValue = useSelector(state => state.prevValue);
	const currentValue = useSelector(state => state.currentValue);
	const currOperationState = useSelector(state => state.currentOperation);

	const buttonClick = (event, inButton) => {
		console.log('the folliowing button is clicked', inButton);
		if (isAcButton(inButton)) {
			acButtonClick();
		} else if (isNumButton(inButton)) {
			numButtonClick(inButton)
		} else if (isOperationButton(inButton)) {
			operationButtonClick(inButton);
		} else if (isEqualButton(inButton)) {
			equalButtonClick();
		} else if(isDeleteButton(inButton)) {
			deleteButtonClick();
		}
	}

	const deleteButtonClick = () => {
		let stringValue = currentValue;
		if (stringValue !== '0') {
			stringValue = stringValue.slice(0, stringValue.length-1);
			if (stringValue.length === 0) {
				stringValue = '0';
			}
			dispatch(setCurrentValue(stringValue));
			return;
		}
		const arr = [...prevValue];
		if (arr.length > 0) {
			arr.pop();
		}
		dispatch(setPrevValue(arr));
	}

	const equalButtonClick = () => {
		const arr = [...prevValue, currentValue];
		const result = evaluateExpression(arr.join(''));
		dispatch(setPrevValue([]));
		dispatch(setCurrentValue(result.toString()));
	}

	const acButtonClick = () => {
		// clear previous and current values and operation
		dispatch(setPrevValue([]));
		dispatch(setCurrentValue('0'));
	}

	const numButtonClick = (inValue) => {
		if (currentValue === '0') {
			dispatch(setCurrentValue(inValue));
		} else if (inValue === '.' && currentValue.includes('.')) {
			return;
		} else {
			dispatch(setCurrentValue(currentValue + inValue));
		}
	}

	const operationButtonClick = (inOperation) => {
		const OPERATOR = ['+', '-', '*', '/'];
		let arr = [...prevValue];
		if (currentValue !== '0') {
			arr.push(currentValue);
		}

		// Give the current operator the highest precedence
		if (arr.length > 0 && ['+', '*', '/', '-'].includes(arr.slice(-1)[0]) && inOperation !== '-') {
			while(arr.length>0 && ['+', '*', '/', '-'].includes(arr.slice(-1)[0])) {
				arr.pop();
			}
		}
		arr.push(inOperation)
		dispatch(setPrevValue(arr));
		dispatch(setCurrentValue('0'));

	}

	const buttonElements = BUTTONS.map(({value, color, id}) => {
		return (<Button id={id} key={value} onClick={(inEvent) => buttonClick(inEvent, value)} colorScheme={color} variant='solid' height="auto">{value}</Button>)
	});
	return (
		<div className="container-simple">
			<Heading as="h3">Calculator</Heading>
			<div className="calculator-container">
				<div className="display">
					<div className="top">{prevValue.join("")}</div>
					<div id="display" className="middle">{currentValue}</div>
				</div>
				<div className="first-row">
					<Button id="clear" onClick={(inEvent) => buttonClick(inEvent, 'AC')} colorScheme={AC_COLOR} height="50">AC</Button>
					<Button id="delete" onClick={(inEvent) => buttonClick(inEvent, 'Delete')} colorScheme={DELETE_COLOR} height="50">Delete</Button>
				</div>

				<div className="numPads">
					{buttonElements}
				</div>
			</div>
		</div>
	)
}

export default App
