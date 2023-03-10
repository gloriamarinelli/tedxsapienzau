import React from "react";
import "../../index.css";

export default function SpeakerCard({
	nomeSpeaker,
	imgSrc,
	linkTalk,
	bio,
	tag,
	fotoSidebar,
	setIsBioOpen,
	setSelectedSpeakerInfo,
}) {
	return (
		<div
			className="col-lg-4 col-md-6 col-sm-12"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				cursor: "pointer",
			}}
			onClick={() => {
				setIsBioOpen(true);
				setSelectedSpeakerInfo({
					nomeSpeaker: nomeSpeaker,
					imgSrc: imgSrc,
					tag: tag,
					linkTalk: linkTalk,
					bio: bio,
					fotoSidebar: fotoSidebar,
				});
			}}
		>
			<div className="speaker-card">
				<div className="speaker-card-filter"></div>
				<img
					src={`/images/speakers22/${imgSrc}`}
					height="300"
					className="speaker-card-image"
					alt={nomeSpeaker}
				/>
				<p className="speaker-card-text">Scopri di più</p>
			</div>
			<p
				style={{
					fontSize: "20px",
					textTransform: "uppercase",
					fontFamily: "GothamBold",
					maxWidth: "16ch",
					textAlign: "center",
					marginTop: "15px",
				}}
			>
				{nomeSpeaker}
			</p>
		</div>
	);
}
