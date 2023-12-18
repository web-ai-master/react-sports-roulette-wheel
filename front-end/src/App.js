import React from "react";
import { Container, Typography } from '@mui/material';
import RouletteStepper from "./components/RouletteStepper";


const App = () => {

	return (
		<Container component="main" style={{ backgroundColor: "#0f1924", fontColor: "#dae2ed" }}>
			<Typography variant="h4" component="h1" display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
				Roulette Stepper
			</Typography>
			<RouletteStepper />
		</Container>
	)
}

export default App;