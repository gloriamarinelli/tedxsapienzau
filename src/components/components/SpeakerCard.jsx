import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";

export default function SpeakerCard({ nomeSpeaker, imgSrc }) {
	return (
		<div className="speaker-card">
			<LazyLoadImage
				src={imgSrc}
				alt={nomeSpeaker}
				height="300"
				className="speaker-card-image"
			/>
			<div className="speaker-card-text">
				<p>{nomeSpeaker}</p>
			</div>
		</div>
	);
}
