import React, { useState } from "react";

const withCounter = (Component) => {
	const NewComponent = () => {
		const [count, setCount] = useState(0);
		return <Component count={count} setCount={setCount} />;
	};

	return NewComponent;
};

export default withCounter;
