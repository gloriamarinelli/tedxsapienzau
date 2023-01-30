import React from "react";

export default function ExecutiveTeamCard({ name, role, imgSrc }) {
	return (
		<>
			<div className="col-lg-3 mb-4 d-flex justify-content-center">
				<div
					className="portfolio-item"
					style={{
						aspectRatio: 1,
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<a
						className="portfolio-link"
						data-bs-toggle="modal"
						href=""
					>
						<div className="portfolio-hover">
							<div className="portfolio-hover-content">
								<i className="fas fa-plus fa-3x"></i>
							</div>
						</div>
						<img className="img-fluid" src={imgSrc} alt="..." />
					</a>
					<div
						className="portfolio-caption"
						style={{
							justifyContent: "center",
						}}
					>
						<div
							className="portfolio-caption-heading"
							style={{
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							{name}
						</div>

						<div
							className="portfolio-caption-heading"
							style={{
								fontStyle: "italic",
								textAlign: "center",
							}}
						>
							{role}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
