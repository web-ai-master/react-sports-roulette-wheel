import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid } from "@mui/material";

// import { GROUPS_API } from '../utils/api';

const teamlist_url = [
	"http://site.api.espn.com/apis",
	"http://site.api.espn.com/apis",
	"http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams",
	"http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
	"http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams",
	"http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams",
	"http://site.api.espn.com/apis",
];

const TeamStep = ({ selectedGroup, onSelectTeam, onHandleNext }) => {
	const [teams, setTeams] = useState([]);

	// useEffect(() => {
	// 	if (selectedGroup) {
	// 		axios
	// 			.get(teamlist_url[selectedGroup.id - 1])
	// 			.then((res) => {
	// 				setTeams(res.data.sports[0].leagues[0].teams);
	// 				console.log(res.data.sports[0].leagues[0].teams);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}
	// }, [selectedGroup]);

	const handleSelectTeam = (team) => {
		onHandleNext();
		onSelectTeam(team);
	};

	return (
		<Grid container spacing={3} className="content-center">
			{selectedGroup.teams.map((team) => (
				<Grid item xs={3} className="text-center">
					<img
						key={team.id}
						style={{
							width: "200px",
							height: "150px",
							objectFit: "contain",
						}}
						className="p-1 cursor-pointer"
						onClick={() => handleSelectTeam(team)}
						src={team.image}
						alt={team.displayName}
					/>
					<h3>{team.name}</h3>
				</Grid>
			))}
		</Grid>
	);
};

export default TeamStep;
