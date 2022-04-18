import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getRemainingTimeUntilTimestamp } from "../utils/CountdownTimer";

const initialRemainingTime = {
	days: "00",
	hours: "00",
	minutes: "00",
	seconds: "00",
};

const DealBanner = ({ countdownTimeStampDate }) => {
	const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const date = new Date(countdownTimeStampDate);
			const countdownTimeStampMs = date.getTime();
			updateRemainingTime(countdownTimeStampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimeStampDate]);

	const updateRemainingTime = (countdown) => {
		setRemainingTime(getRemainingTimeUntilTimestamp(countdown));
	};

	return (
		<div className="w-full bg-[url('../public/images/dealbanner.jpg')] bg-no-repeat bg-cover my-8 bg-center ">
			<div className="container mx-auto py-20 flex items-center justify-start">
				<div className="flex items-center justify-center flex-col text-gray-800 pl-5">
					<p className="text-lg">We offer a hot deal offer every festival</p>
					<h2 className="text-3xl font-bold leading-loose">
						Deal Of The Day!{" "}
						<sup className="text-xl bg-yellow-500 text-white px-2 py-1 rounded-lg">
							Sale
						</sup>
					</h2>
					<div className="flex items-center justify-center gap-10 pt-10 pb-8 text-3xl text-orange-600 font-bold">
						<div className="circle" style={{ "--clr": "rgb(289, 160, 46)" }}>
							<div
								className={`dots`}
								style={{ transform: `rotate(${remainingTime.days * 3}deg)` }}
							></div>
							<svg>
								<circle cx="45" cy="45" r="45"></circle>
								<circle
									cx="45"
									cy="45"
									r="45"
									style={{
										strokeDashoffset: 285 - remainingTime.days * 3,
									}}
								></circle>
							</svg>
							<div className="">{remainingTime.days}</div>
						</div>
						<div className="circle" style={{ "--clr": "rgb(289,200, 59)" }}>
							<div
								className={`dots`}
								style={{ transform: `rotate(${remainingTime.hours * 15}deg)` }}
							></div>
							<svg>
								<circle cx="45" cy="45" r="45"></circle>
								<circle
									cx="45"
									cy="45"
									r="45"
									style={{
										strokeDashoffset: 285 - (285 * remainingTime.hours) / 24,
									}}
								></circle>
							</svg>
							<div className="hours">{remainingTime.hours}</div>
						</div>
						<div className="circle" style={{ "--clr": "rgb(261, 215, 37)" }}>
							<div
								className={`dots`}
								style={{ transform: `rotate(${remainingTime.minutes * 6}deg)` }}
							></div>
							<svg>
								<circle cx="45" cy="45" r="45"></circle>
								<circle
									cx="45"
									cy="45"
									r="45"
									style={{
										strokeDashoffset: 285 - (285 * remainingTime.minutes) / 60,
									}}
								></circle>
							</svg>
							<div className="minutes">{remainingTime.minutes}</div>
						</div>
						<div className="circle" style={{ "--clr": "rgb(251, 225, 15)" }}>
							<div
								className={`dots`}
								style={{ transform: `rotate(${remainingTime.seconds * 6}deg)` }}
							></div>
							<svg>
								<circle cx="45" cy="45" r="45"></circle>
								<circle
									cx="45"
									cy="45"
									r="45"
									style={{
										strokeDashoffset: 285 - (285 * remainingTime.seconds) / 60,
									}}
								></circle>
							</svg>
							<div className="seconds">{remainingTime.seconds}</div>
						</div>
					</div>
					<Link href="/shop">
						<a className="bg-yellow-500 px-5 py-2 text-lg font-bold text-white rounded-md">
							Shop collection
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DealBanner;
