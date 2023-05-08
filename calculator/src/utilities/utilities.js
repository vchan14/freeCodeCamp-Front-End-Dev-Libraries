

export const evaluateExpression = function(expression) {
	const result= Function(`'use strict'; return (${expression})`)();
	return result;

}