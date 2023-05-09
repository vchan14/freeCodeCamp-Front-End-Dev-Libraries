import {Button, Heading} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {OriginalState, setBreakLength, setCurrentTime, setSessionLength} from "../states/PomodoroTimerState.js";


function Control() {
	const dispatch = useDispatch();
	const startStopclick = function () {

	}

	const restartClick = function () {
		dispatch(setBreakLength(OriginalState.breakLength));
		dispatch(setSessionLength(OriginalState.sessionLength));
		dispatch(setCurrentTime(OriginalState.currentTime));
	}


	return (
		<div className="control" style={{display:"flex", columnGap:"20px"}}>

			<Button id="start-stop">
				<Heading as="h3">
					Start/Stop
				</Heading>
			</Button>

			<Button id="reset" onClick={() => restartClick()}>
				<Heading as="h3">
					Restart
				</Heading>
			</Button>
		</div>
	)
}

export default Control;