import React from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";

export default function SpeakerCardv2({
	nomeSpeaker,
	imgSrc,
	linkTalk,
	bio,
	setIsBioOpen,
	setSelectedSpeakerInfo,
}) {
	return (
		<card
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
				});
			}}
		>
			<div className="speaker-card">
				<LazyLoadImage
					src={imgSrc}
					alt={nomeSpeaker}
					height="300"
					className="speaker-card-image"
				/>
				<p className="speaker-card-text-v2">Scopri di più</p>
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
		</card>
	);
}
