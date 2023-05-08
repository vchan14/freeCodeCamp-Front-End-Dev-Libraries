const OPERATOR_COLOR = 'yellow';
const NUM_COLOR = "teal";
export const AC_COLOR = "red";
export const DELETE_COLOR = "orange";


const NUM_BUTTONS = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'.',
];

const OPERATION_BUTTONS = [
	'+',
	'-',
	'/',
	'*',
];


export const isNumButton = (inButtonValue) => NUM_BUTTONS.includes(inButtonValue);

export const isOperationButton = (inButtonValue) => OPERATION_BUTTONS.includes(inButtonValue);

export const isAcButton = (inButtonValue) => 'AC' === inButtonValue;

export const isEqualButton = (inButtonValue) => '=' === inButtonValue;

export const isDeleteButton = (inButtonValue) => 'Delete' === inButtonValue;


export const BUTTONS = [
	{
		value: '1',
		color: NUM_COLOR,
		id: 'one'
	},
	{
		value: '2',
		color: NUM_COLOR,
		id: 'two'
	},
	{
		value: '3',
		color: NUM_COLOR,
		id: 'three'
	},
	{
		value: '*',
		color: OPERATOR_COLOR,
		id: 'multiply'
	},


	{
		value: '4',
		color: NUM_COLOR,
		id: 'four'
	},
	{
		value: '5',
		color: NUM_COLOR,
		id: 'five'
	},
	{
		value: '6',
		color: NUM_COLOR,
		id: 'six'
	},
	{
		value: '-',
		color: OPERATOR_COLOR,
		id: 'subtract'
	},


	{
		value: '7',
		color: NUM_COLOR,
		id: 'seven'
	},
	{
		value: '8',
		color: NUM_COLOR,
		id: 'eight'
	},
	{
		value: '9',
		color: NUM_COLOR,
		id: 'nine'
	},
	{
		value: '+',
		color: OPERATOR_COLOR,
		id: 'add'
	},


	{
		value: '.',
		color: NUM_COLOR,
		id: 'decimal'
	},
	{
		value: '0',
		color: NUM_COLOR,
		id: 'zero'
	},
	{
		value: '/',
		color: OPERATOR_COLOR,
		id: 'divide'
	},
	{
		value: '=',
		color: OPERATOR_COLOR,
		id: 'equals'
	}
]