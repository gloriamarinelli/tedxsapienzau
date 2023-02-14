import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import "../../index.css";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";

export default function Team2023() {
	const [windowSize, setWindowSize] = useOutletContext();

	if (windowSize > global.UTILS.MOBILE_WIDTH) {
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
					<div className="row justify-content-center">
						
					</div>
				</div>
			</section>
		</>
	);
} else {
    /**
     * MOBILE
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
					//clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
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
					TEAM 2023
				</h1>
			</div>

			<section className="page-section" id="portfolio">
				<div className="container">
					<div className="text-center">
						<h3
							className="section-heading text-uppercase mb-5"
							style={{
								fontFamily: "GothamBold",
								fontSize: "3em",
							}}
						>
							Team Esecutivo
						</h3>
					</div>
					<div className="row justify-content-center">
						
					</div>
				</div>
			</section>
		</>
	);
						}
					}
