import PartnerCard from "../components/PartnerCard";

export default function Partners() {
	return (
		<>
			<div
				className="header"
				style={{
					padding: "10px",
					backgroundImage:
						"linear-gradient(to left,	rgb(230, 43, 30),rgba(0, 0, 255, 0.5))",
					textAlign: "center",
					color: "black",
					clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
					height: "40vh",
					display: "grid",
					placeItems: "center",
				}}
			>
				<h1
					className="font-weight-bold mt-5 mb-5"
					style={{
						fontSize: "90px",
						fontWeight: "bold",
					}}
				>
					PARTNERS
				</h1>

				
			</div>
			<div
			className="mt-5 mb-5"
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						textAlign: "center",
					color: "black",
					}}
			>
<p>TEDxSapienzaU è un evento indipendente organizzato da studenti volontari che con il loro contributo e grazie al supporto di tutti gli enti, aziende e organizzazioni operano per il suo successo!</p>
</div>
			
			
			
			<h3>
				Chi ci ha supportato: <button>2023</button>
				<button>2022</button>
			</h3>

			<section class="page-section" id="portfolio">
				<div class="container">
					<div class="text-center">
						<h2 class="section-heading text-uppercase">
							Main Sponsor
						</h2>
					</div>
					<div class="row">
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
