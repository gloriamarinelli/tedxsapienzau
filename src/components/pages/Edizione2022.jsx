import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";

import "../../index.css";

import Image from "../images/Senzanome.png";

import Action1 from "../images/Giovanna Melandri.jpg";
import Action2 from "../images/Valeria Trombetta.jpg";
import Action3 from "../images/Fasma.jpg";

import Cross1 from "../images/Viviana Bottaro.jpg";
import Cross2 from "../images/Giusy Amoroso.jpg";
import Cross3 from "../images/Mario Baccini.jpg";

import Transf1 from "../images/Vittorio Loreto.jpg";
import Transf2 from "../images/Valentina Dallari.jpg";
import Transf3 from "../images/Ewelina Jelenkowska-Lucà.jpg";

import Awards1 from "../images/Volosumarte.jpg";
import Awards2 from "../images/Eleonora Pariset.jpg";
import Awards3 from "../images/Arianna Peduzzi.jpg";
import Awards4 from "../images/Serena Spanò.jpg";

import pecoraImage from "../images/pecora.png";

import SpeakerCard from "../components/SpeakerCard";
import BioSpeakerPopup from "../components/BioSpeakerPopup";

import global from "../../resources/global.json";

export default function Edizione2022() {
	const [isBioOpen, setIsBioOpen] = useState(false);
	const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

	return (
		<>
			<header
				className="header ed2022"
				style={{
					padding: "10px",
					textAlign: "center",
					marginBottom: "10px",
					height: "45vh",
					clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
				}}
			>
				<div>
					<LazyLoadImage src={Image} alt="Pecora" height="550" />
				</div>
			</header>

			<hr className="featurette-divider"></hr>

			<div
				className="header"
				style={{
					textAlign: "left",
					display: "grid",
					height: "100",
				}}
			>
				<h1
					className="font-weight-bold"
					style={{
						fontSize: "20px",
						textAlign: "center",
						fontWeight: "bold",
						color: "#EB0028",
						fontFamily: "GothamBold",
					}}
				>
					Venerdì 29 aprile
				</h1>

				<h1
					className="font-weight-bold "
					style={{
						fontSize: "20px",
						textAlign: "center",
						fontWeight: "bold",
						fontFamily: "GothamBold",
					}}
				>
					Università "La Sapienza" - Aula Magna Rettorato
				</h1>

				<h1
					className="font-weight-bold"
					style={{
						fontSize: "20px",
						textAlign: "center",
						fontWeight: "bold",
						fontFamily: "GothamBold",
					}}
				>
					Piazzale Aldo Moro 5, Roma
				</h1>
			</div>

			<hr className="featurette-divider"></hr>

			<div className="container mb-5">
				<h1
					className="font-weight-bold mt-5 mb-3"
					style={{
						fontSize: "45px",
						textAlign: "center",
						fontWeight: "bold",
						marginLeft: "30px",
					}}
				>
					IL TEMA DELL'EVENTO
				</h1>
				<p style={{ fontSize: "20px", fontFamily: "GothamBook" }}>
					Il titolo della prima edizione del TEDxSapienzaU sarà{" "}
					<strong>ACT - Lead the change</strong>. Come da linee guida
					TEDx, i dialoghi che verranno presentati riguarderanno
					diverse materie ed aree tematiche interconnesse,
					prediligendo le migliori idee ed esperienze ispiratrici:
				</p>
				{/** CARDS */}
				<div className="row gap-5 d-flex justify-content-center">
					<div className="col-lg-3 theme-card">
						<p
							style={{
								fontSize: "250px",
								color: "#fff",
								zIndex: "2",
							}}
						>
							A
						</p>
						<p>
							<strong>Action</strong>: La cultura dell'azione
							contro la cultura dell'inerzia e il ruolo della
							cittadinanza attiva nell'educazione del futuro.
						</p>
					</div>
					<div className="col-lg-3 theme-card">
						<LazyLoadImage
							src={pecoraImage}
							className="theme-card-image"
						/>
						<p
							style={{
								fontSize: "250px",
								color: "#fff",
								zIndex: "2",
							}}
						>
							C
						</p>
						<p>
							<strong>Cross-Fertilization</strong>: La
							predisposizione alla creatività ed empatia, la pop
							education e i nuovi orizzonti della contaminazione
							tra i saperi.
						</p>
					</div>
					<div className="col-lg-3 theme-card">
						<p
							style={{
								fontSize: "250px",
								color: "#fff",
								zIndex: "2",
							}}
						>
							T
						</p>
						<p>
							<strong>Transformation</strong>: Il digitale e la
							realtà integrata, la trasformazione dei modelli
							educativi e il valore dell'esperienza nella crescita
							dell'individuo.
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				{/* <h1
					className="font-weight-bold mt-5 mb-3"
					style={{
						fontSize: "45px",
						textAlign: "center",
						fontWeight: "bold",
						marginLeft: "30px",
					}}
				>
					IL TEMA DELL'EVENTO
				</h1>

				<div
					className="mb-5"
					style={{
						textAlign: "justify",
						fontSize: "20px",
						marginLeft: "30px",
					}}
				>
					<p>
						Il titolo della prima edizione del TEDxSapienzaU sarà{" "}
						<strong>ACT - Lead the change</strong>.{" "}
					</p>

					<p>
						Come da linee guida TEDx, i dialoghi che verranno
						presentati riguarderanno diverse materie ed aree
						tematiche interconnesse, prediligendo le migliori idee
						ed esperienze ispiratrici:
					</p>
					<p>
						<strong style={{ color: "#E62B1E", fontSize: "35px" }}>
							ACTION.
						</strong>{" "}
					</p>
					<p>
						La cultura dell'azione contro la cultura dell'inerzia e
						il ruolo della cittadinanza attiva nell'educazione del
						futuro.{" "}
					</p>
					<p>
						<strong style={{ color: "#E62B1E", fontSize: "35px" }}>
							CROSS-FERTILIZATION.
						</strong>{" "}
					</p>
					<p>
						La predisposizione alla creatività ed empatia, la pop
						education e i nuovi orizzonti della contaminazione tra i
						saperi.{" "}
					</p>
					<p>
						<strong style={{ color: "#E62B1E", fontSize: "35px" }}>
							TRANSFORMATION.
						</strong>{" "}
					</p>
					<p>
						Il digitale e la realtà integrata, la trasformazione dei
						modelli educativi e il valore dell'esperienza nella
						crescita dell'individuo.
					</p>
				</div> */}

				<div className="container">
					<h1
						className="font-weight-bold mt-5 mb-3"
						style={{
							fontSize: "45px",
							textAlign: "center",
							fontWeight: "bold",
							marginLeft: "30px",
						}}
					>
						GLI SPEAKER
					</h1>
					<p
						style={{
							fontSize: "60px",
							textAlign: "center",
							marginLeft: "30px",
						}}
					>
						<strong style={{ color: "#E62B1E" }}>A</strong>CTION
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
							gap: "70px",
						}}
					>
						<SpeakerCard
							nomeSpeaker="Giovanna Melandri"
							imgSrc={Action1}
							linkTalk="https://youtu.be/MiGjiZrhAeg"
							bio=""
							setIsBioOpen={setIsBioOpen}
							setSelectedSpeakerInfo={setSelectedSpeakerInfo}
						/>
						<SpeakerCard
							nomeSpeaker="Valeria Trombetta"
							imgSrc={Action2}
							linkTalk="https://youtu.be/zTfHpas8FHM"
							bio=""
							setIsBioOpen={setIsBioOpen}
							setSelectedSpeakerInfo={setSelectedSpeakerInfo}
						/>
						<SpeakerCard
							nomeSpeaker="Fasma"
							imgSrc={Action3}
							linkTalk="https://youtu.be/BTTkcs7F1AY"
							bio=""
							setIsBioOpen={setIsBioOpen}
							setSelectedSpeakerInfo={setSelectedSpeakerInfo}
						/>
					</div>
				</div>
				<p
					style={{
						marginTop: "50px",
						fontSize: "60px",
						textAlign: "center",
						marginLeft: "30px",
					}}
				>
					<strong style={{ color: "#E62B1E" }}>C</strong>
					ROSS-FERTILIZATION
				</p>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "70px",
					}}
				>
					<SpeakerCard
						nomeSpeaker="Viviana Bottaro"
						imgSrc={Cross1}
						linkTalk=""
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Giusy Amoroso"
						imgSrc={Cross2}
						linkTalk="https://youtu.be/CYC8W7UK0mg"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Mario Baccini"
						imgSrc={Cross3}
						linkTalk="https://youtu.be/gka0xyU2lJo"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
				</div>
				<p
					style={{
						marginTop: "50px",
						fontSize: "60px",
						textAlign: "center",
						marginLeft: "30px",
					}}
				>
					<strong style={{ color: "#E62B1E" }}>T</strong>
					RANSFORMATION
				</p>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "70px",
					}}
				>
					<SpeakerCard
						nomeSpeaker="Vittorio Loreto"
						imgSrc={Transf1}
						linkTalk="https://youtu.be/UadTNZPaxF0"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Valentina Dallari"
						imgSrc={Transf2}
						linkTalk="https://youtu.be/8gfmJP59Y7g"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Ewelina Jelenkowska-Lucà"
						imgSrc={Transf3}
						linkTalk="https://youtu.be/aCV40aShbbo"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
				</div>
				<p
					style={{
						marginTop: "50px",
						fontSize: "60px",
						textAlign: "center",
						marginLeft: "30px",
					}}
				>
					<strong style={{ color: "#E62B1E" }}>TED</strong>
					xSapienzaU AWARDS
				</p>
				<div
					className="mb-5"
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "20px",
					}}
				>
					<SpeakerCard
						nomeSpeaker="Volosumarte"
						imgSrc={Awards1}
						linkTalk="https://youtu.be/ZBQguIEJFBo"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Eleonora Pariset"
						imgSrc={Awards2}
						linkTalk="https://youtu.be/OBaW4Inps4o"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Arianna Peduzzi"
						imgSrc={Awards3}
						linkTalk="https://youtu.be/C19qjBMT_3Y"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
					<SpeakerCard
						nomeSpeaker="Serena Spanò"
						imgSrc={Awards4}
						linkTalk="https://youtu.be/Z2UVvrwMEHs"
						bio=""
						setIsBioOpen={setIsBioOpen}
						setSelectedSpeakerInfo={setSelectedSpeakerInfo}
					/>
				</div>
			</div>
			<BioSpeakerPopup
				isBioOpen={isBioOpen}
				setIsBioOpen={setIsBioOpen}
				selectedSpeakerInfo={selectedSpeakerInfo}
			/>
		</>
	);
}
