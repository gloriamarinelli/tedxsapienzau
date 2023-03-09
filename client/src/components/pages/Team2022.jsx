import React, { useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard";

export default function Team2022() {
	const [board, setBoard] = useState([]);
	const [volunteers, setVolunteers] = useState([]);
	const [windowSize, setWindowSize] = useOutletContext();

	const gruppi = [
		"communication",
		"curator",
		"fundraising",
		"grafica",
		"marketing",
		"planning",
		"radio",
		"speaker curator",
	];

	useEffect(() => {
		axios
			.get(global.CONNECTION.ENDPOINT + "team/22")
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
							year={2022}
						/>
					);
				});
				return (
					<>
						{" "}
						<h1
							style={{
								margin: "30px 0",
								fontFamily: "GothamBold",
								fontSize: "50px",
							}}
						>
							Team esecutivo
						</h1>
						{res}
					</>
				);
			}
		}
	};

	const handleVolunteersCardSection = () => {
		if (volunteers.length === 0) return;

		let curatorVolunteers = [];
		let communicationVolunteers = [];
		let speakerVolunteers = [];
		let fundVolunteers = [];
		let graficaVolunteers = [];
		let radioVolunteers = [];
		let planVolunteers = [];

		volunteers.map((vol) => {
			// eslint-disable-next-line default-case
			switch (vol.gruppo) {
				case "curator":
					curatorVolunteers.push(vol);
					break;
				case "communication":
					communicationVolunteers.push(vol);
					break;
				case "speaker curator":
					speakerVolunteers.push(vol);
					break;
				case "fundraising":
					fundVolunteers.push(vol);
					break;
				case "grafica":
					graficaVolunteers.push(vol);
					break;
				case "radio":
					radioVolunteers.push(vol);
					break;
				case "planning":
					planVolunteers.push(vol);
					break;
			}
		});

		let curatorArray = [];
		let communicationArray = [];
		let speakerArray = [];
		let fundArray = [];
		let graficaArray = [];
		let radioArray = [];
		let planArray = [];

		curatorVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			curatorArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		communicationVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			communicationArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		speakerVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			speakerArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		fundVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			fundArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		graficaVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			graficaArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		radioVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			radioArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		planVolunteers.map((vol) => {
			const { id, nome, gruppo, fotoNome, link } = vol;
			planArray.push(
				<VolunteerCard
					key={id}
					id={id}
					nome={nome}
					gruppo={gruppo}
					image={fotoNome}
					link={link}
					year={2022}
				/>
			);
		});

		return (
			<>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Curator
				</h1>
				<div className="row">{curatorArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Communication
				</h1>
				<div className="row">{communicationArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Speaker Curation
				</h1>
				<div className="row">{speakerArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Fundraising
				</h1>
				<div className="row">{fundArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Grafica
				</h1>
				<div className="row">{graficaArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Radio
				</h1>
				<div className="row">{radioArray}</div>
				<h1
					style={{
						margin: "30px 0",
						fontFamily: "GothamBold",
						fontSize: "40px",
					}}
				>
					Team Planning
				</h1>
				<div className="row">{planArray}</div>
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
					className="header gradient-background-team2022"
					style={{
						padding: "10px",
						textAlign: "center",
						color: "#fff",
						marginBottom: "10px",
						clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
						height: "40vh",
						display: "grid",
						placeItems: "center",
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
						TEAM 2022
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
						marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
