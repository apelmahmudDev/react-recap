import React from "react";
import ClickCounter from "./ClickCounter.js";
import "./App.css";
import HoverCounter from "./HoverCounter.js";

const App = () => {
	return (
		<div className="App">
			<ClickCounter />
			<HoverCounter />
		</div>
	);
};

export default App;
