import React, { useState, useEffect } from "react";

function Home() {
	//create your first component
	const [color, setColor] = useState("red")

	return (
		<div className="container">
			<div className="redLight">hello</div>
			<div className="yellowLight"></div>
			<div className="greenLight"></div>
		</div>
	)
}





export default Home;