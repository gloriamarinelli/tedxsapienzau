import { useEffect } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function BioSpeakerPopup({
	isBioOpen,
	setIsBioOpen,
	selectedSpeakerInfo,
}) {
	useEffect(() => {
		console.log(selectedSpeakerInfo);
	}, [selectedSpeakerInfo]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				position: "fixed",
				top: 0,
				left: 0,
				opacity: isBioOpen ? 1 : 0,
				pointerEvents: isBioOpen ? "initial" : "none",
				transition: "all 0.4s ease-in-out",
			}}
			onClick={() => setIsBioOpen(false)}
		>
			<div
				style={{
					height: "100vh",
					width: "600px",
					position: "fixed",
					top: 0,
					right: isBioOpen ? 0 : "-100%",
					background:
						"linear-gradient(307deg, rgb(130, 36, 51) 29%, #EB0028 98%)",
					transition: "all 0.4s ease-in-out",
				}}
			>
				<FontAwesomeIcon
					icon={faClose}
					size="2x"
					style={{
						color: "#fff",
						position: "absolute",
						left: "30px",
						top: "30px",
						cursor: "pointer",
					}}
					onClick={() => setIsBioOpen(false)}
				/>
				<div
					style={{
						width: "90%",
						margin: "auto",
						marginTop: "100px",
						color: "#fff",
						fontFamily: "GothamBold",
					}}
				>
					<LazyLoadImage
						src={selectedSpeakerInfo.imgSrc}
						alt={selectedSpeakerInfo.nomeSpeaker}
						height="300"
						className="speaker-card-image"
						style={{
							marginBottom: "50px",
						}}
					/>
					<h1>{selectedSpeakerInfo.nomeSpeaker}</h1>
					<p style={{ fontSize: "20px", marginTop: "20px" }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Inventore dolorem alias repellendus optio deleniti
						iusto facilis dolorum animi ipsam suscipit ipsa maiores
						nihil, ex quae asperiores quia expedita nemo error
						voluptatibus repellat placeat adipisci! Sequi a soluta
						delectus eum ducimus.
					</p>
				</div>
			</div>
		</div>
	);
}
