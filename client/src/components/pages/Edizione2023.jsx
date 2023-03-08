import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";
import "../../resources/styles/edizione2023style.css";

import TedxLogo from "../images/logo-white.png";

import SpeakerCard from "../components/SpeakerCard";
import BioSpeakerPopup from "../components/BioSpeakerPopup";

import global from "../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Buffer } from "buffer";

import axios from "axios";

export default function Edizione2023() {
	const [isBioOpen, setIsBioOpen] = useState(false);
	const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
	const [speakers, setSpeakers] = useState([]);

	useEffect(() => {
		axios
			.get(global.CONNECTION.ENDPOINT + "/speakers/edizione/2023")
			.then((res, err) => {
				setSpeakers(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	/**
	 * This function returns a spinner when the data from the db is still loading.
	 * When all the speakers are fetched, this function returns the speaker card section
	 */
	const handleSpeakersCardSection = () => {
		if (speakers.length === 0) {
			/** SPEAKERS NOT YET FETCHED FROM DATABASE */
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
			speakers.map((speaker) => {
				const { id, nome, bio, categoria, foto, fotoSidebar } = speaker;
				let base64StringImage = Buffer.from(foto, "binary").toString("base64");
				let base64StringImageSidebar = Buffer.from(
					fotoSidebar,
					"binary"
				).toString("base64");
				res.push(
					<SpeakerCard
						key={id}
						nomeSpeaker={nome}
						imgSrc={base64StringImage}
						bio={bio}
						fotoSidebar={base64StringImageSidebar}
						tag={categoria}
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
				);
			});
			return res;
		}
	};

	return (
		<>
		<section>
			<header
				className="header-ed2023"
				style={{
					
					textAlign: "center",
					marginBottom: "10px",
					height: "45vh",
				}}
			></header>

			<div className="where-is-the-event23 row mx-0 pt-3 pb-3">
				<div className="col-md-6">
					<div className="row">
						<FontAwesomeIcon
							className="col-2"
							icon={faLocationDot}
							style={{ color: global.COLORS.ROSSO_TED }}
							size="2x"
						/>
						<p className="col-8">
							Università La Sapienza - Aula Magna Rettorato Piazzale Aldo Moro,
							5, 00185 Roma RM
						</p>
					</div>
					<div className="row">
						<FontAwesomeIcon
							className="col-2"
							icon={faCalendar}
							style={{ color: global.COLORS.ROSSO_TED }}
							size="2x"
						/>
						<p className="col-8">Autunno 2023</p>
					</div>
				</div>
				<div className="col-md-6">
					<LazyLoadImage src={TedxLogo} width="300px" />
				</div>
			</div>
			</section>

			<div className="container mb-5">
				<h1
					className="font-weight-bold mt-5 mb-3"
					style={{
						fontSize: "45px",
						textAlign: "center",
						fontWeight: "bold",
					}}
				>
					IL NOSTRO OBIETTIVO
				</h1>
				<p style={{ fontSize: "20px", fontFamily: "GothamBook" }}>
					Il nostro obiettivo è <strong>azzerare</strong>, ricercare un punto{" "}
					<strong>zero</strong>: le disuguaglianze, i conflitti, i cattivi stili
					di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che
					rallentano la crescita della nostra società, peggiorando la qualità
					della nostra vita. <strong>Riconsiderare noi stessi </strong> ed il
					nostro modo di confrontarci, imparare ed interagire con la società
					contemporanea, le <strong>arti</strong> e le <strong>scienze</strong>{" "}
					è fondamentale per costruire un mondo dove l'essere umano possa '
					<strong>rinascere</strong>', prosperando ed esprimendosi al meglio in
					ogni disciplina. Riscoprire le basi per <strong>rinascere</strong>,
					diventare persone migliori in un luogo migliore.
				</p>

				<p
					style={{
						fontSize: "30px",
						fontFamily: "GothamBook",
						fontStyle: "italic",
					}}
				>
					L'uomo e il mondo che lo circonda non sono binari separati, ma rotaie
					che si muovono insieme, hanno bisogno l'uno dell'altro.
				</p>
			</div>

			<div className="container mb-5">
				<h1
					className="font-weight-bold mt-5 mb-3"
					style={{
						fontSize: "45px",
						textAlign: "center",
						fontWeight: "bold",
					}}
				>
					GLI SPEAKERS
				</h1>
				{/**NON CI SONO ANCORA SPEAKER DA MOSTRARE */}
				{/* <div className="row">{handleSpeakersCardSection()}</div> */}
				<p
					style={{
						fontSize: "20px",
						fontFamily: "GothamBook",
						fontStyle: "italic",
						textAlign: "center",
					}}
				>
					Coming Soon...
				</p>
			</div>
			{/* <BioSpeakerPopup
				isBioOpen={isBioOpen}
				setIsBioOpen={setIsBioOpen}
				selectedSpeakerInfo={selectedSpeakerInfo}
			/> */}
		</>
	);
}
