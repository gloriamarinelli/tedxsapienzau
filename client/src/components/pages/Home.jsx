import { useBounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import global from "../../resources/global.json";
import CustomCursor from "../components/CustomCursor";
import DynamicBubbleCanvas from "../components/DynamicBubbleCanvas";
import BackToZer from "../images/Logo BTZ.png";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {
	const [windowSize, setWindowSize] = useOutletContext();

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
						position: "relative",
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
							<DynamicBubbleCanvas windowSize={windowSize} />
						</Canvas>
					</div>
					{windowSize > global.UTILS.TABLET_WIDTH ? (
						<div
							style={{
								position: "absolute",
								height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
								width: "100%",
								display: "grid",
								placeItems: "center",
								pointerEvents: "none",
								userSelect: "none",
							}}
						>
							<img
								src={BackToZer}
								width="650"
								style={{
									transform: "translatey(-50px)",
									userSelect: "none",
								}}
							/>
						</div>
					) : (
						<div
							style={{
								position: "absolute",
								height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
								width: "100%",
								display: "grid",
								placeItems: "center",
								pointerEvents: "none",
							}}
						>
							<img
								src={BackToZer}
								width="300"
								style={{ transform: "translatey(-50px)" }}
							/>
						</div>
					)}

					<h1
						style={{ fontSize: "120px", zIndex: 2 }}
						className="text-white"
					></h1>

					<div
						style={{
							position: "absolute",
							bottom: "120px",
							cursor: "pointer",
						}}
					>
						<Link
							to="edizione2023"
							style={{
								textTransform: "uppercase",
								backgroundColor: global.COLORS.ROSSO_POSTER,
								padding: "25px 60px",
								borderRadius: "25px",
								color: "#fff",
								fontSize: "25px",
								textDecoration: "none",
							}}
						>
							Scopri di più
						</Link>
					</div>
				</div>
			</div>
			{/* <CustomCursor /> */}
		</>
	);
}
