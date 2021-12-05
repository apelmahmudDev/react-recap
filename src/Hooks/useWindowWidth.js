import { useEffect, useState } from "react";

const useWindowWidth = () => {
	const [onSmallScreen, setOnSmallScreen] = useState(false);

	const screenSize = () => {
		setOnSmallScreen(window.innerWidth < 768);
	};

	useEffect(() => {
		screenSize();
		window.addEventListener("resize", screenSize);
		return () => window.removeEventListener("resize", screenSize);
	}, []);

	return onSmallScreen;
};

export default useWindowWidth;
