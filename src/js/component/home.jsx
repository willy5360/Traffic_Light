import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "empty",
		slow: "empty",
		go: "empty"
	});
	return (
		<div className="container">
			<div className="TrafficBox">
				<TrafficLight
					light={color.stop}
					addglow={() => {
						setColor({
							stop: "red glow",
							slow: "empty",
							go: "empty"
						});
					}}
				/>

				<TrafficLight
					light={color.slow}
					addglow={() => {
						setColor({
							stop: "empty",
							slow: "yellow glow",
							go: "empty"
						});
					}}
				/>

				<TrafficLight
					light={color.go}
					addglow={() => {
						setColor({
							stop: "empty",
							slow: "empty ",
							go: "green glow"
						});
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
