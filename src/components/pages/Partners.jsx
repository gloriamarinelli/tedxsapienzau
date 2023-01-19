import React, { useRef } from "react";
import PartnerCard from "../components/PartnerCard";

import "../../index.css";

export default function Partners() {
	const button2022 = useRef();
	const button2023 = useRef();

	return (
		<>
			<div
				className="header"
				style={{
					padding: "10px",
					backgroundImage:
						"radial-gradient(circle, rgba(21,119,64,1) 0%, rgba(50,53,144,1) 100%)",
					textAlign: "center",
					color: "#fff",
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
					PARTNERS
				</h1>
			</div>

			{/* <div
				className="mt-5 mb-5"
				style={{
					fontSize: "20px",
					fontWeight: "bold",
					color: "black",
				}}
			>
				<p>
					TEDxSapienzaU è un evento indipendente organizzato da
					studenti volontari che con il loro contributo e grazie al
					supporto di tutti gli enti, aziende e organizzazioni operano
					per il suo successo!
				</p>
			</div> */}
			<section
				className="mt-5 mb-5"
				style={{
					width: "95vw",
					margin: "auto",
					fontFamily: "GothamBold",
				}}
			>
				<h3
					style={{
						fontSize: "25px",
						fontWeight: "bold",
						textAlign: "left",
						color: "black",
						display: "flex",
					}}
				>
					Chi ci ha supportato:
					<div
						ref={button2023}
						className="year-button underlined"
						type="button"
						style={{ marginLeft: "30px" }}
						onClick={() => {
							console.log("click");
							button2022.current.classList.remove("underlined");
							button2023.current.classList.add("underlined");
						}}
					>
						2023
					</div>
					<div
						ref={button2022}
						className="year-button"
						type="button"
						style={{ marginLeft: "30px" }}
						onClick={() => {
							console.log("click");
							button2023.current.classList.remove("underlined");
							button2022.current.classList.add("underlined");
						}}
					>
						2022
					</div>
				</h3>
			</section>

			<section className="page-section" id="portfolio">
				<div className="container">
					<div className="text-center">
						<h2
							className="section-heading text-uppercase"
							style={{
								fontFamily: "GothamBold",
								fontSize: "3em",
							}}
						>
							Main Sponsor
						</h2>
					</div>
					<div className="row">
						<PartnerCard
							title="RedBull"
							subtitle="Sottotitolo"
							imgSrc="https://loghi-famosi.com/wp-content/uploads/2020/11/Red-Bull-Logo.png"
						/>
						<PartnerCard
							title="Regione Lazio"
							subtitle="Sottotitolo"
							imgSrc="https://www.melogranoroma.org/wp-content/uploads/2019/03/logo-REGIONE-LAZIO.png"
						/>
						<PartnerCard title="Titolo" subtitle="Sottotitolo" />
						<PartnerCard title="Titolo" subtitle="Sottotitolo" />
						<PartnerCard title="Titolo" subtitle="Sottotitolo" />
						<PartnerCard title="Titolo" subtitle="Sottotitolo" />
					</div>
				</div>
			</section>
		</>
	);
}
