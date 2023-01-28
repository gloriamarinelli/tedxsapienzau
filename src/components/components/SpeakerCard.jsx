import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";

export default function SpeakerCard({
	nomeSpeaker,
	imgSrc,
	linkTalk,
	bio,
	setIsBioOpen,
	setSelectedSpeakerInfo,
}) {
	return (
		<div className="speaker-card">
			<LazyLoadImage
				src={imgSrc}
				alt={nomeSpeaker}
				height="300"
				className="speaker-card-image"
			/>
			<div className="speaker-card-text">
				<p
					style={{ cursor: "pointer" }}
					onClick={() => {
						setIsBioOpen(true);
						setSelectedSpeakerInfo({
							nomeSpeaker: nomeSpeaker,
							imgSrc: imgSrc,
						});
					}}
				>
					{nomeSpeaker} <FontAwesomeIcon icon={faCircleInfo} />
				</p>
			</div>
		</div>
	);
}
