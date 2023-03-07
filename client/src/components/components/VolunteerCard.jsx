import React from "react";

export default function VolunteerCard({ id, nome, gruppo, image, link }) {
	return (
		<>
			<div
				key={id}
				className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex justify-content-center"
			>
				<div
					className="portfolio-item"
					style={{
						aspectRatio: 1,
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						cursor: link && "pointer",
					}}
				>
					<img
						src={`data:image/*;base64,${image}`}
						height="240"
						alt="foto volontario"
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
			</div>
		</>
	);
}
