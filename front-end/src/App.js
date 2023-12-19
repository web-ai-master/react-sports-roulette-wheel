import React from "react";
import { Container, Typography } from '@mui/material';
import RouletteStepper from "./components/RouletteStepper";

import "./assets/css/global.css";

const App = () => {

	return (
		<div className="pt-5" style={{ backgroundColor: "#0f1924", color: "white", height: "100vh" }}>
			{/* <Typography variant="h4" component="h1" display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
				Roulette Stepper
			</Typography> */}
			<RouletteStepper />
		</div>
	)
}

export default App;