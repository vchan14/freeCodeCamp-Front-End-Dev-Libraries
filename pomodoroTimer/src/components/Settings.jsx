import {Button, Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {setBreakLength, setSessionLength} from "../states/PomodoroTimerState.js";

function Settings() {
	const dispatch = useDispatch();
	const sessionLength = useSelector(state => state.sessionLength);
	const breakLength = useSelector(state => state.breakLength);

	const incrementBreak = function() {
		if (breakLength !== 59) {
			dispatch(setBreakLength(breakLength + 1));
		}
	}
	const decrementBreak = function () {
		if (breakLength !== 0 ) {
			dispatch(setBreakLength(breakLength-1));

		}
	}
	const incrementSession = function () {
		if (sessionLength !== 59) {
			dispatch(setSessionLength(sessionLength + 1));
		}
	}

	const decrementSession = function () {
		if (sessionLength !== 0 ) {
			dispatch(setSessionLength(sessionLength-1));
		}
	}

	return (
		<div className="settings" style={{display: "flex", columnGap:"20px", width:"700px", justifyContent:"center"}}>
			<div id="break-label">
				<Heading as="h3">Break Length</Heading>
				<div style={{display:"flex", flexDirection: "row", columnGap:"20px"}}>
					<Button id="break-decrement" onClick={() => decrementBreak()}>Down</Button>
					<Heading id="break-length" style={{width: "80px", textAlign:"center"}} as="h4">{breakLength}</Heading>
					<Button id="break-increment" onClick={() => incrementBreak()}>Up</Button>
				</div>
			</div>
			<div id="session-label">
				<Heading as="h3">Session Length</Heading>
				<div style={{display:"flex", flexDirection: "row", columnGap:"20px"}}>
					<Button id="session-decrement" onClick={() => decrementSession()}>Down</Button>
					<Heading id="session-length" style={{width: "80px", textAlign:"center"}} as="h4">{sessionLength}</Heading>
					<Button id="session-increment" onClick={()=>incrementSession()}>Up</Button>
				</div>

			</div>

		</div>
	)
}

export default Settings;