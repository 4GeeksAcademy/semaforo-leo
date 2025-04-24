import React, { useState } from "react";

const Home = () => {
	const [activeColor, setActiveColor] = useState("red");

	return (
		<div className="poste">
			<div className="trafic-light">
				<div
					onClick={() => setActiveColor("red")}
					className={`light red${activeColor === "red" ? " brillo" : ""}`}
				></div>

				<div
					onClick={() => setActiveColor("yellow")}
					className={`light yellow${activeColor === "yellow" ? " brillo" : ""}`}
				></div>

				<div
					onClick={() => setActiveColor("green")}
					className={`light green${activeColor === "green" ? " brillo" : ""}`}
				></div>
			</div>
		</div>
	);
};

export default Home;
