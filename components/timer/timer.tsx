"use client";

import { useEffect, useState } from "react";
import Time from "./time";

function Timer() {
	const [isMounted, setIsMounted] = useState(false);
	const [remainingTime, setRemainingTime] = useState(() =>
		calculateRemainingTime()
	);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	setInterval(updateTime, 1000);

	function calculateRemainingTime() {
		const deadline: Date = new Date("2023-12-15T23:59:59+05:30");
		// @ts-ignore
		const timeDiff: Date | number = deadline - new Date();
		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
			.toString()
			.padStart(2, "0");
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
			.toString()
			.padStart(2, "0");
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
			.toString()
			.padStart(2, "0");

		return { days, hours, minutes, seconds };
	}

	function updateTime() {
		setRemainingTime(() => calculateRemainingTime());
	}

	return (
		<div className="text-center w-fit m-auto">
			<div className="flex gap-x-4 justify-center p-4 border-spacing-4 border-[0.5px] border-dashed">
				<Time
					timeNum={remainingTime.days}
					timeName="Days"
				/>
				<Time
					timeNum={remainingTime.hours}
					timeName="Hours"
				/>
				<Time
					timeNum={remainingTime.minutes}
					timeName="Minutes"
				/>
				<Time
					timeNum={remainingTime.seconds}
					timeName="Seconds"
				/>
			</div>
		</div>
	);
}

export default Timer;
