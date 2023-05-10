
export const secondsToTime = function(secs) {
	let hours = Math.floor(secs / (60 * 60));

	let divisor_for_minutes = secs % (60 * 60);
	let minutes = Math.floor(divisor_for_minutes / 60);
	if (minutes < 10) {
		minutes = '0' + minutes.toString();
	}
	if (hours === 1) {
		minutes = '60';
	}

	let divisor_for_seconds = divisor_for_minutes % 60;
	let seconds = Math.ceil(divisor_for_seconds);
	if (seconds <10) {
		seconds = '0' + seconds.toString();
	}

	let obj = {
		"h": hours,
		"m": minutes,
		"s": seconds
	};
	return obj;
}