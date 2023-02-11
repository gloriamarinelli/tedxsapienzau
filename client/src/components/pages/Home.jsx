import { Canvas } from "@react-three/fiber";
import React from "react";
import global from "../../resources/global.json";
import DynamicBubbleCanvas from "../components/DynamicBubbleCanvas";

export default function Home() {
	return (
		<>
			<div
				style={{
					backgroundColor: global.COLORS.BLU_SCURO_POSTER,
				}}
			>
				<div
					id="landing-cover"
					className="d-flex align-items-center justify-content-center"
					style={{
						height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
						width: "100vw",
						fontFamily: "GothamBold",
					}}
				>
					<div
						style={{
							position: "absolute",
							height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
							width: "100%",
						}}
					>
						<Canvas>
							<DynamicBubbleCanvas />
						</Canvas>
					</div>
					<h1 style={{ fontSize: "120px", zIndex: 2 }} className="text-white">
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
								backgroundColor: global.COLORS.ROSSO_POSTER,
								padding: "25px 60px",
								borderRadius: "25px",
								color: "#fff",
							}}
						>
							Scopri di più
						</h3>
					</div>
				</div>
			</div>
		</>
	);
}
