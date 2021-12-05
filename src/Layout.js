import useWindowWidth from "./Hooks/useWindowWidth";

const Layout = () => {
	const onSmallScreen = useWindowWidth();
	return (
		<div>
			<h1>The device in {onSmallScreen ? "small" : "large"} screen</h1>
		</div>
	);
};

export default Layout;
