import React from "react";
import Nav from "./Nav";
import Subnav from "./subnav";
import Hogdisplay from "./Hog_display";

function App() {
	return (
		<div id="container">
			<Subnav/>
			<Nav />
			<Hogdisplay/>
		</div>
	);
}

export default App;
