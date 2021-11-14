import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "empty",
		slow: "empty",
		go: "empty"
	});
	const [name, setName] = useState({
		first: "",
		second: "",
		third: ""
	});
	return (
		//<div className="container">
		<Fragment>
			<TrafficLight
				light={color.stop}
				addglow={() => {
					setColor({
						stop: "red glow",
						slow: "empty",
						go: "empty"
					});
					setName({
						first: "Stop",
						second: "",
						third: ""
					});
				}}
				name={name.first}
			/>

			<TrafficLight
				light={color.slow}
				addglow={() => {
					setColor({
						stop: "empty",
						slow: "yellow glow",
						go: "empty"
					});
					setName({
						first: "",
						second: "Slow",
						third: ""
					});
				}}
				name={name.second}
			/>

			<TrafficLight
				light={color.go}
				addglow={() => {
					setColor({
						stop: "empty",
						slow: "empty ",
						go: "green glow"
					});
					setName({
						first: "",
						second: "",
						third: "Go!"
					});
				}}
				name={name.third}
			/>
		</Fragment>
		//<div className="TrafficBox glowingBox">
		//</div>
		//</div>
	);
};

export default Home;
