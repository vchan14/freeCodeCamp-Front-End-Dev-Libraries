
import './App.scss'
import {Button, Heading} from "@chakra-ui/react";
import {BUTTONS} from "./assets/Buttons.js";


const buttonObjs = [
	{
	}
]

function App() {

	const buttonElements = BUTTONS.map(({value, color}) => {
		return (<Button colorScheme={color} variant='solid' height="auto">{value}</Button>)

	})
	return (
		<div className="container-simple">
			<Heading as="h3">Calculator</Heading>
			<div className="calculator-container">
				<div className="display">
					Display value go here
				</div>
				<div className="numPads">
					{buttonElements}
				</div>
			</div>
		</div>
	)
}

export default App
