import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, setCount }) => {
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
};

export default withCounter(ClickCounter);
