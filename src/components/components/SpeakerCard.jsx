import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";

export default function SpeakerCard({ nomeSpeaker, imgSrc, linkTalk, bio }) {
	return (
		<div className="speaker-card">
			<LazyLoadImage
				src={imgSrc}
				alt={nomeSpeaker}
				height="300"
				className="speaker-card-image"
			/>
			<div className="speaker-card-text">				
				<p style={{ cursor: "pointer" }}>
					{nomeSpeaker}{" "}
					<FontAwesomeIcon
						style={{ marginLeft: "20px" }}
						icon={faCircleInfo}
					/>
				</p>
				
				<a
					href={linkTalk}
					style={{
						fontSize: "18px",
						marginTop: "-10px",
						cursor: "pointer",
						color: "white"
					}}
				>
					Vai al Talk <FontAwesomeIcon icon={faYoutube} />
				</a>
			</div>
		</div>
	);
}
