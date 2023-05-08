

export const evaluateExpression = function(expression) {
	return Function(`'use strict'; return (${expression})`)();
}

const test= '10-2';
console.log(evaluateExpression(test))