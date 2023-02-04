import React from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";

import "../../index.css";

export default function Team2022() {
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


			<section className="page-section" id="portfolio">
				<div className="container">
					<div className="text-center">
						<h2
							className="section-heading text-uppercase mb-5"
							style={{
								fontFamily: "GothamBold",
								fontSize: "3em",
							}}
						>
							Team Esecutivo
						</h2>
					</div>
					<div className="row gap-5 justify-content-center">
						<ExecutiveTeamCard
							name="Vittorio E. Agostinelli"
							role="Organizer"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>
						<ExecutiveTeamCard
							name="Shadi Badawi"
							role="Co-organizer"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>
						<ExecutiveTeamCard
							name="Inés Verri"
							role="Speaker & Program Coordinator"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>
						<ExecutiveTeamCard
							name="Federico Anania"
							role="Fundraising Director"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>
						<ExecutiveTeamCard
							name="Alessia Massari"
							role="Marketing & Comm. Coordinator"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>

						<ExecutiveTeamCard
							name="Sebastian Micu"
							role="Executive Website Developer"
							imgSrc="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
