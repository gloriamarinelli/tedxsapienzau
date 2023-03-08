import React, { useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { Buffer } from "buffer";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard";

export default function Team2022() {
	const [board, setBoard] = useState([]);
	const [volunteers, setVolunteers] = useState([]);
	const [windowSize, setWindowSize] = useOutletContext();

	const gruppi = ["dmw", "cem", "ers", "la", "pem", "sec"];

	useEffect(() => {
		axios
			.get(global.CONNECTION.ENDPOINT + "team/23")
			.then((res, err) => {
				const data = res.data;
				console.log(data);
				let newBoard = [];
				let newVolunteers = [];
				data.forEach((item) => {
					if (item.gruppo === "board") newBoard.push(item);
					else newVolunteers.push(item);
				});
				setBoard(newBoard);
				setVolunteers(newVolunteers);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleBoardCardSection = () => {
		if (board.length === 0) {
			return (
				<div
					style={{
						height: "200px",
						width: "90%",
						margin: "auto",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div className="spinner"></div>
				</div>
			);
		} else {
			let res = [];
			// eslint-disable-next-line no-lone-blocks
			{
				board.map((board) => {
					const { id, nome, gruppo, ruolo, fotoNome, link } = board;
					if (gruppo != "board") return;
					res.push(
						<ExecutiveTeamCard
							key={id}
							nome={nome}
							gruppo={gruppo}
							ruolo={ruolo}
							image={fotoNome}
							link={link}
							year={2023}
						/>
					);
				});
				return (
					<>
						<h1 style={{ margin: "30px 0" }}>Team Esecutivo</h1>
						{res}
					</>
				);
			}
		}
	};

	const handleVolunteersCardSection = () => {
		if (volunteers.length === 0) return;

		let dmwVolunteers = [];
		let cemVolunteers = [];
		let ersVolunteers = [];
		let pemVolunteers = [];
		let secVolunteers = [];
		let laVolunteers = [];

		volunteers.map((vol) => {
			switch (vol.gruppo) {
				case "dmw":
					dmwVolunteers.push(vol);
					break;
				case "cem":
					cemVolunteers.push(vol);
					break;
				case "ers":
					ersVolunteers.push(vol);
					break;
				case "pem":
					pemVolunteers.push(vol);
					break;
				case "sec":
					secVolunteers.push(vol);
					break;
				case "la":
					laVolunteers.push(vol);
					break;
			}
		});

		let dmwArray = [];

		dmwVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			dmwArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
				/>
			);
		});
		return (
			<>
				<h1 style={{ marginTop: "30px" }}>Team curator</h1>
				{dmwArray}
			</>
		);
	};

	if (windowSize > global.UTILS.TABLET_WIDTH) {
		/**
		 * DESKTOP
		 */
		return (
			<>
				<div
					className="header gradient-background-team2023"
					style={{
						padding: "10px",
						textAlign: "center",
						color: "#fff",
						marginBottom: "10px",
						clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
						height: "40vh",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h1
						className="font-weight-bold mt-5 mb-5"
						style={{
							fontSize: "120px",
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						TEAM 2023
					</h1>
				</div>

				<div className="container">
					<div className="row">{handleBoardCardSection()}</div>
				</div>
				<div className="container">
					<div className="row">{handleVolunteersCardSection()}</div>
				</div>
			</>
		);
	} else {
		/**
		 * MOBILE
		 */
		return (
			<>
				<div
					className="header gradient-background-team2022"
					style={{
						padding: "10px",
						textAlign: "center",
						color: "#fff",
						marginBottom: "10px",
						height: "40vh",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h1
						className="font-weight-bold mt-5 mb-5"
						style={{
							fontSize: "60px",
							fontWeight: "bold",
							fontFamily: "GothamBold",
						}}
					>
						TEAM 2022
					</h1>
				</div>
				<div className="row mx-0 gap-5 justify-content-center">
					{handleBoardCardSection()}
				</div>
			</>
		);
	}
}
