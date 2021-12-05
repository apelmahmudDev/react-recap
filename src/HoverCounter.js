import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = ({ count, setCount }) => {
	return (
		<div>
			<h1 onMouseOver={() => setCount(count + 1)}>Over {count} times</h1>
		</div>
	);
};

export default withCounter(HoverCounter);
