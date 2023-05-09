import {Heading} from "@chakra-ui/react";


function Display() {
	const timerStyles = {
		display:"flex",
		flexDirection:"column",
		border:"5px solid black",
		alignItems:"center",
		width:"200px",
	}

	return(
		<div className="display" style={timerStyles}>
			<Heading id="timer-label" as="h3">
				Session
			</Heading>

			<Heading id="time-left" as="h2">
				25:00
			</Heading>
		</div>
	)
}


export default Display;