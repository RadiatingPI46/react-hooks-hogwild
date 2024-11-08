import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	return (
		// Data containing the pig image at the top
		<div className="card3" style={{textAlign:"center"}}>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
