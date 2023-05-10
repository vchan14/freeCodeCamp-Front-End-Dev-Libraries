import {Button, Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {
	OriginalState,
	setBreakLength,
	setCurrentTime,
	setRunningInterval,
	setSessionLength, toggleIsSession
} from "../states/PomodoroTimerState.js";


function Control() {
	const dispatch = useDispatch();
	const currentTime = useSelector(state => state.currentTime);
	const runningInterval = useSelector(state => state.runningInterval);
	const breakLength = useSelector(state => state.breakLength);
	const sessionLength = useSelector(state => state.sessionLength);
	const isSession = useSelector(state => state.isSession);

	const startStopClick = function () {
		if (!runningInterval) {
			startTimer(currentTime, isSession);
		} else {
			clearInterval(runningInterval);
			dispatch(setRunningInterval(null));
		}
	}

	const startTimer = function(inCurrTime, isSessionTimer) {
		dispatch(setCurrentTime(inCurrTime));
		const interval = setInterval(() => {
			if (inCurrTime === 0) {
				clearInterval(interval);
				if (isSessionTimer) {
					startBreakTime();
				} else {
					startSessionTime();
				}
				dispatch(toggleIsSession());
			} else {
				inCurrTime = inCurrTime - 1;
				dispatch(setCurrentTime(inCurrTime));
			}
		}, 1000)
		dispatch(setRunningInterval(interval));
	}

	const startSessionTime = function () {
		const newTime = sessionLength * 60;
		startTimer(newTime, true)
	}

	const startBreakTime = function() {
		const newTime = breakLength * 60;
		startTimer(newTime, false);
	}

	const restartClick = function () {
		clearInterval(runningInterval);
		dispatch(setRunningInterval(null));
		dispatch(setBreakLength(OriginalState.breakLength));
		dispatch(setSessionLength(OriginalState.sessionLength));
		dispatch(setCurrentTime(OriginalState.currentTime));
		if (!isSession) {
			dispatch(toggleIsSession());
		}
		const audioElement = document.getElementById('beep');
		audioElement.currentTime = 0;
		audioElement.pause();
	}


	return (
		<div className="control" style={{display:"flex", columnGap:"20px"}}>
			<Button id="start_stop" size="lg" colorScheme="blue" onClick={() => startStopClick()}>
				<Heading as="h3">
					Start/Stop
				</Heading>
			</Button>

			<Button id="reset" size="lg" colorScheme="red" onClick={() => restartClick()} >
				<Heading as="h3">
					Restart
				</Heading>
			</Button>
		</div>
	)
}

export default Control;