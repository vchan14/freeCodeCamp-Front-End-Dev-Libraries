import {Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {secondsToTime} from "../../utils/utilities.js";
import {useEffect} from "react";


function Display() {
	const dispatch = useDispatch();
	const currentTime = useSelector(state => state.currentTime);
	const isSession = useSelector(state => state.isSession);
	const timerStyles = {
		display:"flex",
		flexDirection:"column",
		border:"5px solid black",
		alignItems:"center",
		width:"200px",
	}

	useEffect(() => {
		if (currentTime === 0) {
			const audioElement = document.getElementById('beep');
			audioElement.play();
		}
	}, [currentTime]);
	const remainingTime = secondsToTime(currentTime);
	return(
		<div className="display" style={timerStyles}>
			<Heading id="timer-label" style={{width:"150px"}} as="h3">
				{isSession === true ? 'Session': 'Break'}
			</Heading>
			<Heading id="time-left" as="h2">
				{`${remainingTime.m}:${remainingTime.s}`}
			</Heading>
			<audio id="beep" className="clip" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
		</div>
	)
}


export default Display;