import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TrafficLight = props => {
	return (
		<div
			className={props.light}
			onClick={() => {
				props.addglow(props.light, props.name);
			}}>
			{props.name}
		</div>
	);
};

TrafficLight.propTypes = {
	light: PropTypes.string,
	addglow: PropTypes.func,
	name: PropTypes.string
};
export default TrafficLight;
