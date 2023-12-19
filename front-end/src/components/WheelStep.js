import React, { useEffect, useState } from 'react';
import { Wheel } from "react-custom-roulette";
import { Button } from "@mui/material";

import "../assets/css/wheel.css";

const WheelStep = ({ selectedEvent, onResult }) => {
	const [data, setData] = useState([{}]);
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winner, setWinner] = useState(null);

	const { team_red, team_black } = selectedEvent;

	useEffect(() => {
		let numbers = Array.from({ length: 38 }).map((_, index) => index + 1);
		numbers = shuffleArray(numbers);

		const wheelData = numbers.map((number, index) => {
			if (index === 18) {
				return { option: '0', style: { backgroundColor: 'green', textColor: 'white' } }
			} else if (index === 37) {
				return { option: '00', style: { backgroundColor: 'green', textColor: 'white' } }
			} else
				return {
					option: number.toString(),
					style: {
						backgroundColor: index % 2 === 0 ? "red" : "black",
						textColor: "white",
					}
				}
		});

		setData(wheelData);
	}, [selectedEvent]);

	const spinWheel = () => {
		setMustSpin(true);
		setWinner(null);
		const randomPrizeIndex = Math.floor(Math.random() * data.length);

		setPrizeNumber(randomPrizeIndex);
	}

	const shuffleArray = (data) => {
		for (let i = data.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[data[i], data[j]] = [data[j], data[i]];
		}
		return data;
	}

	return (
		<div className="d-flex content-center w-100">
			<div className='roulette-wheel-container'>
				<div className='d-flex mb-2'>
					<div className='d-flex align-center'>
						<span> {team_red} </span>
						<span className='d-inline-block b b-radius-50 ml-1' style={{
							display: 'inline-block',
							width: '30px',
							height: '30px',
							backgroundColor: 'red',
						}}></span>
					</div>
					<div className='d-flex align-center ml-2'>
						<span> {team_black} </span>
						<span className='d-inline-block b b-radius-50 ml-1' style={{
							width: '30px',
							height: '30px',
							backgroundColor: 'black',
						}}></span>
					</div>
				</div>
				<Button variant="contained" color="error" onClick={spinWheel}>
					Spin the wheel
				</Button>
				{
					winner && (
						<div>
							<span> {`Winner : ${winner} !`} </span>
						</div>
					)
				}

				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					textColors={['#ffffff']}
					textDistance={87}
					perpendicularText={true}
					innerRadius={60}
					disableInitialAnimation={true}
					onStopSpinning={() => {
						setMustSpin(false);
						setWinner(prizeNumber % 2 === 0 ? team_red : team_black);
					}}
					data={data} />

			</div>
		</div>
	)
}

export default WheelStep;