import React from "react";
import global from "../../resources/global.json";

export default function Home() {
	return (
		<>
			<div style={{ backgroundColor: "#000" }}>
				<div
					id="landing-cover"
					className="d-flex align-items-center justify-content-center"
					style={{
						height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
						width: "100vw",
						fontFamily: "GothamBold",
					}}
				>
					<h1 style={{ fontSize: "120px" }} className="text-white">
						BACK to ZERO
					</h1>
					<div
						style={{
							position: "absolute",
							bottom: "30px",
							cursor: "pointer",
						}}
					>
						<h3
							style={{
								textTransform: "uppercase",
								backgroundColor: global.COLORS.ROSSO_TED,
								padding: "25px 60px",
								borderRadius: "25px",
								color: "#fff",
							}}
						>
							Scopri di più
						</h3>
					</div>
				</div>
				<section
					style={{
						height: "150vh",
						width: "95vw",
						display: "grid",
						gridTemplateColumns: "50% 50%",
						fontFamily: "GothamBold",
						color: "#fff",
						margin: "50px auto 0 auto",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<h1 style={{ fontSize: "50px" }}>
							BACK TO ZERO{" "}
							<span
								style={{
									textDecoration: "underline",
								}}
							>
								EMISSION
							</span>
						</h1>
						<p style={{ maxWidth: "50ch" }} className="lead pt-5">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Suscipit exercitationem velit culpa ducimus
							aliquid consequatur excepturi deserunt voluptatem,
							sequi, consequuntur necessitatibus dolore quod in,
							maxime reiciendis veritatis quia praesentium rerum
							fugiat atque unde porro! Vero cum, architecto
							explicabo recusandae esse, impedit pariatur earum
							nihil inventore accusantium nisi natus, dolor
							dolorum?
						</p>
					</div>
					<div></div>
					<div></div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<h1 style={{ fontSize: "50px" }}>
							BACK TO ZERO{" "}
							<span
								style={{
									textDecoration: "underline",
								}}
							>
								SOCIAL
							</span>
						</h1>
						<p style={{ maxWidth: "50ch" }} className="lead pt-5">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Suscipit exercitationem velit culpa ducimus
							aliquid consequatur excepturi deserunt voluptatem,
							sequi, consequuntur necessitatibus dolore quod in,
							maxime reiciendis veritatis quia praesentium rerum
							fugiat atque unde porro! Vero cum, architecto
							explicabo recusandae esse, impedit pariatur earum
							nihil inventore accusantium nisi natus, dolor
							dolorum?
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
