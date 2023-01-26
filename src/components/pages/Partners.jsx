import React, { useRef, useState } from "react";
import PartnerCard from "../components/PartnerCard";

import "../../index.css";

export default function Partners() {
	const [activeYear, setActiveYear] = useState(2022);
	const button2022 = useRef();
	const button2023 = useRef();

	return (
		<>
			<div
				className="header gradient-background"
				style={{
					padding: "10px",
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
						className="year-button"
						type="button"
						style={{ marginLeft: "30px" }}
						onClick={() => {
							console.log("click");
							button2022.current.classList.remove("underlined");
							button2023.current.classList.add("underlined");
							setActiveYear(2023);
						}}
					>
						2023
					</div>
					<div
						ref={button2022}
						className="year-button underlined"
						type="button"
						style={{ marginLeft: "30px" }}
						onClick={() => {
							console.log("click");
							button2023.current.classList.remove("underlined");
							button2022.current.classList.add("underlined");
							setActiveYear(2022);
						}}
					>
						2022
					</div>
				</h3>
			</section>
			{activeYear === 2023 ? getSponsors2023() : getSponsors2022()}
		</>
	);
}

function getSponsors2022() {
	return (
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
						Partner Istituzionali
					</h2>
				</div>
				<div className="row">
					<PartnerCard
						title="Commissione Europea"
						subtitle="Rappresentanza in Italia"
						imgSrc="https://italy.representation.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-04/logo_ce-it-rvb-hr.png?itok=n0KlJmYq"
					/>
					<PartnerCard
						title="Regione Lazio"
						subtitle="Sottotitolo"
						imgSrc="https://www.melogranoroma.org/wp-content/uploads/2019/03/logo-REGIONE-LAZIO.png"
					/>
					<PartnerCard
						title="Comune di Roma Municipio II"
						imgSrc="https://www.astronomitaly.com/wp-content/uploads/2015/10/Roma-capitale.jpg"
					/>
				</div>

				<div className="text-center mt-5">
					<h2
						className="section-heading text-uppercase"
						style={{
							fontFamily: "GothamBold",
							fontSize: "2.5em",
						}}
					>
						Main Sponsors
					</h2>
				</div>
				<div className="row">
					<PartnerCard
						title=""
						subtitle="Sottotitolo"
						imgSrc="https://upload.wikimedia.org/wikipedia/it/thumb/c/cc/UniCredit_logo.svg/1200px-UniCredit_logo.svg.png"
					/>
					<PartnerCard
						title="Eni"
						imgSrc="https://makerfairerome.eu/wp-content/uploads/2020/07/Logo_tricolore_eni.jpg"
					/>
					<PartnerCard
						title="Fondazione Ania"
						imgSrc="https://www.fondazioneania.it/images/loghi/logo.png"
					/>
				</div>
				{/* <PartnerCard
						title=""
						subtitle="Sottotitolo"
						imgSrc="https://loghi-famosi.com/wp-content/uploads/2020/11/Red-Bull-Logo.png"
					/> */}
			</div>

			<div className="text-center mt-5">
				<h2
					className="section-heading text-uppercase"
					style={{
						fontFamily: "GothamBold",
						fontSize: "2.5em",
					}}
				>
					Supporting Sponsors
				</h2>
			</div>
			<div className="row">
				<PartnerCard
					title="Pioda Imaging"
					imgSrc="https://www.piodaimaging.it/wp-content/uploads/2021/12/favicon.png"
				/>
				<PartnerCard
					title="Ferrovie dello Stato"
					imgSrc="https://www.smau.it/Imported/PartnerProfile/image-thumb__5951__partner-show-image/Ferrovie_dello_Stato_Italiane_32880.jpeg"
				/>
				<PartnerCard
					title="Unobravo"
					imgSrc="https://assets-global.website-files.com/6340630bc206e3e9f1770198/6340630bc206e33cf777029f_Logo-unobravo.png"
				/>
				<PartnerCard
					title="Autocentri Balduina"
					imgSrc="https://www.autocentribalduina.com/static/img/pict3512.jpg"
				></PartnerCard>
			</div>

			<div className="text-center mt-5">
				<h2
					className="section-heading text-uppercase"
					style={{
						fontFamily: "GothamBold",
						fontSize: "2.5em",
					}}
				>
					Smart Sponsor
				</h2>
			</div>
			<div className="row">
				<PartnerCard
					title="CDalloro"
					imgSrc="https://cdn.shopify.com/s/files/1/0084/4696/7889/products/logo_scritta_nera_scontornato_0a7bd0ae-a45f-4a0c-8f70-a29ecd08284a_620x.png?v=1654963814"
				/>
				<PartnerCard
					title="UniCredit"
					imgSrc="https://content.unicredit.it/etc/designs/ucpublic/it/img/unicredit-logo.png"
				/>
				<PartnerCard
					title="Essenziale Seta"
					imgSrc="https://www.essenzialeseta.com/wp-content/uploads/2021/04/cropped-Logo-bordo-150px-1.png"
				/>
			</div>

			<div className="text-center mt-5">
				<h2
					className="section-heading text-uppercase"
					style={{
						fontFamily: "GothamBold",
						fontSize: "2.5em",
					}}
				>
					Friendly Sponsor
				</h2>
			</div>
			<div className="row">
				<PartnerCard
					title="Queesy"
					imgSrc="https://cdn.shopify.com/s/files/1/0267/7194/7575/files/queesy-logo-header_1350x.png?v=1618655220"
				/>
				<PartnerCard
					title="Red Bull"
					imgSrc="https://loghi-famosi.com/wp-content/uploads/2020/11/Red-Bull-Logo.png"
				/>
				<PartnerCard
					title="Morettino"
					imgSrc="https://i0.wp.com/newsfood.com/wp-content/uploads/2009/07/17/20090717154415-bf0acfdc.jpg?fit=800%2C600&ssl=1"
				/>
				<PartnerCard
					title="Steccolecco"
					imgSrc="https://steccolecco.com/wp-content/uploads/2019/06/logo-233x300.png"
				/>
				<PartnerCard
					title="Gorillas"
					imgSrc="https://techprincess.it/wp-content/uploads/2022/02/Save-the-Waste-2.jpg"
				/>
				<PartnerCard
					title="Up2You"
					imgSrc="https://www.startup-turismo.it/wp-content/uploads/2022/06/logo-14.png"
				/>
				<PartnerCard
					title="Green Hole"
					imgSrc="https://uqrmecdn.s3.us-east-2.amazonaws.com/u/314241/701532-1237158219cc6b3f47dd0f4c6d417df04ef0cd4.jpg"
				/>
			</div>
		</section>
	);
}

function getSponsors2023() {
	return <></>;
}
