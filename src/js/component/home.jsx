import React, { useState, useEffect } from "react";

function Home() {
	//create your first component
	const [color, setColor] = useState("null")

		
	const cycle = () => {
		if (color == "redLight") {
			setColor("greenLight")
		}
		else if (color == "greenLight") {
			setColor("yellowLight")
		}
		else {
			setColor("redLight")
		};};

	return (
		<div className="container">
			<h3>Traffic Light</h3>
			<div className="lightContainer">
				<div onClick={() => setColor("redLight")} className={(color == "redLight") ? "light redLight selected": "light redLight"}></div>
				<div onClick={() => setColor("yellowLight")} className={(color == "yellowLight") ? "light yellowLight selected":"light yellowLight"}></div>
				<div onClick={() => setColor("greenLight")} className={(color == "greenLight") ? "light greenLight selected" : "light greenLight"}></div>
				
			</div>
			<button onClick={cycle} className="cycleButton">Cycle Light</button>
		</div>
	)
}





export default Home;