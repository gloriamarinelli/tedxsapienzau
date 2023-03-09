import React from "react";

export default function VolunteerCard({ id, nome, gruppo, image, link }) {
	return (
		<>
			<div
				key={id}
				className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex justify-content-center"
				style={{
					aspectRatio: 1,
					height: "300px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<img
					src={image && `/images/team23/${image}`}
					height="280"
					alt="foto volontario"
					style={{ maxWidth: "300px", objectFit: "cover" }}
				/>

				<div
					className="portfolio-caption"
					style={{
						justifyContent: "center",
					}}
				>
					<a
						href={link}
						style={{
							color: "black",
							textDecoration: "none",
							cursor: link && "pointer",
						}}
					>
						<div
							className="portfolio-caption-heading"
							style={{
								fontWeight: "bold",
								textAlign: "center",
								fontSize: "20px",
							}}
						>
							{nome}
						</div>
					</a>
				</div>
			</div>
		</>
	);
}
